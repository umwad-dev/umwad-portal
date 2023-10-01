import styled from "styled-components";

export const PrimaryButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 16.59px;
  text-align: center;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  padding: 10px 20px;
  width: auto;
  background-color: ${(props) => props.theme.orange};
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.orange};
  color: ${(props) => props.theme.white};
  border-radius: 5px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
`;
