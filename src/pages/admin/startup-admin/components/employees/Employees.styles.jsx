import styled from "styled-components";

export const AddContainer = styled.div`
  display: flex;
  padding: 10px 0 30px 0;
  width: 30%;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Count = styled.p`
  display: table-cell;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -2.2%;
  color: ${(props) => props.theme.black};
`;

export const Link = styled.p`
  cursor: pointer;
  color: ${(props) => props.theme.blue};
  display: table-cell;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -2.2%;
`;

export const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;

export const RemoveLink = styled.p`
  cursor: pointer;
  color: ${(props) => props.theme.orange};
  display: table-cell;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -2.2%;
`;

export const RowContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;
