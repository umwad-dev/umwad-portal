import React from "react";
import {
  StyledMenu,
  StyledSider,
  TextLogoContainer,
  TextLogoSubtitle,
  TextLogoTitle,
} from "./Sidebar.styles";

const Sidebar = ({ currentTab, items, onSetCurrentTab }) => {
  return (
    <StyledSider
      style={{ backgroundColor: "white" }}
      breakpoint="lg"
      collapsedWidth="0"
    >
      <TextLogoContainer>
        <TextLogoSubtitle>Startup</TextLogoSubtitle>
        <TextLogoTitle>Western Visayas</TextLogoTitle>
      </TextLogoContainer>
      <StyledMenu
        defaultSelectedKeys={[currentTab]}
        items={items}
        mode="inline"
        onClick={({ key }) => onSetCurrentTab(key)}
        theme="light"
      />
    </StyledSider>
  );
};

export default Sidebar;
