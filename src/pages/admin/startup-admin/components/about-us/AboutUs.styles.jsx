import styled from "styled-components";
import Form from "antd/es/form";

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  padding: 0;
  margin-bottom: 50px;
`;

export const Heading = styled.h1`
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -2.2%;
  color: ${(props) => props.theme.black};
`;

export const ImageLink = styled.a`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -1.9%;
`;

export const LeftContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  background-color: ${(props) => props.theme.white};
  border-radius: 5px;

  .ql-editor {
    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 15px;
      letter-spacing: -2.5%;
    }
  }
`;

export const LeftFormContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 0 15px;
`;

export const LeftProfileContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PrimaryButton = styled.button`
  width: 160.67px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 7px 10px;
  background-color: ${(props) => props.theme.orange};
  border: 1px solid ${(props) => props.theme.orange};
  color: ${(props) => props.theme.white};
  outline: none;
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -1.9%;

  &:disabled {
    background-color: ${(props) => props.theme.dimGray};
    border: 1px solid ${(props) => props.theme.dimGray};
    color: ${(props) => props.theme.black};
  }
`;

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const RightButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 30px;
  gap: 20px;
  background-color: ${(props) => props.theme.white};
  border-radius: 5px 0 0 5px;
`;

export const RightContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-right: -20px;
`;

export const SaveButton = styled.button`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 7px 10px;
  background-color: ${(props) => props.theme.purple};
  border: 1px solid ${(props) => props.theme.purple};
  color: ${(props) => props.theme.white};
  outline: none;
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -1.9%;

  &:disabled {
    background-color: ${(props) => props.theme.dimGray};
    border: 1px solid ${(props) => props.theme.dimGray};
    color: ${(props) => props.theme.black};
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: space-between;
`;

export const StyledFormItem = styled(Form.Item)`
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: -2.5%;
`;

export const Subtitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -2.2%;
  margin-bottom: 20px;
  color: ${(props) => props.theme.orange};
`;

export const UpdateButton = styled.button`
  display: flex;
  width: 127px;
  justify-content: center;
  align-items: center;
  padding: 7px 10px;
  background-color: ${(props) => props.theme.violet};
  border: 1px solid ${(props) => props.theme.violet};
  color: ${(props) => props.theme.white};
  outline: none;
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -1.9%;
  border-radius: 5px;
`;

export const UpdateLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
