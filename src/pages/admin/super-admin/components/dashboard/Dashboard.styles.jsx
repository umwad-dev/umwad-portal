import styled from "styled-components";
import Card from "antd/es/card";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
  height: 1000px;
  gap: 20px;
`;

export const StyledCard = styled(Card)`
  width: 100%;
`;
