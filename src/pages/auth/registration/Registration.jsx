import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useWindowWidth } from "@react-hook/window-size";
import {
  Input,
  Navbar,
  PrimaryButton,
  RegistrationSelect,
  Spinner,
} from "../../../components";
import {
  BottomContainer,
  CoContainer,
  Container,
  FormContainer,
  InputContainer,
  Label,
  LoginSpan,
  LoginText,
  MainContainer,
  RegisterButtonContainer,
  SelectContainer,
  SelectMainContainer,
  Title,
} from "./Registration.styles";
import { goToLoginPage } from "../../../utils/redirections";
import { useNotification } from "../../../hooks";
import {
  createUserAction,
  resetAuthDispatchCounter,
} from "../../../features/auth/authSlice";

const RegistrationPage = () => {
  const [color, setColor] = useState("black");

  const [email, setEmail] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastName] = useState();
  const [password, setPassword] = useState();
  const [type, setType] = useState(0);

  const width = useWindowWidth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { dispatchCounter, isRegistrationLoading, isSuccess, message } =
    useSelector((state) => state.auth);

  const { contextHolder, openNotification } = useNotification();

  useEffect(() => {
    if (width >= 768) {
      setColor("white");
    } else {
      setColor("black");
    }
  }, [width]);

  // const onGoogleSignIn = () => {
  //   dispatch(createUserWithGoogleAction());
  // };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password.length <= 6) {
      return openNotification({
        isSuccess: false,
        message: "Password length should be at least 7 or more.",
      });
    }

    if (type === 0) {
      return openNotification({
        isSuccess: false,
        message: "Please select a registration type.",
      });
    }

    const inputs = {
      firstname,
      lastname,
      email,
      password,
      type: Number(type),
      registered: false,
    };

    dispatch(createUserAction(inputs));
  };

  useEffect(() => {
    if (dispatchCounter === 0) {
      return;
    } else {
      openNotification({
        isSuccess,
        message,
      });
      dispatch(resetAuthDispatchCounter());

      if (isSuccess) {
        setTimeout(() => {
          if (type === "2") {
            return navigate("/tbi/registration");
          } else if (type === "1") {
            return navigate("/startup/registration");
          } else if (type === "3") {
            return navigate("/accelerator/registration");
          } else if (type === "4") {
            return navigate("/innovation-hub/registration");
          } else if (type === "5") {
            return navigate("/coworking-space/registration");
          } else if (type === "6") {
            return navigate("/fab-lab/registration");
          } else if (type === "7") {
            return navigate("/food-innovation-center/registration");
          }
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
    type,
  ]);

  return (
    <MainContainer>
      {contextHolder}
      <Navbar color={color} />
      <CoContainer>
        <Container>
          <Title>Register your Account</Title>
          {/* <ButtonContainer>
          <GoogleButtonContainer>
            {isGoogleRegistrationLoading ? (
              <Spinner />
            ) : (
              <SocialButton
                icon={GoogleIcon}
                name="Continue with Google"
                onClick={onGoogleSignIn}
              />
            )}
          </GoogleButtonContainer>
        </ButtonContainer> */}
          {/* <HorizontalContainer>
          <HorizontalLine />
          <HorizontalText>or register with Email</HorizontalText>
          <HorizontalLine />
        </HorizontalContainer> */}
          <FormContainer onSubmit={onSubmit}>
            <InputContainer>
              <Input
                labelName="First Name"
                onChange={(e) => setFirstname(e.target.value)}
                required
                value={firstname}
              />
            </InputContainer>
            <InputContainer>
              <Input
                labelName="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                required
                value={lastname}
              />
            </InputContainer>
            <InputContainer>
              <Input
                labelName="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                value={email}
              />
            </InputContainer>
            <InputContainer>
              <Input
                labelName="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                value={password}
              />
            </InputContainer>
            <SelectMainContainer>
              <SelectContainer>
                <Label>Type</Label>
                <RegistrationSelect onChange={setType} />
              </SelectContainer>
            </SelectMainContainer>
            <BottomContainer>
              <RegisterButtonContainer>
                {isRegistrationLoading ? (
                  <Spinner />
                ) : (
                  <PrimaryButton
                    fontWeight={700}
                    name="Register Account"
                    type="submit"
                  />
                )}
              </RegisterButtonContainer>
              <LoginText>
                Already have an account?{" "}
                <LoginSpan onClick={goToLoginPage}>Login here.</LoginSpan>
              </LoginText>
            </BottomContainer>
          </FormContainer>
        </Container>
      </CoContainer>
    </MainContainer>
  );
};

export default RegistrationPage;
