import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTBIAction } from "../features/tbi/tbiSlice";

const useCheckRegisteredTBI = (userId) => {
  const [tbiExists, setTbiExists] = useState(false);
  const { tbis } = useSelector((state) => state.tbi);
  const dispatch = useDispatch();

  useEffect(() => {
    if (tbis.length > 0) {
      return;
    } else {
      dispatch(getAllTBIAction());
    }
  }, [dispatch, tbis]);

  useEffect(() => {
    const checkIfExists = tbis?.filter((tbi) => tbi.userId === userId);

    if (checkIfExists.length > 0) {
      setTbiExists(true);
    } else {
      setTbiExists(false);
    }
  }, [tbis, userId]);

  return {
    tbiExists,
  };
};

export default useCheckRegisteredTBI;
