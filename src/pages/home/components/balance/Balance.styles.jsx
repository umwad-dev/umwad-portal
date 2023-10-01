import styled from "styled-components";

export const BalanceImg = styled.img`
  width: 210px;
  height: 237px;
  margin: 50px 0 30px 0;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 213px;
    height: 239px;
    margin: 0;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 325px;
    height: 366px;
  }
`;

export const CenterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    flex-direction: row-reverse;
    align-items: flex-start;
    padding: 40px 20px 0 20px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    padding: 60px 20px 0 20px;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 28px 10px 28px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    padding: 120px 40px 0 40px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    padding: 150px 130px 60px 130px;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #535353;
  margin-bottom: 20px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 16px;
    line-height: 24px;
    text-align: left;
    margin-bottom: 30px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    align-items: flex-start;
    padding-right: 40px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    padding-right: 210px;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    max-width: 1300px;
  }
`;

export const LearnMoreButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    align-items: flex-start;
    padding-left: 20px;
    margin-top: 0;
  }
`;

export const Subtitle = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 11.85px;
  text-align: center;
  margin-bottom: 5%;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 12px;
    line-height: 14.22px;
    margin-bottom: 2%;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 16px;
    line-height: 18.96px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: ${(props) => props.theme.black};

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 26px;
    line-height: 39px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 40px;
    line-height: 60px;
    padding: 0 120px;
  }
`;

export const TitleSpan = styled.span`
  display: inline;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: ${(props) => props.theme.orange};

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 26px;
    line-height: 39px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 40px;
    line-height: 60px;
  }
`;
