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

export const approvalTBI = async (tbi) => {
  try {
    const { isApprove, uid } = tbi;
    const tbiRef = doc(db, "tbi", uid);

    if (isApprove) {
      await updateDoc(tbiRef, {
        disapproved: false,
        validated: true,
      });

      return {
        isSuccess: true,
        message: "Successfully approved the selected TBI application.",
      };
    } else {
      await updateDoc(tbiRef, {
        disapproved: true,
        validated: false,
      });

      return {
        isSuccess: true,
        message: "Successfully disapproved the selected TBI application.",
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

export const createTBI = async (tbiDetails) => {
  try {
    const { banner, logo, uid } = tbiDetails;

    const docRef = doc(db, "tbi", uid);
    const userRef = doc(db, "users", uid);
    const snapshot = await getDoc(docRef);

    if (snapshot.exists()) {
      return {
        isSuccess: false,
        message:
          "You have already registered a TBI account using this account.",
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

    delete tbiDetails.banner;
    delete tbiDetails.logo;

    const newTBIDetails = {
      bannerUrl,
      logoUrl,
      createdAt: serverTimestamp(),
      ...tbiDetails,
    };

    await setDoc(doc(db, "tbi", uid), newTBIDetails);
    await updateDoc(userRef, {
      registered: true,
    });

    return {
      isSuccess: true,
      message:
        "Successfully registered your TBI details. Please wait for the administrator to validate and approve it.",
    };
  } catch (err) {
    return {
      isSuccess: false,
      message: "Something went wrong.",
    };
  }
};

export const getAllTBI = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "tbi"));
    const tbis = [];
    let idx = 1;

    if (querySnapshot.empty) {
      return {
        tbis,
        isSuccess: false,
        message: "No TBI data.",
      };
    }

    querySnapshot.forEach((doc) => {
      const newDoc = {
        idx,
        ...doc.data(),
      };

      idx++;
      tbis.push(newDoc);
    });

    return {
      tbis,
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
