import React, { useEffect, useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import { useNavigate } from "react-router-dom";
import slug from "slug";
import Form from "antd/es/form";
import Input from "antd/es/input";
import Select from "antd/es/select";
import { PatternFormat } from "react-number-format";
import { Navbar, RegistrationUpload, Spinner } from "../../components";
import { useNotification } from "../../hooks";
import {
  AddressContainer,
  BannerContainer,
  BannerInfoContainer,
  CategorySubtitle,
  CategoryTitle,
  ContactContainer,
  Container,
  FormContainer,
  FormItemContactInfo,
  FormItemEmail,
  Line,
  LogoContainer,
  LogoUploadContainer,
  MainContainer,
  SocialContainer,
  SpinnerContainer,
  SubmitButton,
  SubmitContainer,
  Subtitle,
  Title,
  TitleSpan,
  UploadContainer,
  UploadInfo,
} from "./FabLabRegistration.styles";
import { provinces } from "../../utils/address";
import { useDispatch, useSelector } from "react-redux";
import {
  createFabLabAction,
  resetFabLabDispatchCounter,
} from "../../features/fab-lab/fabLabSlice";
import { updateUserToRegistered } from "../../features/auth/authSlice";

const FabLabRegistrationPage = () => {
  const [color, setColor] = useState("black");
  const [banner, setBanner] = useState(null);
  const [logo, setLogo] = useState(null);
  const [province, setProvince] = useState();

  const { dispatchCounter, isCreateLoading, isSuccess, message } = useSelector(
    (state) => state.fabLab
  );
  const { auth } = useSelector((state) => state.auth);
  const width = useWindowWidth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { contextHolder, openNotification } = useNotification();

  useEffect(() => {
    if (width >= 768) {
      setColor("white");
    } else {
      setColor("black");
    }
  }, [width]);

  const onProvinceChange = (value) => {
    setProvince(value);
  };

  const onFinish = (values) => {
    if (values.facebook === undefined) {
      values.facebook = null;
    }

    if (values.linkedin === undefined) {
      values.linkedin = null;
    }

    if (values.website === undefined) {
      values.website = null;
    }

    values.slug = slug(values.name);
    values.province = province;
    values.validated = false;
    values.disapproved = false;
    values.banner = banner;
    values.logo = logo;
    values.uid = auth.uid;
    values.accountAssociated = auth.displayName;
    values.accountAssociatedProfileUrl = auth.picture;

    dispatch(createFabLabAction(values));
  };

  useEffect(() => {
    if (dispatchCounter === 0) {
      return;
    } else {
      openNotification({
        isSuccess,
        message,
      });
      dispatch(resetFabLabDispatchCounter());
      dispatch(updateUserToRegistered());

      if (isSuccess) {
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    }
  }, [
    dispatch,
    dispatchCounter,
    isSuccess,
    message,
    navigate,
    openNotification,
  ]);

  return (
    <MainContainer>
      {contextHolder}
      <Navbar color={color} />
      <Container>
        <Title>
          Fab Lab <TitleSpan>Registration</TitleSpan>
        </Title>
        <Subtitle>
          Complete the Fab Lab Registration form to officially join our Fab Lab
          community and unlock exclusive benefits and opportunities.
        </Subtitle>
        <Form layout="vertical" onFinish={onFinish}>
          <FormContainer>
            <CategoryTitle>Fab Lab Information</CategoryTitle>
            <Form.Item
              label="Name of Fab Lab"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input fab lab name.",
                },
              ]}
            >
              <Input placeholder="Input fab lab name" required />
            </Form.Item>
            <Form.Item
              label="Vision"
              name="description"
              rules={[
                {
                  required: true,
                  message: "Please input Fab Lab's vision.",
                },
              ]}
            >
              <Input placeholder="Input vision" required />
            </Form.Item>
            <Line />
            <CategoryTitle>Contact Information</CategoryTitle>
            <ContactContainer>
              <FormItemEmail
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input email.",
                  },
                ]}
              >
                <Input placeholder="Input email" required type="email" />
              </FormItemEmail>
              <Form.Item label="Phone Number" name="phone">
                <PatternFormat format="+63 (###) ### ####" />
              </Form.Item>
              <Form.Item label="Telephone Number" name="telephone">
                <PatternFormat format="(###) ### ####" />
              </Form.Item>
            </ContactContainer>
            <CategorySubtitle>Office Address</CategorySubtitle>
            <AddressContainer>
              <FormItemContactInfo
                label="Street No/Lot/Building"
                name="street"
                rules={[
                  {
                    required: true,
                    message: "Please input street no./lot/building.",
                  },
                ]}
              >
                <Input placeholder="Input street no./lot/building" required />
              </FormItemContactInfo>
              <FormItemContactInfo
                label="State/Province"
                name="province"
                rules={[
                  {
                    required: true,
                    message: "Please select state/province.",
                  },
                ]}
              >
                <Select
                  placeholder="Select state/province"
                  onChange={onProvinceChange}
                  options={provinces}
                />
              </FormItemContactInfo>
              <FormItemContactInfo
                label="City/Municipality"
                name="municipality"
                rules={[
                  {
                    required: true,
                    message: "Please select city/municipality.",
                  },
                ]}
              >
                <Input placeholder="Input city/municipality" required />
              </FormItemContactInfo>
              <FormItemContactInfo
                label="Barangay"
                name="barangay"
                rules={[
                  {
                    required: true,
                    message: "Please input barangay.",
                  },
                ]}
              >
                <Input placeholder="Input barangay" required />
              </FormItemContactInfo>
              <FormItemContactInfo
                label="Zip Code"
                name="zipcode"
                rules={[
                  {
                    required: true,
                    message: "Please input zip code.",
                  },
                ]}
              >
                <PatternFormat format="####" placeholder="Input zip code" />
              </FormItemContactInfo>
            </AddressContainer>
            <Line />
            <CategoryTitle>
              Website and Social Media Links, if applicable
            </CategoryTitle>
            <SocialContainer>
              <FormItemContactInfo label="Website" name="website">
                <Input placeholder="Input website" type="url" />
              </FormItemContactInfo>
              <FormItemContactInfo label="Facebook" name="facebook">
                <Input placeholder="Input facebook" type="url" />
              </FormItemContactInfo>
              <FormItemContactInfo label="Linkedin" name="linkedin">
                <Input placeholder="Input linkedin" type="url" />
              </FormItemContactInfo>
            </SocialContainer>
            <Line />
            <CategoryTitle>Attachments, if applicable</CategoryTitle>
            <UploadContainer>
              <LogoUploadContainer>
                <LogoContainer>
                  <Form.Item label="Profile Logo" name="logo">
                    <RegistrationUpload setFile={setLogo} />
                  </Form.Item>
                </LogoContainer>
                <UploadInfo>*PNG, JPG, and WEBP only</UploadInfo>
              </LogoUploadContainer>
              <BannerContainer>
                <Form.Item label="Banner Image" name="banner">
                  <RegistrationUpload setFile={setBanner} />
                </Form.Item>
                <BannerInfoContainer>
                  <UploadInfo>
                    *Suggested banner height size is between 500 to 590px
                  </UploadInfo>
                  <UploadInfo>*File must be under 10 MB</UploadInfo>
                  <UploadInfo>*PNG, JPG, and WEBP only</UploadInfo>
                </BannerInfoContainer>
              </BannerContainer>
            </UploadContainer>
            <Form.Item>
              <SubmitContainer>
                {isCreateLoading ? (
                  <SpinnerContainer>
                    <Spinner />
                  </SpinnerContainer>
                ) : (
                  <SubmitButton size="large" type="primary" htmlType="submit">
                    Submit
                  </SubmitButton>
                )}
              </SubmitContainer>
            </Form.Item>
          </FormContainer>
        </Form>
      </Container>
    </MainContainer>
  );
};

export default FabLabRegistrationPage;
