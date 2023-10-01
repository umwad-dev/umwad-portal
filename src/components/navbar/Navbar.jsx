import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadingOutlined, RightOutlined } from "@ant-design/icons";
import Dropdown from "antd/es/dropdown";
import Space from "antd/es/space";
import { goToHomePage, goToLoginPage } from "../../utils/redirections";
import { resetAuthDispatchCounter } from "../../features/auth/authSlice";
import { useNotification } from "../../hooks";
import PrimaryButton from "../primary-button/PrimaryButton";
import {
  Bars,
  Close,
  ButtonContainer,
  LoadingContainer,
  MobileNav,
  Nav,
  NavItem,
  NavItemContainer,
  NavMenu,
  NavMenuItem,
  StyledAvatar,
  Subtitle,
  Title,
  TitleContainer,
  UserMenuContainer,
  UserMenuName,
  OtherFacilitiesContainer,
  OtherFacilitiesIcon,
} from "./Navbar.styles";
import useNavbarOptions from "./useNavbarOptions";

const Navbar = ({ color = "white" }) => {
  const [isHidden, setIsHidden] = useState(true);

  const dispatch = useDispatch();
  const { auth, dispatchCounter, isLogoutLoading, isSuccess, message } =
    useSelector((state) => state.auth);

  const { contextHolder, openNotification } = useNotification();
  const { options } = useNavbarOptions(auth?.type, auth?.registered);

  useEffect(() => {
    if (dispatchCounter === 0) {
      return;
    } else {
      openNotification({
        isSuccess,
        message,
      });
      dispatch(resetAuthDispatchCounter());
    }
  }, [dispatch, dispatchCounter, isSuccess, message, openNotification]);

  const otherFacilitiesItems = [
    {
      key: 1,
      label: (
        <NavItem color="black" to="/innovation-hubs">
          iHub
        </NavItem>
      ),
    },
    {
      key: 2,
      label: (
        <NavItem color="black" to="/coworking-spaces">
          Co-working Spaces
        </NavItem>
      ),
    },
    {
      key: 3,
      label: (
        <NavItem color="black" to="/fab-labs">
          Fab-Labs
        </NavItem>
      ),
    },
    {
      key: 4,
      label: (
        <NavItem color="black" to="/food-innovation-centers">
          Food Innovation Centers
        </NavItem>
      ),
    },
  ];

  const facilitiesItems = [
    {
      key: 1,
      label: (
        <NavItem color="black" to="/tbis">
          TBI
        </NavItem>
      ),
    },
    {
      key: 2,
      label: (
        <NavItem color="black" to="/accelerators">
          Accelerator
        </NavItem>
      ),
    },
    {
      key: 3,
      label: (
        <Dropdown
          menu={{
            items: otherFacilitiesItems,
            style: { marginLeft: 20, borderRadius: 0 },
          }}
          placement="right"
        >
          <OtherFacilitiesContainer>
            <NavItem color="black">Other Facilities</NavItem>
            <OtherFacilitiesIcon>
              <RightOutlined size="small" />
            </OtherFacilitiesIcon>
          </OtherFacilitiesContainer>
        </Dropdown>
      ),
    },
  ];

  return (
    <Fragment>
      {contextHolder}
      <Nav>
        <TitleContainer onClick={goToHomePage}>
          <Subtitle color={color}>Startup</Subtitle>
          <Title>Western Visayas</Title>
        </TitleContainer>
        <NavItemContainer>
          <NavItem color={color} to="/startups">
            Startups
          </NavItem>
          <Dropdown
            menu={{ items: facilitiesItems, style: { borderRadius: 0 } }}
            placement="bottom"
            arrow
          >
            <NavItem color={color}>Facilities</NavItem>
          </Dropdown>
          <NavItem color={color} to="/downloadables">
            Downloadables
          </NavItem>
          <NavItem color={color} to="/about-us">
            About us
          </NavItem>
          <NavItem color={color} to="/news-and-articles">
            News & Articles
          </NavItem>
          <NavItem color={color} to="/contact-us">
            Contact us
          </NavItem>
        </NavItemContainer>
        {auth ? (
          <Space wrap>
            <Dropdown
              menu={{
                items: auth ? options : [],
                style: { borderRadius: 0 },
              }}
              placement="bottom"
              arrow
            >
              <UserMenuContainer>
                <UserMenuName>{auth.email}</UserMenuName>
                {auth.picture ? (
                  <StyledAvatar src={auth.picture} />
                ) : (
                  <StyledAvatar>
                    {auth.email.charAt(0).toUpperCase()}
                  </StyledAvatar>
                )}
              </UserMenuContainer>
            </Dropdown>
            {isLogoutLoading && (
              <LoadingContainer>
                <LoadingOutlined />
              </LoadingContainer>
            )}
          </Space>
        ) : (
          <ButtonContainer>
            <PrimaryButton
              fontWeight={700}
              name="Login"
              onClick={goToLoginPage}
            />
          </ButtonContainer>
        )}
      </Nav>
      <MobileNav>
        <TitleContainer onClick={goToHomePage}>
          <Subtitle color={color}>Startup</Subtitle>
          <Title>Western Visayas</Title>
        </TitleContainer>
        <Bars color={color} onClick={() => setIsHidden(false)} />
      </MobileNav>
      <NavMenu isHidden={isHidden}>
        <Close onClick={() => setIsHidden(true)} />
        <NavMenuItem color="orange" to="/login">
          Login
        </NavMenuItem>
        <NavMenuItem to="/startups">Startups</NavMenuItem>
        <NavMenuItem to="/tbis">TBIs</NavMenuItem>
        <NavMenuItem to="/accelerators">Accelerators</NavMenuItem>
        <NavMenuItem to="/innovation-hubs">iHubs</NavMenuItem>
        <NavMenuItem to="/coworking-spaces">Coworking Spaces</NavMenuItem>
        <NavMenuItem to="/fab-labs">Fab Labs</NavMenuItem>
        <NavMenuItem to="/food-innovation-centers">
          Food Innovation Centers
        </NavMenuItem>
        <NavMenuItem to="/downloadables">Downloadables</NavMenuItem>
        <NavMenuItem to="/about-us">About us</NavMenuItem>
        <NavMenuItem to="/news-and-articles">News & Articles</NavMenuItem>
        <NavMenuItem to="/contact-us">Contact us</NavMenuItem>
      </NavMenu>
    </Fragment>
  );
};

export default Navbar;
