import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  cursor: pointer;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 11.85px;
  color: ${(props) => props.theme.gray};

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 14px;
    line-height: 16.59px;
  }
`;

export const DescriptionWrapper = styled.div`
  width: 263.48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  background-color: ${(props) => props.theme.lightGray};
  padding: 25px;
  gap: 15px;
  margin-top: -8px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 221px;
    margin-top: -13px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 343px;
  }
`;

export const FeaturedImg = styled.img`
  width: 261.96px;
  height: 200px;
  border-radius: 8px;
  object-fit: contain;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 220.8px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 343px;
  }
`;

export const FeatureImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: white;
  border: 1px solid #f6f6f6;
`;

export const Time = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 11.85px;
  color: ${(props) => props.theme.gray};

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 14px;
    line-height: 16.59px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 14px;
  line-height: 16.59px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 12px;
    line-height: 14.22px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 20px;
    line-height: 23.7px;
  }
`;
