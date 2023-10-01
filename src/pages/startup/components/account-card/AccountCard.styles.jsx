import styled from "styled-components";

export const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 305px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 10px 50px rgba(92, 96, 104, 0.1);
  border-radius: 10px;
  background-color: ${(props) => props.theme.white};
  border: 1px solid #f3f3f3;
  padding: 50px 50px;
  margin: 10px 0 30px 0;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    flex-direction: row;
    max-width: 722px;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 25px 30px;
    margin: 0;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    max-width: 1270px;
  }
`;

export const CountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    flex-direction: row;
    width: 40%;
    justify-content: space-evenly;
  }
`;

export const GenderContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const GenderCount = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  text-align: center;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 18px;
    line-height: 27px;
  }
`;

export const GenderText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 18px;
    line-height: 27px;
  }
`;

export const Heading = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 16.3px;
  letter-spacing: -2.2%;
  text-align: center;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 16px;
    line-height: 19.2px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 20px;
    line-height: 24px;
    max-width: 130px;
    text-align: left;
    border-right: 1.5px solid #f3f3f3;
    padding-right: 20px;
  }
`;

export const Line = styled.hr`
  display: block;
  width: 100%;
  border: 1px solid #f1f1f1;
  margin: 10px 0 20px 0;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    display: none;
  }
`;

export const Name = styled.h4`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -1.9%;
  text-align: center;
  margin: 10px 0 0 0;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const NumberContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    margin-top: 25px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    justify-content: space-evenly;
    margin-top: 20px;
  }
`;

export const Position = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -1.9%;
  text-align: center;
  margin-bottom: 50px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    margin-bottom: 10px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const PositionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    align-items: flex-start;
    padding-left: 20px;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    flex-direction: row;
    width: 40%;
    justify-content: space-evenly;
  }
`;
