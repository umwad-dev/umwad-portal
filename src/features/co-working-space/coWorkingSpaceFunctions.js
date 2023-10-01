import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../firebase/firebase.config";

export const approvalCoWorkingSpace = async (data) => {
  try {
    const { isApprove, uid } = data;
    const ref = doc(db, "coWorkingSpace", uid);

    if (isApprove) {
      await updateDoc(ref, {
        disapproved: false,
        validated: true,
      });

      return {
        isSuccess: true,
        message:
          "Successfully approved the selected co-working space application.",
      };
    } else {
      await updateDoc(ref, {
        disapproved: true,
        validated: false,
      });

      return {
        isSuccess: true,
        message:
          "Successfully disapproved the selected co-working space application.",
      };
    }
  } catch (err) {
    return {
      isSuccess: false,
      message: "Something went wrong.",
    };
  }
};

// auth

export const createCoWorkingSpace = async (details) => {
  try {
    const { banner, logo, uid } = details;

    const docRef = doc(db, "coWorkingSpace", uid);
    const userRef = doc(db, "users", uid);
    const snapshot = await getDoc(docRef);

    if (snapshot.exists()) {
      return {
        isSuccess: false,
        message:
          "You have already registered a co-working space account using this account.",
      };
    }

    let bannerUrl;
    let logoUrl;

    if (banner === null) {
      bannerUrl = null;
    } else {
      bannerUrl = await uploadBanner(banner, uid);
    }

    if (logo === null) {
      logoUrl = null;
    } else {
      logoUrl = await uploadLogo(logo, uid);
    }

    delete details.banner;
    delete details.logo;

    const newDetails = {
      bannerUrl,
      logoUrl,
      createdAt: serverTimestamp(),
      ...details,
    };

    await setDoc(doc(db, "coWorkingSpace", uid), newDetails);
    await updateDoc(userRef, {
      registered: true,
    });

    return {
      isSuccess: true,
      message:
        "Successfully registered your co-working space details. Please wait for the administrator to validate and approve it.",
    };
  } catch (err) {
    return {
      isSuccess: false,
      message: "Something went wrong.",
    };
  }
};

export const getAllCoWorkingSpace = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "coWorkingSpace"));
    const coWorkingSpaces = [];
    let idx = 1;

    if (querySnapshot.empty) {
      return {
        coWorkingSpaces,
        isSuccess: false,
        message: "No co-working space data.",
      };
    }

    querySnapshot.forEach((doc) => {
      const newDoc = {
        idx,
        ...doc.data(),
      };

      idx++;
      coWorkingSpaces.push(newDoc);
    });

    return {
      coWorkingSpaces,
      isSuccess: true,
      message: "Successfully retrieved data.",
    };
  } catch (err) {
    return {
      isSuccess: false,
      message: "Something went wrong.",
    };
  }
};

export const uploadBanner = async (banner, uid) => {
  try {
    const bannerRef = ref(storage, `banner/${Date.now() + uid}`);
    const snapshot = await uploadBytes(bannerRef, banner);
    const url = await getDownloadURL(snapshot.ref);

    return url;
  } catch (err) {
    console.log(err);
  }
};

export const uploadLogo = async (logo, uid) => {
  try {
    const logoRef = ref(storage, `logo/${Date.now() + uid}`);
    const snapshot = await uploadBytes(logoRef, logo);
    const url = await getDownloadURL(snapshot.ref);

    return url;
  } catch (err) {
    console.log(err);
  }
};
