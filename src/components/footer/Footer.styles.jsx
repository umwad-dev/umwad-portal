import styled from "styled-components";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    flex-direction: row;
    padding: 0 20px;
    gap: 50px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    padding: 0 80px;
  }
`;

export const ContactMailImg = styled.img`
  width: 15.9px;
  height: 13.45px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 17.9px;
    height: 15.45px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 26px;
    height: 22px;
  }
`;

export const ContactPhoneImg = styled.img`
  width: 16.66px;
  height: 16.66px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 18px;
    height: 18px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 23px;
    height: 23px;
  }
`;

export const ContactInformationWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const ContactText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -2.2%;
  text-align: center;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    text-align: left;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -2.3%;
  }
`;

export const ContactTextLink = styled.a`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -2.2%;
  text-align: center;
  cursor: pointer;
  color: white;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.orange};
  }

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    text-align: left;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -2.3%;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  margin-top: 20px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 0px;
    padding: 0px;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.thunder};
  color: ${(props) => props.theme.white};
  padding: 40px 25px;
`;

export const CopyrightLink = styled.a`
  cursor: pointer;
  color: ${(props) => props.theme.white};
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  letter-spacing: -2.3%;
  margin-top: 25px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    margin-top: 0px;
    font-size: 14px;
    line-height: 21px;
  }
`;

export const CopyrightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 15px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    padding: 25px 75px;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -2.2%;
  text-align: center;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    text-align: left;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -2.3%;
  }

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    text-align: left;
    font-size: 14px;
  }
`;

export const DescriptionText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -2.2%;
  text-align: center;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    text-align: left;
    font-size: 10px;
    line-height: 15px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 16px;
    line-height: 24px;
    text-align: left;
    margin: 20px 0;
    width: 414px;
  }
`;

export const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Line = styled.hr`
  width: 100%;
  border: 1px solid ${(props) => props.theme.gravel};
  margin: 10px 0;
`;

export const LineContainer = styled.div`
  width: 100%;
  display: flex;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    padding: 0 15px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    padding: 0 75px;
  }
`;

export const Links = styled.a`
  width: 50%;
  cursor: pointer;
  color: ${(props) => props.theme.white};
  font-weight: 400;
  font-size: 12px;
  line-height: 14.22px;
  text-align: center;
  margin: 0;
  padding: 20px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.orange};
  }

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    padding: 5px;
    line-height: 0px;
    text-align: left;
    height: 20px;
    margin-top: 5px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 16px;
    line-height: 18.96px;
    width: 40%;
    margin-left: 30px;
  }
`;

export const LinksWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: 180px;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    height: 210px;
    width: 80%;
  }
`;

export const SocialIcon = styled.img`
  cursor: pointer;
  width: 39.5px;
`;

export const SocialWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 0;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    justify-content: flex-start;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -2.2%;
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.orange};

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    text-align: left;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    text-align: left;
    font-size: 24px;
    line-height: 32px;
  }
`;
