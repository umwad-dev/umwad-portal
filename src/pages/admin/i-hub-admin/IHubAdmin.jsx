import React, { useState } from "react";
import Layout from "antd/es/layout";
import {
  HeartOutlined,
  SnippetsOutlined,
  ToolOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Header, Sidebar } from "../components";
import {
  BreadcrumbLogoContainer,
  ContentContainer,
  StyledBreadcrumb,
  StyledBreadcrumbItem,
  StyledLayout,
} from "./IHubAdmin.styles";
import { News, Partners, Profile, Services } from "./components";
import { iHubItems } from "../utils/sidebarUtils";

const { Content } = Layout;

const IHubAdminPage = () => {
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
    } else if (tab === "news") {
      setBreadCrumbLogo(<SnippetsOutlined />);
      setTitle(["News & Articles"]);
    } else if (tab === "profile") {
      setBreadCrumbLogo(<UserOutlined />);
      setTitle(["Profile"]);
    }
  };

  return (
    <Layout>
      <Sidebar
        currentTab={currentTab}
        items={iHubItems}
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
            {currentTab === "news" && <News />}
            {currentTab === "partners" && <Partners />}
            {currentTab === "profile" && <Profile />}
            {currentTab === "services" && <Services />}
          </ContentContainer>
        </Content>
      </StyledLayout>
    </Layout>
  );
};

export default IHubAdminPage;
