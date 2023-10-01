import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 10px;
  cursor: pointer;
  border-radius: 10px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    gap: 40px;
    padding: 20px 30px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    padding: 40px;
    justify-content: flex-start;
    gap: 100px;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactFlex = styled.div`
  display: flex;
  gap: 20px;
`;

export const ContactImg = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 10px;
  margin-top: -13px;
`;

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 250px;
  height: 250px;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 400px;
    height: 397px;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Subtitle = styled.p`
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -2.2%;
  text-align: center;
  margin-bottom: 20px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    text-align: left;
  }
`;

export const Text = styled.p`
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -2.2%;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -2.2%;
  text-align: center;
  padding: 15px 0;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    text-align: left;
    padding: 0;
  }
`;
