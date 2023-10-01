import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  border-radius: 5px;
  border: 1px solid #f6f6f6;
  background-color: ${(props) => props.theme.lightGray};
  margin: 0 25px;
  cursor: pointer;
  height: 108.53px;
  width: 260px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 320.99px;
    margin: 0;
    height: 125px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    height: 186px;
    width: 425px;
  }
`;

export const CardLogo = styled.img`
  width: 108.53px;
  height: 108.53px;
  border-radius: 5px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 125px;
    height: 125px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 186px;
    height: auto;
  }
`;

export const CardLogoWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const CardTag = styled.div`
  position: absolute;
  border-radius: 2.5px;
  font-weight: 400;
  font-size: 8px;
  line-height: 9.48px;
  text-align: center;
  color: ${(props) => props.theme.black};
  background-color: ${(props) => props.theme.white};
  padding: 1px;
  top: 5px;
  left: 5px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    top: 10px;
    left: 10px;
    padding: 4px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 12px;
    line-height: 14.22px;
    padding: 6px;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 11px;
  color: ${(props) => props.theme.darkGray};
  padding: 0;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 12px;
    line-height: 14.22px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 14px;
    line-height: 16.59px;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 0 10px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    padding: 0 20px;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 12px;
  line-height: 14.22px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 16px;
    line-height: 18.96px;
    margin-top: 10px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 20px;
    line-height: 23.7px;
  }
`;
