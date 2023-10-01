import { collection, doc, setDoc } from "firebase/firestore";
import React, { Fragment, useState } from "react";
import { Footer, Navbar, PrimaryButton, Spinner } from "../../components";
import { db } from "../../firebase/firebase.config";
import { useNotification } from "../../hooks";
import {
  CallIcon,
  ContactContainer,
  ContactEmail,
  ContactInformationContainer,
  ContactText,
  Container,
  EmailIcon,
  FacebookIcon,
  FormButtonContainer,
  FormContainer,
  FormControl,
  FormInput,
  FormLabel,
  FormTextarea,
  FormTitle,
  InstagramIcon,
  Line,
  LineContainer,
  LinkedinIcon,
  LoadingContainer,
  PinIcon,
  SocialContainer,
  Subtitle,
  Title,
  TwitterIcon,
} from "./ContactUs.styles";

const ContactUsPage = () => {
  const [email, setEmail] = useState();
  const [fullname, setFullname] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();

  const { contextHolder, openNotification } = useNotification();

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const contactUsCol = collection(db, "contactUs");
      const contactUsDoc = doc(contactUsCol);

      await setDoc(contactUsDoc, { email, fullname, message });

      openNotification({
        isSuccess: true,
        message: "Successfully sent your message. Thank you.",
      });
      setLoading(false);
      setEmail("");
      setFullname("");
      setMessage("");
    } catch (err) {
      setLoading(false);
      return openNotification({
        isSuccess: false,
        message: "Something went wrong.",
      });
    }
  };

  return (
    <Fragment>
      {contextHolder}
      <Navbar />
      <Container>
        <ContactInformationContainer>
          <Title>CONTACT US</Title>
          <Subtitle>Let's connect and make things happen.</Subtitle>
          <ContactContainer>
            <EmailIcon />
            <ContactEmail>hello@wvstartupportal.com</ContactEmail>
          </ContactContainer>
          <ContactContainer>
            <CallIcon />
            <ContactText>+63912-232-3451</ContactText>
          </ContactContainer>
          <ContactContainer>
            <PinIcon />
            <ContactText style={{ width: "218px" }}>
              Pugaran, ISAT U Kwadra TBI, Research Hub Bldg., Burgos St., La
              Paz, Iloilo City, 5000
            </ContactText>
          </ContactContainer>
          <LineContainer>
            <Line />
          </LineContainer>
          <SocialContainer>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <LinkedinIcon />
          </SocialContainer>
        </ContactInformationContainer>
        <FormContainer onSubmit={onSubmit}>
          <FormTitle>Send Us A Message!</FormTitle>
          <FormControl>
            <FormLabel>Your Name</FormLabel>
            <FormInput
              name="fullname"
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Enter Name"
              required
              type="text"
              value={fullname}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email Address</FormLabel>
            <FormInput
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required
              type="email"
              value={email}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <FormTextarea
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              required
              value={message}
            />
          </FormControl>
          {loading ? (
            <LoadingContainer>
              <Spinner />
            </LoadingContainer>
          ) : (
            <FormButtonContainer>
              <PrimaryButton name="SEND MESSAGE" type="submit" />
            </FormButtonContainer>
          )}
        </FormContainer>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default ContactUsPage;
