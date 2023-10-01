import styled from "styled-components";

export const SocialButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 14px;
  line-height: 16.59px;
  text-align: center;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  padding: 15px;
  width: auto;
  background-color: ${(props) => props.theme.white};
  cursor: pointer;
  border: 1px solid #dbdbdb;
  color: ${(props) => props.theme.black};
  border-radius: 10px;
`;

export const SocialIcon = styled.img`
  width: 19px;
  height: 19px;
`;
