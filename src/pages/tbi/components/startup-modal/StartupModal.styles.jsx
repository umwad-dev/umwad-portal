import styled from "styled-components";
import Modal from "antd/es/modal";

export const Container = styled.div`
  width: 270px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    flex-wrap: wrap;
    flex-direction: row;
    width: 700px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    margin: 20px;
    gap: 30px;
    width: 1000px;
  }
`;

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  .ant-modal-close {
    margin-top: -50px;
    margin-left: 20px;
    color: white !important;
    background-color: transparent !important;
  }
`;
