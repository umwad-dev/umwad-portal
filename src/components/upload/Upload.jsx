import React from "react";
import AntdUpload from "antd/es/upload";
import message from "antd/es/message";
import { PictureOutlined } from "@ant-design/icons";
import { Info } from "./Upload.styles";

const { Dragger } = AntdUpload;

const Upload = ({ onSetUploadState }) => {
  const props = {
    name: "file",
    multiple: false,
    beforeUpload: () => false,
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        let reader = new FileReader();
        reader.readAsDataURL(info.file);
        onSetUploadState(info.file);
      }
      if (status === "done") {
        message.success(`${info.file.name} file attached successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file attached failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <PictureOutlined style={{ color: "#1d3461" }} />
      </p>
      <Info>Click or drag a file to this area to upload.</Info>
    </Dragger>
  );
};

export default Upload;
