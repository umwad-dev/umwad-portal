import styled from "styled-components";
import Form from "antd/es/form";
import Input from "antd/es/input";

export const BannerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ImageLink = styled.a`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -1.9%;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  margin-left: 30px;
`;

export const StyledFormItem = styled(Form.Item)`
  margin: 20px 0 30px 0;
`;

export const StyledInput = styled(Input)`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -1.9%;
  width: 100%;
`;

export const UpdateFormTitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
`;

export const UpdateFormTitleSpan = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #fc787a;
`;

export const UploadContainer = styled.div`
  width: 100%;

  .ant-upload {
    width: 100% !important;
  }

  .ant-upload-list-item-container {
    width: 100% !important;
  }
`;

export const UploadInfo = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 16.34px;
  text-align: center;
  color: #888888;
`;
