import styled from "styled-components";
import SelectArrow from "../../assets/components/select-arrow.svg";

export const StyledSelect = styled.select`
  font-weight: 400;
  font-size: 14px;
  line-height: 16.59px;
  border: none;
  outline: none;
  width: 100%;
  appearance: none;
  background-image: url(${SelectArrow});
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 50%;
  padding: 15px 20px;
  border-radius: 5px;
  color: ${(props) => props.theme.black};
  background-color: ${(props) => props.theme.ghostWhite};
  cursor: pointer;

  option {
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.black};
    padding: 5px;
    line-height: 16.59px;
    font-weight: 400;
    font-size: 14px;
  }
`;
