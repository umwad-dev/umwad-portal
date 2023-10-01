import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    gap: 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 265px;
  height: 103px;
  background-color: #1d3461;
  border-radius: 10px;
  color: white;
  padding: 10px 30px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 315.57px;
    height: 148.58px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 514px;
    height: 242px;
    padding: 10px 30px;
  }
`;

export const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 30px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 41px;
    height: 41px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 68px;
    height: 68px;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 12px;
    line-height: 18px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 18px;
    line-height: 27px;
  }
`;
