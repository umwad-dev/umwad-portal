import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStartupAction } from "../features/startup/startupSlice";

const useCheckRegisteredStartup = (userId) => {
  const [startupExists, setStartupExists] = useState(false);
  const { startups } = useSelector((state) => state.startup);
  const dispatch = useDispatch();

  useEffect(() => {
    if (startups.length > 0) {
      return;
    } else {
      dispatch(getAllStartupAction());
    }
  }, [dispatch, startups]);

  useEffect(() => {
    const checkIfExists = startups?.filter((tbi) => tbi.userId === userId);

    if (checkIfExists.length > 0) {
      setStartupExists(true);
    } else {
      setStartupExists(false);
    }
  }, [startups, userId]);

  return {
    startupExists,
  };
};

export default useCheckRegisteredStartup;
