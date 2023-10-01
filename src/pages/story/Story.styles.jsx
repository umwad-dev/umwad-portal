import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 30px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    padding: 70px 50px;
  }
`;

export const DownTitle = styled.h1`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -2.2%;
  text-align: center;
  margin-bottom: 30px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 26px;
    line-height: 39px;
    margin-bottom: 0px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 35px;
    line-height: 52.5px;
  }
`;

export const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    align-items: flex-start;
    margin-bottom: 50px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    padding: 0 100px;
  }
`;

export const SeeAllStories = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 16.59px;
  margin-bottom: 20px;
  cursor: pointer;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    margin-bottom: 0px;
    font-size: 18px;
    line-height: 21.33px;
  }
`;

export const SeeAllStoriesSpan = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 16.59px;
  font-style: italic;
  color: ${(props) => props.theme.orange};
  cursor: pointer;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 18px;
    line-height: 21.33px;
  }
`;

export const StoriesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    gap: 40px;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 40px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    padding: 0 100px;
  }
`;

export const TopBgAuthor = styled.p`
  font-size: 12px;
  line-height: 14.22px;
  font-weight: 500;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-weight: 400;
    font-size: 16px;
    line-height: 18.96px;
  }
`;

export const TopBgImg = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  color: ${(props) => props.theme.white};
  background-image: linear-gradient(
      0deg,
      rgba(0, 17, 51, 0.55),
      rgba(0, 17, 51, 0.55)
    ),
    url(${(props) => props.imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 370px;
  z-index: -3000;
  padding: 0 49px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    height: 400px;
    align-items: flex-start;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    height: 633px;
    padding: 0 150px;
  }
`;

export const TopBgTime = styled.p`
  font-size: 12px;
  line-height: 14.22px;
  font-weight: 400;
  margin-bottom: 5px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-weight: 300;
    font-size: 16px;
    line-height: 18.96px;
  }
`;

export const TopBgTitle = styled.h1`
  font-size: 18px;
  line-height: 21.33px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  padding: 20px 0;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    text-transform: capitalize;
    text-align: left;
    max-width: 732px;
    font-size: 30px;
    line-height: 30px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 35px;
    line-height: 35px;
    max-width: 1075px;
    padding: 30px 0;
  }
`;
