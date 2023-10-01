import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CoverPhoto = styled.img`
  width: 100%;
  height: 193px;
  background-size: cover;
  background-position: center;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    height: 326px;
    border-radius: 0px 0px 120px 120px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    height: 475px;
  }
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    align-items: flex-start;
    padding-left: 40px;
    margin-top: -30px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    padding-left: 70px;
    margin-top: -70px;
  }
`;

export const Line = styled.hr`
  width: 100%;
  border: 1px solid #f1f1f1;
  margin: 10px 0 50px 0;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    margin: 30px 10px 50px 10px;
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const LoadingContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    flex-direction: row;
    justify-content: flex-start;
    padding-left: 100px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    padding-left: 200px;
  }
`;

export const ProfilePhoto = styled.img`
  width: 149px;
  height: 149px;
  border-radius: 10px;
  margin-top: -40px;
  filter: drop-shadow(0px 2px 13px rgba(0, 0, 0, 0.1));

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 127px;
    height: 127px;
    margin-top: -25px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 202px;
    height: 202px;
  }
`;

export const StartupHeader = styled.div`
  text-align: center;
  border-radius: 10px;
  padding: 8px 40px;
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.orange};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 350px;
    font-weight: 400;
    font-size: 20px;
    line-height: 23.7px;
    margin-bottom: 10px;
  }
`;

export const StartupName = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 26.4px;
  letter-spacing: -2.2%;
  text-align: center;
  padding: 10px 0 0 0;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    margin-top: 10px;
    text-align: left;
    font-size: 28px;
    line-height: 30.8px;
    margin-bottom: 7px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 35px;
    line-height: 38.5px;
  }
`;

export const Vision = styled.p`
  font-weight: 300;
  font-size: 12px;
  line-height: 14.22px;
  letter-spacing: -1.9%;
  text-align: center;
  color: #343434;
  max-width: 305px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    padding-right: 50px;
    text-align: left;
    max-width: 100%;
    line-height: 18px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 18px;
    line-height: 27px;
  }
`;
