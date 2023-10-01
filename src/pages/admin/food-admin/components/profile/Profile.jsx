import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
import slug from "slug";

const { Option } = StyledSelect;

const Profile = () => {
  const [bannerFile, setBannerFile] = useState(null);
  const [logoFile, setLogoFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [specificProfile, setSpecificProfile] = useState({});
  const [profile, setProfile] = useState({});
  const [form] = Form.useForm();

  const { auth } = useSelector((state) => state.auth);
  const col = collection(db, "food");
  const qQuery = query(col, where("uid", "==", auth.uid));

  const { contextHolder, openNotification } = useNotification();

  useEffect(() => {
    const unsubscribe = onSnapshot(qQuery, (snapshot) => {
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
        name: profile.name,
        description: profile.description,
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
        name: profile.name,
        description: profile.description,
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

  const onFinish = async (values) => {
    const fieldsValue = form.getFieldsValue();

    delete fieldsValue.bannerUrl;
    delete fieldsValue.logoUrl;
    delete values.bannerUrl;
    delete values.logoUrl;

    if (bannerFile === null && logoFile === null) {
      const isBothEqual = isEqual(fieldsValue, specificProfile);

      if (isBothEqual) {
        return openNotification({
          isSuccess: false,
          message: "Nothing to save changes.",
        });
      }
    }

    values.slug = slug(values.name);

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
        doc(db, "food", auth.uid),
        {
          ...values,
        },
        { merge: true }
      );

      setLoading(false);

      openNotification({
        isSuccess: true,
        message: "Successfully updated data information.",
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
          <Heading>Food Innovation Center</Heading>
          <ProfileContainer>
            <LeftProfileContainer>
              <div>
                <UpdateFormTitle>
                  <UpdateFormTitleSpan>*</UpdateFormTitleSpan> Current Logo
                </UpdateFormTitle>
                <Image
                  src={profile ? profile.logoUrl : null}
                  width={127}
                  height={127}
                />
                <br />
                <br />
                <StyledFormItem label="Update Logo" name="logoUrl">
                  <ImageUpload setFile={setLogoFile} />
                </StyledFormItem>
              </div>
              <div>
                <UpdateFormTitle>
                  <UpdateFormTitleSpan>*</UpdateFormTitleSpan> Current Banner
                </UpdateFormTitle>
                <Image
                  src={profile ? profile.bannerUrl : null}
                  width={127}
                  height={56}
                />
                <br />
                <br />
                <StyledFormItem label="Update Banner" name="bannerUrl">
                  <ImageUpload setFile={setBannerFile} />
                </StyledFormItem>
              </div>
            </LeftProfileContainer>
            <LeftFormContainer>
              <Subtitle>Accelerator Information</Subtitle>
              <StyledFormItem
                label="Name of Food Innovation Center"
                name="name"
                rules={[
                  {
                    message: "Please input food innovation center name.",
                    required: true,
                  },
                ]}
              >
                <StyledInput placeholder="Name of Food Innovation Center" />
              </StyledFormItem>
              <StyledFormItem
                label="Vision"
                name="description"
                rules={[
                  {
                    message: "Please input vision.",
                    required: true,
                  },
                ]}
              >
                <StyledInput placeholder="Input vision" />
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
            <Heading>Food Innovation Center Status</Heading>
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
