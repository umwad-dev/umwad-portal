import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const Count = styled.p`
  display: table-cell;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -2.2%;
  color: ${(props) => props.theme.black};
`;

export const Link = styled.a`
  cursor: pointer;
  color: ${(props) => props.theme.orange};
  display: table-cell;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -2.2%;

  &:active {
    color: ${(props) => props.theme.orange};
  }
`;
