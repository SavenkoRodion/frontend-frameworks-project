import { useParams } from "react-router-dom";

const useUserName = (): string => {
  const { userName } = useParams();

  return userName as string;
};

export default useUserName;
