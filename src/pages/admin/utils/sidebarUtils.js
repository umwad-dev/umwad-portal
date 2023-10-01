import {
  BankOutlined,
  BlockOutlined,
  CarryOutOutlined,
  CoffeeOutlined,
  DashboardOutlined,
  DeliveredProcedureOutlined,
  ExceptionOutlined,
  HeartOutlined,
  HomeOutlined,
  InboxOutlined,
  MailOutlined,
  MergeCellsOutlined,
  QuestionOutlined,
  RiseOutlined,
  RocketOutlined,
  ScheduleOutlined,
  SnippetsOutlined,
  TableOutlined,
  TagsOutlined,
  TeamOutlined,
  ThunderboltOutlined,
  ToolOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
};

export const acceleratorItems = [
  getItem("Dashboard", "dashboard", <BlockOutlined />),
  getItem("Startups", "startups", <RocketOutlined />),
  getItem("Products", "products", <InboxOutlined />),
  getItem("Services", "services", <ToolOutlined />),
  getItem("Partners", "partners", <HeartOutlined />),
  getItem("Profile", "profile", <UserOutlined />),
];

export const coworkingSpaceItems = [
  getItem("Services", "services", <ToolOutlined />),
  getItem("Partners", "partners", <HeartOutlined />),
  getItem("Profile", "profile", <UserOutlined />),
];

export const iHubItems = [
  getItem("Services", "services", <ToolOutlined />),
  getItem("Partners", "partners", <HeartOutlined />),
  getItem("News & Articles", "news", <SnippetsOutlined />),
  getItem("Profile", "profile", <UserOutlined />),
];

export const fabLabItems = [
  getItem("Products", "products", <InboxOutlined />),
  getItem("Services", "services", <ToolOutlined />),
  getItem("Partners", "partners", <HeartOutlined />),
  getItem("News & Articles", "news", <SnippetsOutlined />),
  getItem("Profile", "profile", <UserOutlined />),
];

export const foodItems = [
  getItem("Products", "products", <InboxOutlined />),
  getItem("Services", "services", <ToolOutlined />),
  getItem("Partners", "partners", <HeartOutlined />),
  getItem("Profile", "profile", <UserOutlined />),
];

export const superAdminItems = [
  getItem("Dashboard", "dashboard", <BlockOutlined />),
  getItem("Users", "users", <TeamOutlined />),
  getItem("Startups", "startups", <RocketOutlined />),
  getItem("TBIs", "tbis", <HomeOutlined />),
  getItem("Accelerators", "accelerator", <DashboardOutlined />),
  getItem("Other Facilities", "facilities", <BankOutlined />, [
    getItem("Co-working Spaces", "coWorkingSpace", <TableOutlined />),
    getItem("Fab-Labs", "fabLab", <MergeCellsOutlined />),
    getItem("Food Innovation Centers", "food", <CoffeeOutlined />),
    getItem("iHubs", "iHub", <DeliveredProcedureOutlined />),
  ]),
  getItem("News", "articles", <ExceptionOutlined />, [
    getItem("Featured", "featuredNews", <TagsOutlined />),
    getItem("Your News", "news", <SnippetsOutlined />),
  ]),
  getItem("Contact Us", "contactUs", <MailOutlined />),
  getItem("Approvals", "approvals", <ScheduleOutlined />, [
    getItem("Accelerators", "acceleratorApprovals", <ThunderboltOutlined />),
    getItem("Co-working Spaces", "coWorkingSpaceApprovals", <TableOutlined />),
    getItem("Fab-Labs", "fabLabApprovals", <MergeCellsOutlined />),
    getItem("Food Innovation Centers", "foodApprovals", <CoffeeOutlined />),
    getItem("iHubs", "iHubApprovals", <DeliveredProcedureOutlined />),
    getItem("TBI", "tbiApprovals", <HomeOutlined />),
  ]),
];

export const startupItems = [
  getItem("Profile", "profile", <UserOutlined />),
  getItem("About Us", "aboutUs", <QuestionOutlined />),
  getItem("Products", "products", <InboxOutlined />),
  getItem("Services", "services", <ToolOutlined />),
  getItem("Employees", "employees", <TeamOutlined />),
  getItem("Gross Income", "income", <RiseOutlined />),
  getItem("Partners", "partners", <HeartOutlined />),
];

export const tbiItems = [
  getItem("Dashboard", "dashboard", <BlockOutlined />),
  getItem("Startups", "startups", <RocketOutlined />),
  getItem("Services", "services", <ToolOutlined />),
  getItem("Programs", "programs", <CarryOutOutlined />),
  getItem("Partners", "partners", <HeartOutlined />),
  getItem("News & Articles", "news", <SnippetsOutlined />),
  getItem("Profile", "profile", <UserOutlined />),
];
