import styled from "styled-components";
import Form from "antd/es/form";
import Input from "antd/es/input";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
