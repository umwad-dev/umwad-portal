import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useGetTBIDetails = () => {
  const [tbi, setTbi] = useState(null);

  const { auth } = useSelector((state) => state.auth);
  const { tbis } = useSelector((state) => state.tbi);

  useEffect(() => {
    if (tbis.length > 0) {
      const filteredTBI = tbis.filter((tbi) => tbi.uid === auth.uid);

      setTbi(filteredTBI[0]);
    }
  }, [auth, tbis]);

  return {
    tbi,
  };
};

export default useGetTBIDetails;
