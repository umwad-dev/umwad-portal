import styled from "styled-components";
import Button from "antd/es/button";
import Radio from "antd/es/radio";
import Select from "antd/es/select";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 18.96px;
  margin-top: 20px;
`;

export const Line = styled.hr`
  width: 100%;
  border: 1px solid #f1f1f1;
`;

export const StyledRadio = styled(Radio)`
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 16.59px;
    color: #535353;
  }
`;

export const StyledResetButton = styled(Button)`
  width: 100%;
  padding-bottom: 35px;
  border-color: ${(props) => props.theme.orange};
  color: ${(props) => props.theme.white};
  margin-top: 10px;
  padding-top: 10px;
`;

export const StyledSelect = styled(Select)`
  width: 100%;

  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 14.22px;
    color: #535353;
  }
`;
