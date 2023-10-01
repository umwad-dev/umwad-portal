import React, { useEffect, useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import { useDispatch, useSelector } from "react-redux";
import slug from "slug";
import Form from "antd/es/form";
import Input from "antd/es/input";
import Select from "antd/es/select";
import { PatternFormat } from "react-number-format";
import { getAllTBIAction } from "../../features/tbi/tbiSlice";
import { Navbar, RegistrationUpload, Spinner } from "../../components";
import { provinces } from "../../utils/address";
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
} from "./StartupRegistration.styles";
import { useNotification } from "../../hooks";
import {
  createStartupAction,
  resetStartupDispatchCounter,
} from "../../features/startup/startupSlice";
import { useNavigate } from "react-router-dom";
import { updateUserToRegistered } from "../../features/auth/authSlice";
import { getAllAcceleratorAction } from "../../features/accelerator/acceleratorSlice";

const StartupRegistrationPage = () => {
  const [color, setColor] = useState("black");
  const [banner, setBanner] = useState(null);
  const [logo, setLogo] = useState(null);
  const [province, setProvince] = useState();
  const [tbiCollection, setTBICollection] = useState([]);
  const [acceleratorCollection, setAcceleratorCollection] = useState([]);
  const [selectedTBI, setSelectedTBI] = useState(null);
  const [selectedAccelerator, setSelectedAccelerator] = useState(null);

  const { auth } = useSelector((state) => state.auth);
  const { dispatchCounter, isCreateLoading, isSuccess, message } = useSelector(
    (state) => state.startup
  );
  const { accelerators } = useSelector((state) => state.accelerator);
  const { tbis } = useSelector((state) => state.tbi);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const width = useWindowWidth();

  const { contextHolder, openNotification } = useNotification();

  useEffect(() => {
    if (width >= 768) {
      setColor("white");
    } else {
      setColor("black");
    }
  }, [width]);

  useEffect(() => {
    dispatch(getAllTBIAction());
    dispatch(getAllAcceleratorAction());
  }, [dispatch]);

  useEffect(() => {
    if (tbis.length > 0) {
      const tbiCollected = [];

      tbis
        .filter((tbi) => tbi.validated === true)
        .forEach((tbi) => {
          const newTBI = {
            value: tbi.uid,
            label: tbi.tbiName,
          };

          tbiCollected.push(newTBI);
        });

      if (tbiCollected.length > 0) {
        const sortedTBI = tbiCollected.sort((a, b) => {
          let x = a.label.toLowerCase();
          let y = b.label.toLowerCase();

          if (x < y) return -1;
          if (x > y) return 1;

          return 0;
        });

        setTBICollection(sortedTBI);
      } else {
        setTBICollection(tbiCollected);
      }
    }
  }, [tbis]);

  useEffect(() => {
    if (accelerators.length > 0) {
      const collected = [];

      accelerators
        .filter((data) => data.validated === true)
        .forEach((data) => {
          const newData = {
            value: data.uid,
            label: data.name,
          };

          collected.push(newData);
        });

      if (collected.length > 0) {
        const sortedData = collected.sort((a, b) => {
          let x = a.label.toLowerCase();
          let y = b.label.toLowerCase();

          if (x < y) return -1;
          if (x > y) return 1;

          return 0;
        });

        setAcceleratorCollection(sortedData);
      } else {
        setAcceleratorCollection(collected);
      }
    }
  }, [accelerators]);

  useEffect(() => {
    if (dispatchCounter === 0) {
      return;
    } else {
      openNotification({
        isSuccess,
        message,
      });
      dispatch(resetStartupDispatchCounter());
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

    delete values.tbis;
    delete values.accelerators;
    values.slug = slug(values.businessName);
    values.tbi = selectedTBI;
    values.accelerator = selectedAccelerator;
    values.province = province;
    values.validated = false;
    values.disapproved = false;
    values.banner = banner;
    values.logo = logo;
    values.uid = auth.uid;
    values.accountAssociated = auth.displayName;
    values.accountAssociatedProfileUrl = auth.picture;

    dispatch(createStartupAction(values));
  };

  const onProvinceChange = (value) => {
    setProvince(value);
  };

  const onTBIChange = (value) => {
    if (value !== undefined) {
      const filterTBISelected = tbis?.filter((tbi) => tbi.uid === value);
      const getSpecificTBIData = {
        uid: filterTBISelected[0].uid,
        logoUrl: filterTBISelected[0].logoUrl,
        slug: filterTBISelected[0].slug,
        tbiName: filterTBISelected[0].tbiName,
      };

      setSelectedTBI(getSpecificTBIData);
    } else {
      setSelectedTBI(null);
    }
  };

  const onAcceleratorChange = (value) => {
    if (value !== undefined) {
      const filteredData = accelerators?.filter((data) => data.uid === value);
      const getData = {
        uid: filteredData[0].uid,
        logoUrl: filteredData[0].logoUrl,
        slug: filteredData[0].slug,
        name: filteredData[0].name,
      };

      setSelectedAccelerator(getData);
    } else {
      setSelectedAccelerator(null);
    }
  };

  return (
    <MainContainer>
      {contextHolder}
      <Navbar color={color} />
      <Container>
        <Title>
          Startup <TitleSpan>Registration</TitleSpan>
        </Title>
        <Subtitle>
          Complete the Startup Registration form to officially join our startup
          community and unlock exclusive benefits and opportunities.
        </Subtitle>
        <Form layout="vertical" onFinish={onFinish}>
          <FormContainer>
            <CategoryTitle>Business Information</CategoryTitle>
            <Form.Item
              label="Company Name (Business Name)"
              name="businessName"
              rules={[
                {
                  required: true,
                  message: "Please input company name.",
                },
              ]}
            >
              <Input placeholder="Input company name" required />
            </Form.Item>
            <Form.Item
              label="Vision"
              name="description"
              rules={[
                {
                  required: true,
                  message: "Please input startup's vision.",
                },
              ]}
            >
              <Input placeholder="Input vision" required />
            </Form.Item>
            <Form.Item
              label="Incubated By"
              name="tbis"
              rules={[
                {
                  required: true,
                  message: "Please select TBI.",
                },
              ]}
            >
              <Select
                allowClear
                onChange={onTBIChange}
                options={tbiCollection}
                placeholder="Select TBIs"
              />
            </Form.Item>
            <Form.Item label="Accelerated By" name="accelerators">
              <Select
                allowClear
                onChange={onAcceleratorChange}
                options={acceleratorCollection}
                placeholder="Select Accelerators"
              />
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

export default StartupRegistrationPage;
