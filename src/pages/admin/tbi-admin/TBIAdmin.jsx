import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "antd/es/layout";
import {
  BlockOutlined,
  CarryOutOutlined,
  HeartOutlined,
  RocketOutlined,
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
} from "./TBIAdmin.styles";
import {
  Dashboard,
  News,
  Partners,
  Profile,
  Programs,
  Services,
  Startups,
} from "./components";
import { tbiItems } from "../utils/sidebarUtils";
import { getAllTBIAction } from "../../../features/tbi/tbiSlice";

const { Content } = Layout;

const TBIAdminPage = () => {
  const [currentTab, setCurrentTab] = useState("dashboard");
  const [breadCrumbLogo, setBreadCrumbLogo] = useState(<BlockOutlined />);
  const [title, setTitle] = useState(["Dashboard"]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTBIAction());
  }, [dispatch]);

  const onSetCurrentTab = (tab) => {
    setCurrentTab(tab);

    if (tab === "dashboard") {
      setBreadCrumbLogo(<BlockOutlined />);
      setTitle(["Dashboard"]);
    } else if (tab === "startups") {
      setBreadCrumbLogo(<RocketOutlined />);
      setTitle(["Startups"]);
    } else if (tab === "services") {
      setBreadCrumbLogo(<ToolOutlined />);
      setTitle(["Services"]);
    } else if (tab === "programs") {
      setBreadCrumbLogo(<CarryOutOutlined />);
      setTitle(["Programs"]);
    } else if (tab === "partners") {
      setBreadCrumbLogo(<HeartOutlined />);
      setTitle(["Partners"]);
    } else if (tab === "profile") {
      setBreadCrumbLogo(<UserOutlined />);
      setTitle(["Profile"]);
    } else if (tab === "news") {
      setBreadCrumbLogo(<SnippetsOutlined />);
      setTitle(["News & Articles"]);
    }
  };

  return (
    <Layout>
      <Sidebar
        currentTab={currentTab}
        items={tbiItems}
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
            {currentTab === "dashboard" && <Dashboard />}
            {currentTab === "news" && <News />}
            {currentTab === "partners" && <Partners />}
            {currentTab === "profile" && <Profile />}
            {currentTab === "programs" && <Programs />}
            {currentTab === "services" && <Services />}
            {currentTab === "startups" && <Startups />}
          </ContentContainer>
        </Content>
      </StyledLayout>
    </Layout>
  );
};

export default TBIAdminPage;
