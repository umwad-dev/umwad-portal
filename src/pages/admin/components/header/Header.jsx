import React from "react";
import { useSelector } from "react-redux";
import Avatar from "antd/es/avatar";
import Dropdown from "antd/es/dropdown";
import Space from "antd/es/space";
import { FullName, NavItem, StyledHeader } from "./Header.styles";

const Header = () => {
  const { auth } = useSelector((state) => state.auth);

  const items = [
    {
      key: 1,
      label: (
        <NavItem color="black" to="/">
          Go to Homepage
        </NavItem>
      ),
    },
  ];

  return (
    <StyledHeader>
      <Dropdown
        menu={{ items, style: { borderRadius: 0 } }}
        placement="bottom"
        arrow
      >
        <Space style={{ cursor: "pointer" }} size={15} wrap>
          <FullName>{auth.email}</FullName>
          {auth.picture !== null ? (
            <Avatar src={auth.picture} />
          ) : (
            <Avatar>{auth.displayName.charAt(0).toUpperCase()}</Avatar>
          )}
        </Space>
      </Dropdown>
    </StyledHeader>
  );
};

export default Header;
