import React, { useEffect, useState } from "react";
import AntdModal from "antd/es/modal";
import Button from "antd/es/button";
import Form from "antd/es/form";
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

  const servicesCol = collection(db, "startupServices");
  const serviceDoc = doc(servicesCol);

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        description: data.description,
        title: data.title,
      });
    }
  }, [data, form]);

  const onFinish = async (values) => {
    if (type === "add") {
      values.ownerUid = auth.uid;

      try {
        setLoading(true);
        await setDoc(serviceDoc, { ...values });

        openNotification({
          isSuccess: true,
          message: "Successfully added new services' data.",
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

        const serviceRef = doc(db, "startupServices", data.uid);

        await updateDoc(serviceRef, {
          title: values.title,
          description: values.description,
        });

        openNotification({
          isSuccess: true,
          message: "Successfully updated selected services' data.",
        });

        form.resetFields();
        onCancel();
        setLoading(false);
      } catch (err) {
        console.log(err);
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
            label="Title"
            name="title"
            rules={[
              {
                message: "Please input title.",
                required: true,
              },
            ]}
          >
            <StyledInput placeholder="Enter title" />
          </StyledFormItem>
          <StyledFormItem
            label="Description"
            name="description"
            rules={[
              {
                message: "Please input description.",
                required: true,
              },
            ]}
          >
            <StyledInput placeholder="Enter description" />
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
