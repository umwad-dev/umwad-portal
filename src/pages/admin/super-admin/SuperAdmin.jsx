import React, { useState } from "react";
import Layout from "antd/es/layout";
import {
  BlockOutlined,
  CoffeeOutlined,
  DashboardOutlined,
  DeliveredProcedureOutlined,
  HomeOutlined,
  MailOutlined,
  MergeCellsOutlined,
  RocketOutlined,
  SnippetsOutlined,
  TableOutlined,
  TeamOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { Header, Sidebar } from "../components";
import {
  BreadcrumbLogoContainer,
  StyledBreadcrumb,
  StyledBreadcrumbItem,
  StyledLayout,
} from "./SuperAdmin.styles";
import { superAdminItems } from "../utils/sidebarUtils";
import {
  AcceleratorApprovals,
  Accelerators,
  ContactUs,
  CoWorkingSpaceApprovals,
  CoworkingSpaces,
  Dashboard,
  FabLabApprovals,
  FabLabs,
  FeaturedNews,
  FoodApprovals,
  Foods,
  IHubApprovals,
  InnovationHubs,
  News,
  Startups,
  TBIApprovals,
  TBIs,
  Users,
} from "./components";

const { Content } = Layout;

const SuperAdminPage = () => {
  const [currentTab, setCurrentTab] = useState("dashboard");
  const [breadCrumbLogo, setBreadCrumbLogo] = useState(<BlockOutlined />);
  const [title, setTitle] = useState(["Dashboard"]);

  const onSetCurrentTab = (tab) => {
    setCurrentTab(tab);

    if (tab === "dashboard") {
      setBreadCrumbLogo(<BlockOutlined />);
      setTitle(["Dashboard"]);
    } else if (tab === "users") {
      setBreadCrumbLogo(<TeamOutlined />);
      setTitle(["All Users"]);
    } else if (tab === "startups") {
      setBreadCrumbLogo(<RocketOutlined />);
      setTitle(["Startups"]);
    } else if (tab === "tbis") {
      setBreadCrumbLogo(<HomeOutlined />);
      setTitle(["TBIs"]);
    } else if (tab === "accelerator") {
      setBreadCrumbLogo(<DashboardOutlined />);
      setTitle(["Accelerators"]);
    } else if (tab === "coWorkingSpace") {
      setBreadCrumbLogo(<TableOutlined />);
      setTitle(["Co-working Spaces"]);
    } else if (tab === "fabLab") {
      setBreadCrumbLogo(<MergeCellsOutlined />);
      setTitle(["Fab-labs"]);
    } else if (tab === "food") {
      setBreadCrumbLogo(<CoffeeOutlined />);
      setTitle(["Food Innovation Centers"]);
    } else if (tab === "iHub") {
      setBreadCrumbLogo(<DeliveredProcedureOutlined />);
      setTitle(["Innovation Hubs"]);
    } else if (tab === "contactUs") {
      setBreadCrumbLogo(<MailOutlined />);
      setTitle(["Contact Us"]);
    } else if (tab === "acceleratorApprovals") {
      setBreadCrumbLogo(<ThunderboltOutlined />);
      setTitle(["Accelerator Approvals"]);
    } else if (tab === "coWorkingSpaceApprovals") {
      setBreadCrumbLogo(<TableOutlined />);
      setTitle(["Co-working Space Approvals"]);
    } else if (tab === "fabLabApprovals") {
      setBreadCrumbLogo(<MergeCellsOutlined />);
      setTitle(["Fab-lab Approvals"]);
    } else if (tab === "foodApprovals") {
      setBreadCrumbLogo(<CoffeeOutlined />);
      setTitle(["Food Innovation Center Approvals"]);
    } else if (tab === "iHubApprovals") {
      setBreadCrumbLogo(<DeliveredProcedureOutlined />);
      setTitle(["Innovation Hub Approvals"]);
    } else if (tab === "tbiApprovals") {
      setBreadCrumbLogo(<HomeOutlined />);
      setTitle(["TBI Approvals"]);
    } else if (tab === "featuredNews") {
      setBreadCrumbLogo(<SnippetsOutlined />);
      setTitle(["Featured News/Articles"]);
    } else if (tab === "news") {
      setBreadCrumbLogo(<SnippetsOutlined />);
      setTitle(["News & Articles"]);
    }
  };

  return (
    <Layout>
      <Sidebar
        currentTab={currentTab}
        items={superAdminItems}
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
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {currentTab === "accelerator" && <Accelerators />}
            {currentTab === "acceleratorApprovals" && <AcceleratorApprovals />}
            {currentTab === "contactUs" && <ContactUs />}
            {currentTab === "coWorkingSpaceApprovals" && (
              <CoWorkingSpaceApprovals />
            )}
            {currentTab === "coWorkingSpace" && <CoworkingSpaces />}
            {currentTab === "dashboard" && <Dashboard />}
            {currentTab === "fabLabApprovals" && <FabLabApprovals />}
            {currentTab === "fabLab" && <FabLabs />}
            {currentTab === "foodApprovals" && <FoodApprovals />}
            {currentTab === "food" && <Foods />}
            {currentTab === "iHubApprovals" && <IHubApprovals />}
            {currentTab === "iHub" && <InnovationHubs />}
            {currentTab === "news" && <News />}
            {currentTab === "featuredNews" && <FeaturedNews />}
            {currentTab === "startups" && <Startups />}
            {currentTab === "tbiApprovals" && <TBIApprovals />}
            {currentTab === "tbis" && <TBIs />}
            {currentTab === "users" && <Users />}
          </div>
        </Content>
      </StyledLayout>
    </Layout>
  );
};

export default SuperAdminPage;
