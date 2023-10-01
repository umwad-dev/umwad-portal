import styled from "styled-components";
import Table from "antd/es/table";

export const StyledTable = styled(Table)`
  .ant-table-thead > tr > th {
    background-color: ${(props) => props.theme.dimGray};
  }

  .ant-table-thead > tr > .ant-table-cell {
    font-weight: 400 !important;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -2.2%;
  }

  .ant-table-row > .ant-table-cell {
    font-weight: 400 !important;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -2.2%;
    color: #757575;
  }
`;
