import styled from "styled-components";
import Avatar from "antd/es/avatar/avatar";

export const AvatarContainer = styled.div`
  position: relative;

  .tooltip-container {
    width: 285px;
    display: flex;
    flex-direction: column;
    position: absolute;
    left: -120px;
    top: 60px;
    box-shadow: 0px 13px 13px 0px #cdccec40;
    opacity: 0;
    transition: visibility 0.3s linear, opacity 0.3s linear;
    visibility: ${(props) => (props.onHover ? "visible" : "hidden")};

    @media (min-width: ${(props) => props.theme.tabletSize}) {
      top: -140px;
      left: -120px;
    }
  }

  &:hover > .tooltip-container {
    visibility: visible;
    opacity: 1;
  }

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    padding-right: 100px;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    padding-right: 250px;
  }
`;

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1c3461;
  border-radius: 100px;
  padding: 15px 0;
  margin: 0 30px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    width: 80%;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 0;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    padding: 30px 0;
  }
`;

export const StyledAvatar = styled(Avatar)`
  cursor: pointer;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -2.2%;
  text-align: center;
  color: white;
  margin-bottom: 10px;

  @media (min-width: ${(props) => props.theme.tabletSize}) {
    font-size: 16px;
    line-height: 24px;
    padding: 0 50px;
    margin-bottom: 0;
  }

  @media (min-width: ${(props) => props.theme.desktopSize}) {
    font-size: 24px;
    line-height: 6px;
    padding: 0 100px;
  }
`;

export const TooltipLower = styled.div`
  display: flex;
  align-items: center;
  width: 285px;
  height: 55px;
  padding-left: 10px;
  border-radius: 0 0 10px 10px;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: -2.2%;
`;

export const TooltipUpper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  width: 285px;
  border-radius: 10px 10px 0 0;
  height: 45px;
  font-weight: 400;
  font-size: 16px;
  line-height: 21.6px;
  letter-spacing: -2.2%;
  background-color: #1d3461;
  color: white;
`;
