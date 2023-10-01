import styled from "styled-components";

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 25px;
  margin-top: 40px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    justify-content: center;
    align-items: center;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 20px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    padding: 0;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    gap: 20px;
    padding: 40px 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15% 0;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    padding: 10% 7%;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    padding: 8% 10%;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 11.85px;
  text-align: center;
  margin-bottom: 10px;
  padding: 0 80px;
  color: #121212;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 12px;
    line-height: 14.22px;
    margin-bottom: 20px;
    text-align: left;
    padding: 0;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 16px;
    line-height: 18.96px;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    max-width: 1300px;
  }
`;

export const NoDataContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  text-align: center;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 30px;
    line-height: 45px;
    text-align: left;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 40px;
    line-height: 60px;
    margin-bottom: 20px;
  }
`;

export const TitleSpan = styled.span`
  display: inline;
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  text-align: center;
  color: ${(props) => props.theme.orange};

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 30px;
    line-height: 45px;
    margin-bottom: 10px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 40px;
    line-height: 60px;
    margin-bottom: 20px;
  }
`;
