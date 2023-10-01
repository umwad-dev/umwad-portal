import React, { useEffect, useState } from "react";
import AntdModal from "antd/es/modal";
import Button from "antd/es/button";
import Form from "antd/es/form";
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import {
  Container,
  SpinnerContainer,
  StyledDatePicker,
  StyledFormItem,
  StyledInput,
} from "./Modal.styles";
import { db } from "../../../../../../../firebase/firebase.config";
import { useSelector } from "react-redux";
import { useNotification } from "../../../../../../../hooks";
import { Spinner } from "../../../../../../../components";

const Modal = ({ data, onCancel, open, title, type }) => {
  const [quarter, setQuarter] = useState("");
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const { auth } = useSelector((state) => state.auth);
  const { contextHolder, openNotification } = useNotification();

  const incomeCol = collection(db, "startupIncome");
  const incomeDoc = doc(incomeCol);

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        income: data.income,
        currentQuarter: data.quarter,
      });
    }
  }, [data, form]);

  const onFinish = async (values) => {
    values.income = Number(values.income);

    if (type === "add") {
      values.ownerUid = auth.uid;
      values.quarter = quarter;

      const getYear = quarter.split("-")[0];
      const getQuarterNumber = quarter.split("-")[1];

      values.year = getYear;
      values.quart = getQuarterNumber;

      try {
        setLoading(true);
        await setDoc(incomeDoc, { ...values });

        openNotification({
          isSuccess: true,
          message: "Successfully added new income data.",
        });
        form.resetFields();
        onCancel();
        setLoading(false);
      } catch (err) {
        setLoading(false);
        return openNotification({
          isSuccess: false,
          message: "Something went wrong.",
        });
      }
    } else {
      try {
        delete values.currentQuarter;
        setLoading(true);

        const ref = doc(db, "startupIncome", data.uid);

        if (values.quarter === undefined) {
          await updateDoc(ref, {
            income: values.income,
          });
        } else {
          values.quarter = quarter;

          const getYear = quarter.split("-")[0];
          const getQuarterNumber = quarter.split("-")[1];

          await updateDoc(ref, {
            income: values.income,
            quarter: values.quarter,
            year: getYear,
            quart: getQuarterNumber,
          });
        }

        openNotification({
          isSuccess: true,
          message: "Successfully updated selected income data.",
        });

        form.resetFields();
        onCancel();
        setLoading(false);
      } catch (err) {
        setLoading(false);
        return openNotification({
          isSuccess: false,
          message: "Something went wrong.",
        });
      }
    }
  };

  const onFormCancel = () => {
    form.resetFields();
    onCancel();
  };

  const handleDateChange = (_, dateString) => {
    setQuarter(dateString);
  };

  return (
    <AntdModal footer={null} onCancel={onFormCancel} open={open} title={title}>
      {contextHolder}
      <Container>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          {type !== "add" && (
            <StyledFormItem label="Current Quarter" name="currentQuarter">
              <StyledInput readOnly />
            </StyledFormItem>
          )}
          <StyledFormItem
            label={type === "add" ? "Quarter" : "Update Quarter"}
            name="quarter"
            rules={[
              {
                message: "Please select quarter.",
                required: type === "add" ? true : false,
              },
            ]}
          >
            <StyledDatePicker
              style={{ width: "100%" }}
              onChange={handleDateChange}
              picker="quarter"
              placeholder={type === "add" ? "Select quarter" : "Update quarter"}
            />
          </StyledFormItem>
          <StyledFormItem
            label="Gross Income"
            name="income"
            rules={[
              {
                message: "Please input income.",
                required: true,
              },
            ]}
          >
            <StyledInput placeholder="Enter income" type="number" />
          </StyledFormItem>
          <StyledFormItem>
            {loading ? (
              <SpinnerContainer>
                <Spinner />
              </SpinnerContainer>
            ) : (
              <Button htmlType="submit" type="primary">
                {type === "add" ? "Add" : "Update"}
              </Button>
            )}
          </StyledFormItem>
        </Form>
      </Container>
    </AntdModal>
  );
};

export default Modal;
