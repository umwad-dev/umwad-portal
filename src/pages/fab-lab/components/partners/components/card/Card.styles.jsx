import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 210px;
  height: 146.25px;
  box-shadow: 3px 5px 5px rgba(92, 96, 104, 0.15);
  background-color: ${(props) => props.theme.white};
  z-index: 1000;
  border-radius: 10px;
  cursor: pointer;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 193.02px;
  }
`;

export const Logo = styled.img`
  width: 90px;
  height: auto;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 82.72px;
    height: auto;
  }
`;
