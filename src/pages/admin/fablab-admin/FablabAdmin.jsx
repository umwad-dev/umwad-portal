import React, { useState } from "react";
import Layout from "antd/es/layout";
import {
  HeartOutlined,
  InboxOutlined,
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
} from "./FablabAdmin.styles";
import { News, Partners, Products, Profile, Services } from "./components";
import { fabLabItems } from "../utils/sidebarUtils";

const { Content } = Layout;

const FabLabAdminPage = () => {
  const [currentTab, setCurrentTab] = useState("products");
  const [breadCrumbLogo, setBreadCrumbLogo] = useState(<InboxOutlined />);
  const [title, setTitle] = useState(["Products"]);

  const onSetCurrentTab = (tab) => {
    setCurrentTab(tab);

    if (tab === "products") {
      setBreadCrumbLogo(<InboxOutlined />);
      setTitle(["Products"]);
    } else if (tab === "services") {
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
        items={fabLabItems}
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
            {currentTab === "products" && <Products />}
            {currentTab === "profile" && <Profile />}
            {currentTab === "services" && <Services />}
          </ContentContainer>
        </Content>
      </StyledLayout>
    </Layout>
  );
};

export default FabLabAdminPage;
