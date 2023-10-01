import React, { useEffect, useState } from "react";
import AntdModal from "antd/es/modal";
import Button from "antd/es/button";
import Form from "antd/es/form";
import Select from "antd/es/select";
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import {
  Container,
  SpinnerContainer,
  StyledFormItem,
  StyledInput,
} from "./Modal.styles";
import { db } from "../../../../../../../firebase/firebase.config";
import { useSelector } from "react-redux";
import { useNotification } from "../../../../../../../hooks";
import { Spinner } from "../../../../../../../components";

const Modal = ({ data, onCancel, open, title, type }) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const { auth } = useSelector((state) => state.auth);
  const { contextHolder, openNotification } = useNotification();

  const employeesCol = collection(db, "startupEmployees");
  const employeeDoc = doc(employeesCol);

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        fullname: data.fullname,
        position: data.position,
        gender: data.gender,
      });
    }
  }, [data, form]);

  const onFinish = async (values) => {
    if (type === "add") {
      values.ownerUid = auth.uid;

      try {
        setLoading(true);
        await setDoc(employeeDoc, { ...values });

        openNotification({
          isSuccess: true,
          message: "Successfully added new employee's data.",
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
        setLoading(true);

        const ref = doc(db, "startupEmployees", data.uid);

        await updateDoc(ref, {
          fullname: values.fullname,
          gender: values.gender,
          position: values.position,
        });

        openNotification({
          isSuccess: true,
          message: "Successfully updated selected employee's data.",
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

  return (
    <AntdModal footer={null} onCancel={onFormCancel} open={open} title={title}>
      {contextHolder}
      <Container>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <StyledFormItem
            label="Fullname"
            name="fullname"
            rules={[
              {
                message: "Please input fullname.",
                required: true,
              },
            ]}
          >
            <StyledInput placeholder="Enter fullname" />
          </StyledFormItem>
          <StyledFormItem
            label="Position"
            name="position"
            rules={[
              {
                message: "Please input position.",
                required: true,
              },
            ]}
          >
            <StyledInput placeholder="Enter position" />
          </StyledFormItem>
          <StyledFormItem
            label="Gender"
            name="gender"
            rules={[
              {
                message: "Please select gender.",
                required: true,
              },
            ]}
          >
            <Select options={genderOptions} />
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
