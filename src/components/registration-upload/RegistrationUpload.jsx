import React, { useState } from "react";
import Modal from "antd/es/modal";
import Upload from "antd/es/upload/Upload";
import { PictureOutlined } from "@ant-design/icons";
import { ImageContainer, ImageDetails } from "./RegistrationUpload.styles";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const RegistrationUpload = ({ setFile }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    const getFile =
      newFileList.length > 0 ? newFileList[0].originFileObj : null;

    setFile(getFile);
  };

  const uploadButton = (
    <ImageContainer>
      <PictureOutlined />
      <ImageDetails>Click or drag a file to this area to upload.</ImageDetails>
    </ImageContainer>
  );

  return (
    <>
      <Upload
        accept=".webp,.png,.jpeg,.jpg"
        beforeUpload={() => false}
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 1 ? null : uploadButton}
      </Upload>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="preview"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
};

export default RegistrationUpload;
