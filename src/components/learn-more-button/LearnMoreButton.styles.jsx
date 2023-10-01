import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const LearnMoreArrow = styled.img`
  width: 20px;
  height: 7px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 22px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 45px;
    height: 10px;
  }
`;

export const LearnMoreText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  margin: 0;
  color: ${(props) => props.theme.orange};

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 16px;
    line-height: 24px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 20px;
    line-height: 30px;
  }
`;
