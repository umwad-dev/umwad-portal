import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 30px 10px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    padding-bottom: 50px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    gap: 20px;
    padding-bottom: 60px;
    max-width: 1700px;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    margin-top: 160px;
    padding: 0 40px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    flex-direction: row;
    align-items: flex-start;
    padding: 0 100px;
    max-width: 1500px;
    gap: 30px;
  }
`;

export const FirstTextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 29px;
`;

export const LeftContainer = styled.div`
  display: none;
  width: 17%;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    display: flex;
  }
`;

export const Line = styled.hr`
  width: 85%;
  border: 1px solid #f1f1f1;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 92%;
    margin-bottom: 20px;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MoreTextLink = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14.22px;
  text-align: right;
  color: #e46805;
  cursor: pointer;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 14px;
    line-height: 16.59px;
  }
`;

export const NewsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const NoDataText = styled.h1`
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 18.96px;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 80%;
  }
`;

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 0 25px;
`;

export const SearchImg = styled.img`
  display: block;
  width: 22px;
  height: 21px;
  cursor: pointer;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    display: none;
  }
`;

export const SearchInputContainer = styled.div`
  width: 100%;
`;

export const SearchText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14.22px;
  color: #535353;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 14px;
    line-height: 16.59px;
  }
`;

export const SearchTextContainer = styled.div`
  display: flex;
`;

export const SearchTextSpan = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 14.22px;
  color: #e46805;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 14px;
    line-height: 16.59px;
  }
`;

export const SecondTextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 29px;
`;

export const StartupContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const TBIContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
