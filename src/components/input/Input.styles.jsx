import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
`;

export const Label = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 16.59px;
  margin-left: 5px;
`;

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 5px;
  background-color: ${(props) => props.theme.ghostWhite};
  font-size: 14px;
  line-height: 16.59px;
  font-weight: 400;
  padding: 15px;
  color: ${(props) => props.theme.black};
  border: 1px solid ${(props) => props.theme.ghostWhite};
`;
