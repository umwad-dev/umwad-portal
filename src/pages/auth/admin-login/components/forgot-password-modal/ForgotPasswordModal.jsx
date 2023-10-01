import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "antd/es/modal";
import Input from "antd/es/input/Input";
import isEmail from "validator/lib/isEmail";
import { useNotification } from "../../../../../hooks";
import {
  resetAuthDispatchCounter,
  resetPasswordWithEmailAction,
} from "../../../../../features/auth/authSlice";

const ForgotPasswordModal = ({ onCancel, open }) => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const { dispatchCounter, isResetLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const { contextHolder, openNotification } = useNotification();

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

  const onOk = () => {
    if (email === "") {
      return openNotification({
        isSuccess: false,
        message: "Please enter your email.",
      });
    }

    if (!isEmail(email)) {
      return openNotification({
        isSuccess: false,
        message: "Your email is invalid.",
      });
    }

    dispatch(resetPasswordWithEmailAction(email));
  };

  return (
    <Fragment>
      {contextHolder}
      <Modal
        onCancel={onCancel}
        onOk={onOk}
        okButtonProps={{ loading: isResetLoading }}
        open={open}
        title="Forgot Password"
      >
        <p>
          We will send you a reset password link in your email to reset your
          password.
        </p>
        <Input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          value={email}
        />
      </Modal>
    </Fragment>
  );
};

export default ForgotPasswordModal;
