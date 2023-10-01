import styled from "styled-components";
import SelectArrow from "../../assets/components/select-arrow.svg";

export const StyledSelect = styled.select`
  font-weight: 600;
  font-size: 14px;
  line-height: 16.59px;
  border: none;
  outline: none;
  width: 105px;
  appearance: none;
  background-image: url(${SelectArrow});
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 50%;
  padding: 0 5px;
  color: ${(props) => props.theme.black};
  background-color: ${(props) => props.theme.white};
  cursor: pointer;
  padding-right: 10px;

  option {
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.black};
    padding: 10px;
  }

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 20px;
    line-height: 23.7px;
    width: 160px;
    padding-right: 20px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 180px;
    padding: 5px 20px;
  }
`;
