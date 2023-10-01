import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  filter: drop-shadow(0px 4px 13px rgba(0, 0, 0, 0.1));

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    flex-direction: row;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14.22px;
  color: ${(props) => props.theme.gray};
  margin-bottom: 20px;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 16px;
    line-height: 18.96px;
  }
`;

export const DescriptionWrapper = styled.div`
  width: 305px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  background-color: ${(props) => props.theme.white};
  padding: 25px;
  gap: 15px;
  z-index: -100;
  margin-top: -15px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 400.64px;
    height: 285.31px;
    margin-left: -20px;
    margin-top: 0px;
    padding: 50px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 650px;
    height: 419px;
    padding: 50px 70px;
  }
`;

export const FeaturedImg = styled.img`
  width: 305px;
  height: auto;
  border-radius: 10px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 358.85px;
    height: 285.31px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 527px;
    height: 419px;
  }
`;

export const ReadMore = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.orange};
  cursor: pointer;
  margin-bottom: 30px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 12px;
    line-height: 18px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Time = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14.22px;
  color: ${(props) => props.theme.gray};
  margin-top: 30px;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 16px;
    line-height: 18.96px;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 16px;
  line-height: 15.84px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 18px;
    line-height: 17.82px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 24px;
    line-height: 23.76px;
    margin: 20px 0;
  }
`;
