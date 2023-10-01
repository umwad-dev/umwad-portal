import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebase.config";
import { firebaseErrorMessage } from "./authErrorHandlers";

export const createUser = async (userInput) => {
  try {
    const { firstname, lastname, email, password, type } = userInput;
    const displayName = firstname + " " + lastname;

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;
    const validated = false;
    const registered = false;

    if (user) {
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        displayName,
        email,
        registered,
        type,
        validated,
        picture: null,
      });

      const userAuth = {
        uid: user.uid,
        displayName,
        email,
        registered,
        type,
        validated,
        picture: null,
      };

      return {
        auth: userAuth,
        isSuccess: true,
        message:
          "Your registration is successful. Redirecting you to your designated registration form.",
      };
    } else {
      return {
        auth: null,
        isSuccess: false,
        message: "Something went wrong.",
      };
    }
  } catch (err) {
    const errorMessage = firebaseErrorMessage(err.code);

    return {
      auth: null,
      isSuccess: false,
      message: errorMessage,
    };
  }
};

export const resetPasswordByEmail = async (email) => {
  try {
    const actionCodeSettings = {
      url: "https://umwad-portal.firebaseapp.com/login",
    };

    await sendPasswordResetEmail(auth, email, actionCodeSettings);

    return {
      isSuccess: true,
      message: "Reset password link has been successfully sent.",
    };
  } catch (err) {
    console.log(err);
    return {
      auth: null,
      isSuccess: false,
      message: "Something went wrong.",
    };
  }
};

export const signInUsingEmailAndPassword = async (userInput) => {
  try {
    const { email, password } = userInput;
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    const userRef = doc(db, "users", user.uid);

    if (user) {
      const snapshot = await getDoc(userRef);

      if (snapshot.exists) {
        const userAuth = snapshot.data();

        return {
          auth: userAuth,
          isSuccess: true,
          message: "Successfully logged in.",
        };
      } else {
        return {
          auth: null,
          isSuccess: false,
          message: "No user found.",
        };
      }
    } else {
      return {
        auth: null,
        isSuccess: false,
        message: "Something went wrong.",
      };
    }
  } catch (err) {
    const errorMessage = firebaseErrorMessage(err.code);

    return {
      auth: null,
      isSuccess: false,
      message: errorMessage,
    };
  }
};

export const signInUsingAdmin = async (userInput) => {
  try {
    const { email, password } = userInput;
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    const userRef = doc(db, "users", user.uid);

    if (user) {
      const snapshot = await getDoc(userRef);

      if (snapshot.exists) {
        const userAuth = snapshot.data();

        if (userAuth.type !== 9) {
          await signOut();

          return {
            auth: null,
            isSuccess: false,
            message: "Something went wrong.",
          };
        }

        return {
          auth: userAuth,
          isSuccess: true,
          message: "Successfully logged in.",
        };
      } else {
        return {
          auth: null,
          isSuccess: false,
          message: "No user found.",
        };
      }
    } else {
      return {
        auth: null,
        isSuccess: false,
        message: "Something went wrong.",
      };
    }
  } catch (err) {
    const errorMessage = firebaseErrorMessage(err.code);

    return {
      auth: null,
      isSuccess: false,
      message: errorMessage,
    };
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);

    return {
      auth: null,
      isSuccess: true,
      message: "You have successfully logged out.",
    };
  } catch (err) {
    return {
      isSuccess: false,
      message: "Something went wrong.",
    };
  }
};
