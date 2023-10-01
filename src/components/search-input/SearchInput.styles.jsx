import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const SearchImage = styled.img`
  position: absolute;
  left: 18px;
  top: 30%;
  width: 17px;
  height: 18px;
`;

export const StyledSearchInput = styled.input`
  border-radius: 5px;
  width: 100%;
  padding: 10px;
  color: ${(props) => props.theme.black};
  border: 1px solid ${(props) => props.theme.lightGray};
  background-color: ${(props) => props.theme.lightGray};
  outline: none;
  padding-left: 40px;
  font-size: 14px;
  line-height: 16.59px;
`;
