import styled from "styled-components";
import SelectArrow from "../../assets/components/select-arrow.svg";

export const StyledSelect = styled.select`
  font-weight: 600;
  font-size: 14px;
  line-height: 16.59px;
  border: none;
  outline: none;
  width: 100px;
  appearance: none;
  background-image: url(${SelectArrow});
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 50%;
  padding: 0 12px;
  color: ${(props) => props.theme.black};
  background-color: ${(props) => props.theme.white};
  cursor: pointer;

  option {
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.black};
    padding: 5px;
  }

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 20px;
    line-height: 23.7px;
    width: 150px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 150px;

    padding: 5px 20px;
  }
`;
