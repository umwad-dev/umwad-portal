import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  collection,
  doc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import AntdModal from "antd/es/modal";
import Button from "antd/es/button";
import Form from "antd/es/form";
import {
  BannerInfoContainer,
  Container,
  ImageLink,
  SpinnerContainer,
  StyledFormItem,
  StyledInput,
  UpdateFormTitle,
  UpdateFormTitleSpan,
  UploadContainer,
  UploadInfo,
} from "./Modal.styles";
import { db, storage } from "../../../../../../../firebase/firebase.config";
import { useNotification } from "../../../../../../../hooks";
import { RegistrationUpload, Spinner } from "../../../../../../../components";

const Modal = ({ data, onCancel, open, title, type }) => {
  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const { auth } = useSelector((state) => state.auth);
  const { contextHolder, openNotification } = useNotification();

  const col = collection(db, "fabLabProducts");
  const dDoc = doc(col);
  const imageRef = ref(storage, `fabLabProducts/${Date.now() + auth.uid}`);

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        description: data.description,
        title: data.title,
      });
    }
  }, [data, form]);

  const onFinish = async (values) => {
    delete values.bannerUrl;

    values.ownerUid = auth.uid;

    if (type === "add") {
      if (banner === null) {
        return openNotification({
          isSuccess: false,
          message: "Upload your banner image.",
        });
      }

      try {
        setLoading(true);

        const snapshot = await uploadBytes(imageRef, banner);
        const bannerUrl = await getDownloadURL(snapshot.ref);

        values.bannerUrl = bannerUrl;
        values.createdAt = serverTimestamp();

        await setDoc(dDoc, { ...values });

        openNotification({
          isSuccess: true,
          message: "Successfully added new product data.",
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

        const rRef = doc(db, "fabLabProducts", data.uid);

        if (banner === null) {
          await updateDoc(rRef, {
            ...values,
          });
        } else {
          const snapshot = await uploadBytes(imageRef, banner);
          const bannerUrl = await getDownloadURL(snapshot.ref);
          const deleteImgRef = ref(storage, data.bannerUrl);

          await deleteObject(deleteImgRef);

          values.bannerUrl = bannerUrl;

          await updateDoc(rRef, {
            ...values,
          });
        }

        openNotification({
          isSuccess: true,
          message: "Successfully updated selected product data.",
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
                href={data ? data.bannerUrl : null}
                rel="noopener noreferrer"
                target="_blank"
              >
                Click here to view
              </ImageLink>
            </>
          )}
          <UploadContainer>
            <StyledFormItem label="Supporting Image" name="bannerUrl" required>
              <RegistrationUpload setFile={setBanner} />
            </StyledFormItem>
          </UploadContainer>
          <BannerInfoContainer>
            <UploadInfo>
              *Suggested supporting image height size is between 500 to 590px
            </UploadInfo>
            <UploadInfo>*File must be under 10 MB</UploadInfo>
            <UploadInfo>*PNG, JPG, and WEBP only</UploadInfo>
          </BannerInfoContainer>
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
