import React, { useState } from "react";
import Layout from "antd/es/layout";
import {
  BlockOutlined,
  HeartOutlined,
  InboxOutlined,
  QuestionOutlined,
  RiseOutlined,
  TeamOutlined,
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
} from "./StartupAdmin.styles";
import {
  AboutUs,
  Employees,
  Income,
  Partners,
  Products,
  Profile,
  Services,
} from "./components";
import { startupItems } from "../utils/sidebarUtils";

const { Content } = Layout;

const StartupAdminPage = () => {
  const [currentTab, setCurrentTab] = useState("profile");
  const [breadCrumbLogo, setBreadCrumbLogo] = useState(<BlockOutlined />);
  const [title, setTitle] = useState(["Profile"]);

  const onSetCurrentTab = (tab) => {
    setCurrentTab(tab);

    if (tab === "aboutUs") {
      setBreadCrumbLogo(<QuestionOutlined />);
      setTitle(["About Us"]);
    } else if (tab === "products") {
      setBreadCrumbLogo(<InboxOutlined />);
      setTitle(["Products"]);
    } else if (tab === "services") {
      setBreadCrumbLogo(<ToolOutlined />);
      setTitle(["Services"]);
    } else if (tab === "employees") {
      setBreadCrumbLogo(<TeamOutlined />);
      setTitle(["Employees"]);
    } else if (tab === "income") {
      setBreadCrumbLogo(<RiseOutlined />);
      setTitle(["Quarterly Gross Income"]);
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
        items={startupItems}
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
            {currentTab === "aboutUs" && <AboutUs />}
            {currentTab === "employees" && <Employees />}
            {currentTab === "income" && <Income />}
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

export default StartupAdminPage;
