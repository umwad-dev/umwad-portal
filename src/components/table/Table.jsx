import React from "react";
import { StyledTable } from "./Table.styles";

const Table = ({ columns, data, rowKey }) => {
  return <StyledTable columns={columns} dataSource={data} rowKey={rowKey} />;
};

export default Table;
