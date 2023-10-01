export const firebaseErrorMessage = (errorCode) => {
  if (errorCode === "auth/email-already-in-use") {
    return "This email is already in use.";
  } else if (errorCode === "auth/wrong-password") {
    return "Your password is incorrect, please try again.";
  } else {
    return "Something went wrong. Please try again.";
  }
};
