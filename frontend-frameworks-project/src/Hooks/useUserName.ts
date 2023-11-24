import { useParams } from "react-router-dom";

const useUserName = () => {
  const { userName } = useParams();

  return userName;
};

export default useUserName;
