import styled from "styled-components";

export const BlogsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    gap: 20px;
    padding: 0 50px;
    max-width: 1300px;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 25px;
  margin-top: 40px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 245px;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 13% 0 13% 0;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    padding: 0 0 13% 0;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 11.85px;
  text-align: center;
  margin-bottom: 8px;
  padding: 0 30px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 13px;
    line-height: 15.41px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 16px;
    line-height: 18.96px;
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
