import React, { useEffect, useState } from "react";
import AntdModal from "antd/es/modal";
import Button from "antd/es/button";
import Form from "antd/es/form";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { useSelector } from "react-redux";
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { useNotification } from "../../../../../../../hooks";
import { db, storage } from "../../../../../../../firebase/firebase.config";
import {
  Container,
  ImageLink,
  SpinnerContainer,
  StyledFormItem,
  StyledInput,
  UpdateFormTitle,
  UpdateFormTitleSpan,
} from "./Modal.styles";
import { ImageUpload, Spinner } from "../../../../../../../components";

const Modal = ({ data, onCancel, open, title, type }) => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [form] = Form.useForm();

  const { auth } = useSelector((state) => state.auth);
  const { contextHolder, openNotification } = useNotification();

  const partnersCol = collection(db, "iHubPartners");
  const partnerDoc = doc(partnersCol);
  const imageRef = ref(storage, `partnerLogo/${Date.now() + auth.uid}`);

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        title: data.title,
      });
    }
  }, [data, form]);

  const onFinish = async (values) => {
    delete values.imageUrl;

    if (type === "add") {
      if (file === null) {
        return openNotification({
          isSuccess: false,
          message: "Please upload your partner's logo.",
        });
      }

      values.ownerUid = auth.uid;

      try {
        setLoading(true);
        const snapshot = await uploadBytes(imageRef, file);
        const imageUrl = await getDownloadURL(snapshot.ref);

        values.imageUrl = imageUrl;

        await setDoc(partnerDoc, { ...values });

        openNotification({
          isSuccess: true,
          message: "Successfully added new partner's data.",
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

        const partnerRef = doc(db, "iHubPartners", data.uid);

        if (file === null) {
          await updateDoc(partnerRef, {
            title: values.title,
          });
        } else {
          const snapshot = await uploadBytes(imageRef, file);
          const imageUrl = await getDownloadURL(snapshot.ref);
          const deleteImgRef = ref(storage, data.imageUrl);

          await deleteObject(deleteImgRef);
          await updateDoc(partnerRef, {
            title: values.title,
            imageUrl,
          });
        }

        openNotification({
          isSuccess: true,
          message: "Successfully updated selected partner's data.",
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
          {type !== "add" && (
            <>
              <UpdateFormTitle>
                <UpdateFormTitleSpan>*</UpdateFormTitleSpan> Current Image
              </UpdateFormTitle>
              <ImageLink
                href={data ? data.imageUrl : null}
                rel="noopener noreferrer"
                target="_blank"
              >
                Click here to view
              </ImageLink>
            </>
          )}
          <StyledFormItem
            label={type === "add" ? "Partner Logo" : "Update Partner Logo"}
            name="imageUrl"
          >
            <ImageUpload setFile={setFile} />
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
