import styled from "styled-components";

export const Button = styled.button`
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 20px;
  background-color: #e46805;
  border: 1px solid #e46805;
  color: white;
  font-size: 10px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 16px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const CardContainer = styled.div`
  width: 300px;
  height: 130px;
  border: 0.5px solid #eaeaea;
  border-radius: 10px;
  display: flex;
  box-shadow: 0px 10px 50px 0px #5c60681a;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 588px;
    height: 165px;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding-right: 20px;
  background-color: #fefefe;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    padding-right: 20px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    padding: 50px;
  }
`;

export const Line = styled.hr`
  width: 90%;
  border: 0.5px solid #eaeaea;
`;

export const Logo = styled.img`
  width: 26px;
  height: 26px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 53px;
    height: 53px;
  }
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 20px;
    line-height: 24.2px;
  }
`;
