import React, { useState } from "react";
import Layout from "antd/es/layout";
import { HeartOutlined, ToolOutlined, UserOutlined } from "@ant-design/icons";
import { Header, Sidebar } from "../components";
import {
  BreadcrumbLogoContainer,
  ContentContainer,
  StyledBreadcrumb,
  StyledBreadcrumbItem,
  StyledLayout,
} from "./CoworkingSpaceAdmin.styles";
import { Partners, Profile, Services } from "./components";
import { coworkingSpaceItems } from "../utils/sidebarUtils";

const { Content } = Layout;

const CoworkingSpaceAdminPage = () => {
  const [currentTab, setCurrentTab] = useState("services");
  const [breadCrumbLogo, setBreadCrumbLogo] = useState(<ToolOutlined />);
  const [title, setTitle] = useState(["Services"]);

  const onSetCurrentTab = (tab) => {
    setCurrentTab(tab);

    if (tab === "services") {
      setBreadCrumbLogo(<ToolOutlined />);
      setTitle(["Services"]);
    } else if (tab === "partners") {
      setBreadCrumbLogo(<HeartOutlined />);
      setTitle(["Partners"]);
    } else if (tab === "profile") {
      setBreadCrumbLogo(<UserOutlined />);
      setTitle(["Profile"]);
    }
  };

  return (
    <Layout>
      <Sidebar
        currentTab={currentTab}
        items={coworkingSpaceItems}
        onSetCurrentTab={onSetCurrentTab}
      />
      <StyledLayout>
        <Header />
        <StyledBreadcrumb style={{ margin: "16px 0" }}>
          <BreadcrumbLogoContainer>{breadCrumbLogo}</BreadcrumbLogoContainer>
          {title.map((val, idx) => (
            <StyledBreadcrumbItem key={idx}>{val}</StyledBreadcrumbItem>
          ))}
        </StyledBreadcrumb>
        <Content>
          <ContentContainer>
            {currentTab === "partners" && <Partners />}
            {currentTab === "profile" && <Profile />}
            {currentTab === "services" && <Services />}
          </ContentContainer>
        </Content>
      </StyledLayout>
    </Layout>
  );
};

export default CoworkingSpaceAdminPage;
