import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  border-radius: 10px;
  gap: 30px;
  border: 2px solid #f1f1f1;
  color: #121212;
  padding: 20px 30px;

  &:hover {
    box-shadow: 0px 10px 50px 0px #5c60681a;
    background-color: #1d3461;
    border: 2px solid #1d3461;
    color: white;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 582.49px;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Img = styled.img`
  width: 128px;
  height: 94px;
  object-fit: contain;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #f1f1f1;
  background-color: white;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 164.14px;
    height: 116px;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -2.2%;
`;

export const ViewPageButton = styled.p`
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -2.2%;
`;
