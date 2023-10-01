import styled from "styled-components";
import Button from "antd/es/button";
import Drawer from "antd/es/drawer";
import Select from "antd/es/select";

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
`;

export const Header = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 18.96px;
`;

export const Line = styled.hr`
  width: 100%;
  border: 1px solid #f1f1f1;
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledApplyButton = styled(Button)`
  width: 100%;
  padding-bottom: 35px;
  margin-top: 15px;
  padding-top: 10px;
`;

export const StyledButton = styled(Button)`
  min-width: 126px;
`;

export const StyledDrawer = styled(Drawer)`
  .ant-drawer-header {
    padding-right: 5px;
  }

  .ant-drawer-header-title {
    display: flex;
    flex-direction: row-reverse;
  }

  .ant-drawer-title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 18.96px;
  }
`;

export const StyledResetButton = styled(Button)`
  width: 100%;
  padding-bottom: 35px;
  border-color: ${(props) => props.theme.orange};
  color: ${(props) => props.theme.orange};
  margin-top: 10px;
  padding-top: 10px;
`;

export const StyledSelect = styled(Select)`
  width: 100%;
`;

export const TypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;
