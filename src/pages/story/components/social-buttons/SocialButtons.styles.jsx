import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ShareText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16.59px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 18px;
    line-height: 21.33px;
  }
`;

export const SocialIcons = styled.img`
  width: 33.51px;
  height: 33.51px;
  cursor: pointer;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 49px;
    height: 49px;
  }
`;

export const SocialIconsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 30px 0 50px 0;
`;
