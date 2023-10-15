import { useMatch } from "react-router-dom";

const useUserName = () => {
  const match = useMatch("/:userName");

  return match?.params.userName;
};

export default useUserName;
