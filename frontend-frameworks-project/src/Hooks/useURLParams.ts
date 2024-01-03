import { useParams } from "react-router-dom";

const useURLParams = () => {
  const { userName, albumId } = useParams();

  return { userName, albumId };
};

export default useURLParams;
