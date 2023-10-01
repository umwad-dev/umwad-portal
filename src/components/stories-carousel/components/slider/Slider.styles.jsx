import styled from "styled-components";

export const ArrowLeft = styled.img`
  width: 21px;
  cursor: pointer;
`;

export const ArrowRight = styled.img`
  width: 21px;
  cursor: pointer;
`;

export const Container = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 100%;
    justify-content: flex-end;
    padding: 30px 50px;
    gap: 50px;
  }
`;

export const EllipseContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Ellipse = styled.img`
  width: 8.14px;
  height: 8.14px;
  cursor: pointer;
  transition: 0.5s ease-in-out;
`;
