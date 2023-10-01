import styled from "styled-components";
import Breadcrumb from "antd/es/breadcrumb";
import Layout from "antd/es/layout";

export const BreadcrumbLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.orange};
  padding: 10px;
  border-radius: 5px;
  margin-top: -5px;
`;

export const BreadcrumbLogo = styled.img`
  width: auto;
  height: auto;
`;

export const ContentContainer = styled.div`
  padding: 0 10px;
`;

export const StyledBreadcrumb = styled(Breadcrumb)`
  display: flex;
  align-items: center;
  gap: 30px;
  padding-left: 11px;
`;

export const StyledBreadcrumbItem = styled(Breadcrumb.Item)`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -2.2%;
  color: #343434;
  display: flex;
  padding: 0 10px;
`;

export const StyledLayout = styled(Layout)`
  background-color: #e7e9f3;
  color: ${(props) => props.theme.black};
`;
