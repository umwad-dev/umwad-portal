import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEqual } from "lodash";
import {
  collection,
  doc,
  onSnapshot,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import Form from "antd/es/form";
import Image from "antd/es/image";
import Select from "antd/es/select";
import { PatternFormat } from "react-number-format";
import { db, storage } from "../../../../../firebase/firebase.config";
import { useNotification } from "../../../../../hooks";
import {
  AddressContainer,
  Container,
  Divider,
  EmailContainer,
  Heading,
  LeftFlexContainer,
  LeftContainer,
  LeftFormContainer,
  LeftProfileContainer,
  PhoneContainer,
  ProfileContainer,
  RightButtonContainer,
  RightContainer,
  SaveButton,
  SocialContainer,
  StyledForm,
  StyledFormItem,
  StyledInput,
  StyledSelect,
  StyledTag,
  Subtitle,
  ZipContainer,
  RightStatusContainer,
  UpdateFormTitle,
  UpdateFormTitleSpan,
} from "./Profile.styles";
import { ImageUpload, Spinner } from "../../../../../components";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { getAllTBIAction } from "../../../../../features/tbi/tbiSlice";
import { getAllAcceleratorAction } from "../../../../../features/accelerator/acceleratorSlice";
import slug from "slug";

const { Option } = StyledSelect;

const Profile = () => {
  const [bannerFile, setBannerFile] = useState(null);
  const [logoFile, setLogoFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({});
  const [specificProfile, setSpecificProfile] = useState({});
  const [selectedTBI, setSelectedTBI] = useState();
  const [tbiCollection, setTBICollection] = useState([]);

  const [form] = Form.useForm();

  const { auth } = useSelector((state) => state.auth);
  const { tbis } = useSelector((state) => state.tbi);
  const dispatch = useDispatch();
  const startupCol = collection(db, "startup");
  const startupQuery = query(startupCol, where("uid", "==", auth.uid));

  const { contextHolder, openNotification } = useNotification();

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

      setTBICollection(tbiCollected);
    }
  }, [tbis]);

  useEffect(() => {
    const unsubscribe = onSnapshot(startupQuery, (snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return doc.data();
      });

      if (data.length > 0) {
        setProfile(data[0]);
      }
    });

    return () => unsubscribe();

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (profile) {
      form.setFieldsValue({
        businessName: profile.businessName,
        description: profile.description,
        tbis: profile.tbi?.uid,
        accelerators: profile.accelerator?.uid,
        email: profile.email,
        phone: profile.phone,
        telephone: profile.telephone,
        province: profile.province,
        municipality: profile.municipality,
        barangay: profile.barangay,
        street: profile.street,
        zipcode: profile.zipcode,
        website: profile.website ? profile.website : "",
        facebook: profile.facebook ? profile.facebook : "",
        linkedin: profile.linkedin ? profile.linkedin : "",
      });

      setSpecificProfile({
        businessName: profile.businessName,
        description: profile.description,
        accelerators: profile.accelerator?.uid,
        tbis: profile.tbi?.uid,
        email: profile.email,
        phone: profile.phone,
        telephone: profile.telephone,
        province: profile.province,
        municipality: profile.municipality,
        barangay: profile.barangay,
        street: profile.street,
        zipcode: profile.zipcode,
        website: profile.website ? profile.website : "",
        facebook: profile.facebook ? profile.facebook : "",
        linkedin: profile.linkedin ? profile.linkedin : "",
      });
    }
  }, [form, profile]);

  const onTBIChange = (value) => {
    setSelectedTBI(value);
  };

  const onFinish = async (values) => {
    const fieldsValue = form.getFieldsValue();

    delete fieldsValue.bannerUrl;
    delete fieldsValue.logoUrl;
    delete fieldsValue.tbis;
    delete values.bannerUrl;
    delete values.logoUrl;
    delete values.tbis;

    values.tbi = selectedTBI;

    if (bannerFile === null && logoFile === null) {
      const isBothEqual = isEqual(fieldsValue, specificProfile);

      if (isBothEqual) {
        return openNotification({
          isSuccess: false,
          message: "Nothing to save changes.",
        });
      }
    }

    values.slug = slug(values.businessName);

    try {
      setLoading(true);
      if (bannerFile !== null) {
        const bannerRef = ref(storage, `banner/${Date.now() + auth.uid}`);
        const snapshot = await uploadBytes(bannerRef, bannerFile);
        const bannerUrl = await getDownloadURL(snapshot.ref);

        if (profile.bannerUrl) {
          const deleteImgRef = ref(storage, profile.bannerUrl);

          await deleteObject(deleteImgRef);
        }

        values.bannerUrl = bannerUrl;

        setBannerFile(null);
      }

      if (logoFile !== null) {
        const logoRef = ref(storage, `logo/${Date.now() + auth.uid}`);
        const snapshot = await uploadBytes(logoRef, logoFile);
        const logoUrl = await getDownloadURL(snapshot.ref);

        if (profile.logoUrl) {
          const deleteImgRef = ref(storage, profile.logoUrl);

          await deleteObject(deleteImgRef);
        }

        values.logoUrl = logoUrl;

        setLogoFile(null);
      }

      await setDoc(
        doc(db, "startup", auth.uid),
        {
          ...values,
        },
        { merge: true }
      );

      setLoading(false);

      openNotification({
        isSuccess: true,
        message: "Successfully updated startup information.",
      });
    } catch (err) {
      setLoading(false);
      return openNotification({
        isSuccess: false,
        message: "Something went wrong.",
      });
    }
  };

  return (
    <Container>
      {contextHolder}
      <StyledForm form={form} layout="vertical" onFinish={onFinish}>
        <LeftContainer>
          <Heading>Startup</Heading>
          <ProfileContainer>
            <LeftProfileContainer>
              <div>
                <UpdateFormTitle>
                  <UpdateFormTitleSpan>*</UpdateFormTitleSpan> Current Startup
                  Logo
                </UpdateFormTitle>
                <Image
                  src={profile ? profile.logoUrl : null}
                  width={127}
                  height={127}
                />
                <br />
                <br />
                <StyledFormItem label="Update Startup Logo" name="logoUrl">
                  <ImageUpload setFile={setLogoFile} />
                </StyledFormItem>
              </div>
              <div>
                <UpdateFormTitle>
                  <UpdateFormTitleSpan>*</UpdateFormTitleSpan> Current Startup
                  Banner
                </UpdateFormTitle>
                <Image
                  src={profile ? profile.bannerUrl : null}
                  width={127}
                  height={56}
                />
                <br />
                <br />
                <StyledFormItem label="Update Startup Banner" name="bannerUrl">
                  <ImageUpload setFile={setBannerFile} />
                </StyledFormItem>
              </div>
            </LeftProfileContainer>
            <LeftFormContainer>
              <Subtitle>Startup Information</Subtitle>
              <StyledFormItem
                label="Company Name (Business Name)"
                name="businessName"
                rules={[
                  {
                    message: "Please input startup name.",
                    required: true,
                  },
                ]}
              >
                <StyledInput placeholder="Name of Company/Startup" />
              </StyledFormItem>
              <StyledFormItem
                label="Description"
                name="description"
                rules={[
                  {
                    message: "Please input description.",
                    required: true,
                  },
                ]}
              >
                <StyledInput placeholder="Description" />
              </StyledFormItem>
              <StyledFormItem
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
              </StyledFormItem>
              <Divider />
              <Subtitle>Contact Information</Subtitle>
              <LeftFlexContainer>
                <EmailContainer>
                  <StyledFormItem
                    label="Email"
                    name="email"
                    rules={[
                      {
                        message: "Please input email.",
                        required: true,
                      },
                    ]}
                  >
                    <StyledInput placeholder="Email" type="email" />
                  </StyledFormItem>
                </EmailContainer>
                <PhoneContainer>
                  <StyledFormItem label="Phone number" name="phone">
                    <PatternFormat format="+63 (###) ### ####" />
                  </StyledFormItem>
                </PhoneContainer>
                <PhoneContainer>
                  <StyledFormItem label="Telephone number" name="telephone">
                    <PatternFormat format="(###) ### ####" />
                  </StyledFormItem>
                </PhoneContainer>
              </LeftFlexContainer>
              <LeftFlexContainer>
                <AddressContainer>
                  <StyledFormItem
                    label="State/Province"
                    name="province"
                    rules={[
                      {
                        message: "Please select province.",
                        required: true,
                      },
                    ]}
                  >
                    <StyledSelect placeholder="State/Province">
                      <Option value="Aklan">Aklan</Option>
                      <Option value="Antique">Antique</Option>
                      <Option value="Capiz">Capiz</Option>
                      <Option value="Guimaras">Guimaras</Option>
                      <Option value="Iloilo">Iloilo</Option>
                      <Option value="Negros Occidental">
                        Negros Occidental
                      </Option>
                    </StyledSelect>
                  </StyledFormItem>
                </AddressContainer>
                <AddressContainer>
                  <StyledFormItem
                    label="Municipality"
                    name="municipality"
                    rules={[
                      {
                        message: "Please input municipality.",
                        required: true,
                      },
                    ]}
                  >
                    <StyledInput placeholder="Municipality" />
                  </StyledFormItem>
                </AddressContainer>
                <AddressContainer>
                  <StyledFormItem
                    label="Barangay"
                    name="barangay"
                    rules={[
                      {
                        message: "Please input barangay.",
                        required: true,
                      },
                    ]}
                  >
                    <StyledInput placeholder="Barangay" />
                  </StyledFormItem>
                </AddressContainer>
              </LeftFlexContainer>
              <LeftFlexContainer>
                <AddressContainer>
                  <StyledFormItem
                    label="Street No/Lot/Building"
                    name="street"
                    rules={[
                      {
                        message: "Please input street no.",
                        required: true,
                      },
                    ]}
                  >
                    <StyledInput placeholder="Street No/Lot/Building" />
                  </StyledFormItem>
                </AddressContainer>
                <ZipContainer>
                  <StyledFormItem
                    label="Zip"
                    name="zipcode"
                    rules={[
                      {
                        message: "Please input zip code.",
                        required: true,
                      },
                    ]}
                  >
                    <StyledInput placeholder="Zip" type="number" />
                  </StyledFormItem>
                </ZipContainer>
              </LeftFlexContainer>
              <Divider />
              <Subtitle>Website and Social Media Links, if applicable</Subtitle>
              <LeftFlexContainer>
                <SocialContainer>
                  <StyledFormItem label="Website" name="website">
                    <StyledInput placeholder="Website" />
                  </StyledFormItem>
                </SocialContainer>
                <SocialContainer>
                  <StyledFormItem label="Facebook" name="facebook">
                    <StyledInput placeholder="facebook" />
                  </StyledFormItem>
                </SocialContainer>
                <SocialContainer>
                  <StyledFormItem label="Linkedin" name="linkedin">
                    <StyledInput placeholder="linkedin" />
                  </StyledFormItem>
                </SocialContainer>
              </LeftFlexContainer>
            </LeftFormContainer>
          </ProfileContainer>
        </LeftContainer>
        <RightContainer>
          <RightButtonContainer>
            {loading ? (
              <Spinner />
            ) : (
              <SaveButton type="submit">Save changes</SaveButton>
            )}
          </RightButtonContainer>
          <RightStatusContainer>
            <Heading>Startup Status</Heading>
            {profile && profile.validated ? (
              <StyledTag color="green">Published</StyledTag>
            ) : (
              <StyledTag color="red">Unpublished</StyledTag>
            )}
          </RightStatusContainer>
        </RightContainer>
      </StyledForm>
    </Container>
  );
};

export default Profile;
