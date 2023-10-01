import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isEqual } from "lodash";
import ReactQuill from "react-quill";
import {
  collection,
  doc,
  onSnapshot,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import Form from "antd/es/form";
import Image from "antd/es/image";
import { db, storage } from "../../../../../firebase/firebase.config";
import { useNotification } from "../../../../../hooks";
import {
  Container,
  Heading,
  LeftContainer,
  LeftFormContainer,
  LeftProfileContainer,
  ProfileContainer,
  RightButtonContainer,
  RightContainer,
  SaveButton,
  StyledForm,
  StyledFormItem,
  Subtitle,
  UpdateFormTitle,
  UpdateFormTitleSpan,
} from "./AboutUs.styles";
import { ImageUpload, Spinner } from "../../../../../components";
import "react-quill/dist/quill.snow.css";

const AboutUs = () => {
  const [oneFile, setOneFile] = useState(null);
  const [twoFile, setTwoFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [aboutUsData, setAboutUsData] = useState({});
  const [aboutUs, setAboutUs] = useState({});
  const [value, setValue] = useState("");

  const [form] = Form.useForm();

  const { auth } = useSelector((state) => state.auth);
  const startupAboutUsCol = collection(db, "startupAboutUs");
  const startupAboutUsQuery = query(
    startupAboutUsCol,
    where("uid", "==", auth.uid)
  );

  const { contextHolder, openNotification } = useNotification();

  useEffect(() => {
    const unsubscribe = onSnapshot(startupAboutUsQuery, (snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return doc.data();
      });

      if (data.length > 0) {
        setAboutUsData(data[0]);
      }
    });

    return () => unsubscribe();

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (aboutUsData) {
      form.setFieldsValue({
        description: aboutUsData.description,
      });

      setAboutUs({
        description: aboutUsData.description,
      });
    }
  }, [form, aboutUsData]);

  const onFinish = async (values) => {
    const fieldsValue = form.getFieldsValue();

    if (!value) {
      return openNotification({
        isSuccess: false,
        message: "Input your about us details.",
      });
    }

    delete fieldsValue.firstImgUrl;
    delete fieldsValue.secondImgUrl;
    delete values.firstImgUrl;
    delete values.secondImgUrl;

    values.uid = auth.uid;
    values.description = value;

    if (oneFile === null && twoFile === null) {
      const isBothEqual = isEqual(fieldsValue, aboutUs);

      if (isBothEqual) {
        return openNotification({
          isSuccess: false,
          message: "Nothing to save changes.",
        });
      }
    }

    try {
      setLoading(true);
      if (oneFile !== null) {
        const oneFileRef = ref(storage, `aboutUs/${Date.now() + auth.uid}`);
        const snapshot = await uploadBytes(oneFileRef, oneFile);
        const firstImgUrl = await getDownloadURL(snapshot.ref);

        if (aboutUsData.firstImgUrl) {
          const deleteImgRef = ref(storage, aboutUsData.firstImgUrl);

          await deleteObject(deleteImgRef);
        }

        values.firstImgUrl = firstImgUrl;

        setOneFile(null);
      }

      if (twoFile !== null) {
        const twoFileRef = ref(storage, `aboutUs/${Date.now() + auth.uid}`);
        const snapshot = await uploadBytes(twoFileRef, twoFile);
        const secondImgUrl = await getDownloadURL(snapshot.ref);

        if (aboutUsData.secondImgUrl) {
          const deleteImgRef = ref(storage, aboutUsData.secondImgUrl);

          await deleteObject(deleteImgRef);
        }

        values.secondImgUrl = secondImgUrl;

        setTwoFile(null);
      }

      await setDoc(
        doc(db, "startupAboutUs", auth.uid),
        {
          ...values,
        },
        { merge: true }
      );

      setValue("");
      setLoading(false);

      openNotification({
        isSuccess: true,
        message: "Successfully updated about your startup information.",
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
          <Heading>About Us</Heading>
          <ProfileContainer>
            <LeftProfileContainer>
              <div>
                <UpdateFormTitle>
                  <UpdateFormTitleSpan>*</UpdateFormTitleSpan> Current First
                  Image
                </UpdateFormTitle>
                <Image
                  src={aboutUsData ? aboutUsData.firstImgUrl : null}
                  width={127}
                  height={127}
                />
                <br />
                <br />
                <StyledFormItem label="Update First Image" name="firstImgUrl">
                  <ImageUpload setFile={setOneFile} />
                </StyledFormItem>
              </div>
              <div>
                <UpdateFormTitle>
                  <UpdateFormTitleSpan>*</UpdateFormTitleSpan> Current Second
                  Image
                </UpdateFormTitle>
                <Image
                  src={aboutUsData ? aboutUsData.secondImgUrl : null}
                  width={127}
                  height={127}
                />
                <br />
                <br />
                <StyledFormItem label="Update Second Image" name="secondImgUrl">
                  <ImageUpload setFile={setTwoFile} />
                </StyledFormItem>
              </div>
            </LeftProfileContainer>
            <LeftFormContainer>
              <Subtitle>About Us Information</Subtitle>
              <StyledFormItem
                label="About Us Details"
                name="description"
                rules={[
                  {
                    message: "Please input about your startup company.",
                    required: true,
                  },
                ]}
              >
                <ReactQuill theme="snow" value={value} onChange={setValue} />
              </StyledFormItem>
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
        </RightContainer>
      </StyledForm>
    </Container>
  );
};

export default AboutUs;
