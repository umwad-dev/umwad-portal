import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid #f6f6f6;
  background-color: ${(props) => props.theme.lightGray};
  width: 305px;
  height: 257px;
  cursor: pointer;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 220.92px;
    height: 197.47px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: 320px;
    height: 290px;
  }
`;

export const CardImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const CardImg = styled.img`
  width: auto;
  height: 161px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: auto;
    height: 123.93px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    width: auto;
    height: 182px;
  }
`;

export const CardTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 23.7px;
  text-align: center;
  padding: 20px 0;
`;
