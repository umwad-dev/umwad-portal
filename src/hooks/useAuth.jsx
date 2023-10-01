import { useSelector } from "react-redux";

const useAuth = () => {
  const { auth } = useSelector((state) => state.auth);

  return {
    currentUser: auth,
  };
};

export default useAuth;
