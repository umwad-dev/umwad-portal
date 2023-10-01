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

export const approvalStartup = async (startup) => {
  try {
    const { isApprove, uid } = startup;
    const ref = doc(db, "startup", uid);

    if (isApprove) {
      await updateDoc(ref, {
        disapproved: false,
        validated: true,
      });

      return {
        isSuccess: true,
        message: "Successfully approved the selected startup application.",
      };
    } else {
      await updateDoc(ref, {
        disapproved: true,
        validated: false,
      });

      return {
        isSuccess: true,
        message: "Successfully disapproved the selected startup application.",
      };
    }
  } catch (err) {
    return {
      isSuccess: false,
      message: "Something went wrong.",
    };
  }
};

export const createStartup = async (startupDetails) => {
  try {
    const { banner, logo, uid } = startupDetails;

    const docRef = doc(db, "startup", uid);
    const userRef = doc(db, "users", uid);
    const snapshot = await getDoc(docRef);

    if (snapshot.exists()) {
      return {
        isSuccess: false,
        message:
          "You have already registered a startup account using this account.",
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

    delete startupDetails.banner;
    delete startupDetails.logo;

    const newDetails = {
      bannerUrl,
      logoUrl,
      createdAt: serverTimestamp(),
      ...startupDetails,
    };

    await setDoc(doc(db, "startup", uid), newDetails);
    await updateDoc(userRef, {
      registered: true,
    });

    return {
      isSuccess: true,
      message:
        "Successfully registered your startup details. Please wait for the TBI Manager to validate and approve your application.",
    };
  } catch (err) {
    return {
      isSuccess: false,
      message: "Something went wrong.",
    };
  }
};

export const getAllStartup = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "startup"));
    const startups = [];
    let idx = 1;

    if (querySnapshot.empty) {
      return {
        startups,
        isSuccess: false,
        message: "No startup data.",
      };
    }

    querySnapshot.forEach((doc) => {
      const newDoc = {
        idx,
        uid: doc.id,
        ...doc.data(),
      };

      idx++;
      startups.push(newDoc);
    });

    return {
      startups,
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

export const uploadBanner = async (banner, userId) => {
  try {
    const bannerRef = ref(storage, `banner/${Date.now() + userId}`);
    const snapshot = await uploadBytes(bannerRef, banner);
    const url = await getDownloadURL(snapshot.ref);

    return url;
  } catch (err) {
    console.log(err);
  }
};

export const uploadLogo = async (logo, userId) => {
  try {
    const logoRef = ref(storage, `logo/${Date.now() + userId}`);
    const snapshot = await uploadBytes(logoRef, logo);
    const url = await getDownloadURL(snapshot.ref);

    return url;
  } catch (err) {
    console.log(err);
  }
};
