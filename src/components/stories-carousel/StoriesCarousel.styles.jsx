import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    padding: 0 50px;
  }
`;
