import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20% 0;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    padding: 80px 0;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    padding: 120px 0 150px 0;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 11.85px;
  text-align: center;
  margin-bottom: 8px;
  padding: 0 30px;
  color: #121212;
  margin-bottom: 50px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 14px;
    line-height: 16.59px;
    margin-bottom: 30px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 16px;
    line-height: 18.96px;
  }
`;

export const PartnerImg = styled.img`
  width: 53.5px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 59.05px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 96px;
  }
`;

export const PartnerImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.1);
  width: 134.27px;
  height: 93.51px;
  cursor: pointer;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 137.78px;
    height: 95.96px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 224px;
    height: 156px;
  }
`;

export const PartnersWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  gap: 15px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    gap: 30px;
    padding: 10px 15px 0 0;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    padding: 30px 15px 0 0;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  text-align: center;
  margin-bottom: 10px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 30px;
    line-height: 45px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 40px;
    line-height: 60px;
  }
`;

export const TitleSpan = styled.span`
  display: inline;
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  text-align: center;
  margin-bottom: 10px;
  color: ${(props) => props.theme.orange};

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 30px;
    line-height: 45px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 40px;
    line-height: 60px;
  }
`;
