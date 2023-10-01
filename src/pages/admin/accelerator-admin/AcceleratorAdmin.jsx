import React, { useState } from "react";
import Layout from "antd/es/layout";
import {
  HeartOutlined,
  InboxOutlined,
  RocketOutlined,
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
} from "./AcceleratorAdmin.styles";
import { Partners, Products, Profile, Services, Startups } from "./components";
import { acceleratorItems } from "../utils/sidebarUtils";

const { Content } = Layout;

const AcceleratorAdminPage = () => {
  const [currentTab, setCurrentTab] = useState("startups");
  const [breadCrumbLogo, setBreadCrumbLogo] = useState(<RocketOutlined />);
  const [title, setTitle] = useState(["Startups"]);

  const onSetCurrentTab = (tab) => {
    setCurrentTab(tab);

    if (tab === "startups") {
      setBreadCrumbLogo(<RocketOutlined />);
      setTitle(["Startups"]);
    } else if (tab === "products") {
      setBreadCrumbLogo(<InboxOutlined />);
      setTitle(["Products"]);
    } else if (tab === "services") {
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
        items={acceleratorItems}
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
            {currentTab === "products" && <Products />}
            {currentTab === "profile" && <Profile />}
            {currentTab === "services" && <Services />}
            {currentTab === "startups" && <Startups />}
          </ContentContainer>
        </Content>
      </StyledLayout>
    </Layout>
  );
};

export default AcceleratorAdminPage;
