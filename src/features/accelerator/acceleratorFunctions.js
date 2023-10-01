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

export const approvalAccelerator = async (data) => {
  try {
    const { isApprove, uid } = data;
    const ref = doc(db, "accelerator", uid);

    if (isApprove) {
      await updateDoc(ref, {
        disapproved: false,
        validated: true,
      });

      return {
        isSuccess: true,
        message: "Successfully approved the selected accelerator application.",
      };
    } else {
      await updateDoc(ref, {
        disapproved: true,
        validated: false,
      });

      return {
        isSuccess: true,
        message:
          "Successfully disapproved the selected accelerator application.",
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

export const createAccelerator = async (details) => {
  try {
    const { banner, logo, uid } = details;

    const docRef = doc(db, "accelerator", uid);
    const userRef = doc(db, "users", uid);
    const snapshot = await getDoc(docRef);

    if (snapshot.exists()) {
      return {
        isSuccess: false,
        message:
          "You have already registered an accelerator account using this account.",
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

    await setDoc(doc(db, "accelerator", uid), newDetails);
    await updateDoc(userRef, {
      registered: true,
    });

    return {
      isSuccess: true,
      message:
        "Successfully registered your accelerator details. Please wait for the administrator to validate and approve it.",
    };
  } catch (err) {
    return {
      isSuccess: false,
      message: "Something went wrong.",
    };
  }
};

export const getAllAccelerator = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "accelerator"));
    const accelerators = [];
    let idx = 1;

    if (querySnapshot.empty) {
      return {
        accelerators,
        isSuccess: false,
        message: "No accelerator data.",
      };
    }

    querySnapshot.forEach((doc) => {
      const newDoc = {
        idx,
        ...doc.data(),
      };

      idx++;
      accelerators.push(newDoc);
    });

    return {
      accelerators,
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
