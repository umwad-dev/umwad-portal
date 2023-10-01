import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useWindowWidth } from "@react-hook/window-size";
import { Input, Navbar, PrimaryButton, Spinner } from "../../../components";
import {
  Checkbox,
  CheckboxContainer,
  CheckboxLabel,
  CoContainer,
  Container,
  ForgotPassword,
  FormContainer,
  LoginButtonContainer,
  LoginContainer,
  MainContainer,
  RegisterHereSpan,
  RegisterHereText,
  RememberMeContainer,
  SideBgContainer,
  SideSubtitle,
  SideTitle,
  Title,
} from "./AdminLogin.styles";
import { goToRegistrationPage } from "../../../utils/redirections";
import {
  resetAuthDispatchCounter,
  signInUsingAdminAction,
} from "../../../features/auth/authSlice";
import { useNotification } from "../../../hooks";
import { ForgotPasswordModal } from "./components";

const AdminLoginPage = () => {
  const [color, setColor] = useState("black");
  const [email, setEmail] = useState();
  const [isChecked, setIsChecked] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  const { dispatchCounter, isLoginLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const width = useWindowWidth();
  const navigate = useNavigate();

  const { contextHolder, openNotification } = useNotification();

  useEffect(() => {
    if (width >= 768) {
      setColor("white");
    } else {
      setColor("black");
    }
  }, [width]);

  useEffect(() => {
    if (localStorage.isChecked && localStorage.email !== "") {
      setEmail(localStorage.email);
      setPassword(localStorage.password);
      setIsChecked(localStorage.isChecked);
    }
  }, []);

  useEffect(() => {
    if (dispatchCounter === 0) {
      return;
    } else {
      openNotification({
        isSuccess,
        message,
      });
    }
  }, [dispatchCounter, isSuccess, message, navigate, openNotification]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(resetAuthDispatchCounter());
      navigate("/super-admin");
    }
  }, [dispatch, isSuccess, navigate]);

  const onSubmit = (e) => {
    e.preventDefault();

    const userInput = {
      email,
      password,
    };

    if (isChecked) {
      localStorage.email = email;
      localStorage.password = password;
    } else {
      localStorage.email = "";
      localStorage.password = "";
    }

    dispatch(signInUsingAdminAction(userInput));
  };

  // const signInWithGoogle = () => {
  //   dispatch(signInUsingGoogleAction());
  // };

  const onRememberCheck = (checked) => {
    if (!checked) {
      localStorage.isChecked = false;
    } else {
      localStorage.isChecked = true;
    }

    setIsChecked(checked);
  };

  const showForgotPasswordModal = () => {
    setIsForgotPasswordOpen(true);
  };

  const onCancel = () => {
    setIsForgotPasswordOpen(false);
  };

  return (
    <MainContainer>
      {contextHolder}
      <Navbar color={color} />
      <CoContainer>
        <Container>
          <SideBgContainer>
            <SideSubtitle>Startup</SideSubtitle>
            <SideTitle>Western Visayas</SideTitle>
          </SideBgContainer>
          <LoginContainer>
            <Title>Login to your Admin Account</Title>
            {/* <ButtonContainer>
            {isGoogleLoginLoading ? (
              <Spinner />
            ) : (
              <SocialButton
                icon={GoogleIcon}
                name="Login with Google"
                onClick={signInWithGoogle}
              />
            )}
          </ButtonContainer>
          <HorizontalContainer>
            <HorizontalLine />
            <HorizontalText>or Login with Email & Password</HorizontalText>
            <HorizontalLine />
          </HorizontalContainer> */}
            <FormContainer onSubmit={onSubmit}>
              <Input
                labelName="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                value={email}
              />
              <Input
                labelName="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                value={password}
              />
              <RememberMeContainer>
                <CheckboxContainer>
                  <Checkbox
                    checked={isChecked}
                    name="remember"
                    type="checkbox"
                    onChange={(e) => onRememberCheck(e.target.checked)}
                  />
                  <CheckboxLabel htmlFor="remember">Remember Me</CheckboxLabel>
                </CheckboxContainer>
                <ForgotPassword onClick={showForgotPasswordModal}>
                  Forgot Password?
                </ForgotPassword>
              </RememberMeContainer>
              <LoginButtonContainer>
                {isLoginLoading ? (
                  <Spinner />
                ) : (
                  <PrimaryButton fontWeight={700} name="Login" type="submit" />
                )}
              </LoginButtonContainer>
            </FormContainer>
            <RegisterHereText>
              Not registered yet?{" "}
              <RegisterHereSpan onClick={goToRegistrationPage}>
                Register here.
              </RegisterHereSpan>
            </RegisterHereText>
          </LoginContainer>
          <ForgotPasswordModal
            onCancel={onCancel}
            open={isForgotPasswordOpen}
          />
        </Container>
      </CoContainer>
    </MainContainer>
  );
};

export default AdminLoginPage;
