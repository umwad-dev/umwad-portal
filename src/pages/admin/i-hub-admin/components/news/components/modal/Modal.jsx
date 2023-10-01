import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import slug from "slug";
import {
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
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
import ReactQuill from "react-quill";
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
import "react-quill/dist/quill.snow.css";

const Modal = ({ data, onCancel, open, title, type }) => {
  const [banner, setBanner] = useState(null);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const { auth } = useSelector((state) => state.auth);
  const { contextHolder, openNotification } = useNotification();

  const newsCol = collection(db, "news");
  const newsDoc = doc(newsCol);
  const imageRef = ref(storage, `news/${Date.now() + auth.uid}`);

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        author: data.author,
        description: data.description,
        position: data.position,
        title: data.title,
      });
    }
  }, [data, form]);

  const onFinish = async (values) => {
    delete values.bannerUrl;

    values.description = description;
    values.ownerUid = auth.uid;
    values.type = 4;
    values.featured = false;
    values.slug = slug(values.title);

    if (type === "add") {
      if (banner === null) {
        return openNotification({
          isSuccess: false,
          message: "Upload your banner image.",
        });
      }

      try {
        setLoading(true);

        const newsCol = collection(db, "news");
        const newsQuery = query(newsCol, where("slug", "==", values.slug));

        const slugSnapshot = await getDocs(newsQuery);

        if (!slugSnapshot.empty) {
          values.slug = slug(values.title + "-2");
        }

        const snapshot = await uploadBytes(imageRef, banner);
        const bannerUrl = await getDownloadURL(snapshot.ref);

        values.bannerUrl = bannerUrl;
        values.createdAt = serverTimestamp();

        await setDoc(newsDoc, { ...values });

        openNotification({
          isSuccess: true,
          message: "Successfully added new article/news data.",
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

        const newsCol = collection(db, "news");
        const newsQuery = query(newsCol, where("slug", "==", values.slug));

        const slugSnapshot = await getDocs(newsQuery);

        if (!slugSnapshot.empty) {
          values.slug = slug(values.title + "-2");
        }

        const newsRef = doc(db, "news", data.uid);

        if (banner === null) {
          await updateDoc(newsRef, {
            ...values,
          });
        } else {
          const snapshot = await uploadBytes(imageRef, banner);
          const bannerUrl = await getDownloadURL(snapshot.ref);
          const deleteImgRef = ref(storage, data.bannerUrl);

          await deleteObject(deleteImgRef);

          values.bannerUrl = bannerUrl;

          await updateDoc(newsRef, {
            ...values,
          });
        }

        openNotification({
          isSuccess: true,
          message: "Successfully updated selected article/news data.",
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
            label="Author"
            name="author"
            rules={[
              {
                message: "Please input author.",
                required: true,
              },
            ]}
          >
            <StyledInput placeholder="Enter author" />
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
            <ReactQuill
              theme="snow"
              value={description}
              onChange={setDescription}
            />
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
