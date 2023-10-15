import { redirect } from "react-router-dom";
import useUserName from "../../Hooks/useUserName";
import useJsonApiFetch from "../../Hooks/useJsonApiFetch";
import { TUser } from "../../Model/TUser";
import JsonApiEndpoitsEnum from "../../Model/JsonApiEndpoitsEnum";
import { useState } from "react";

type Props = {};

const UserProfile = (props: Props) => {
  const userName = useUserName();
  if (!userName) redirect("/");

  const apiReponse = useJsonApiFetch<TUser>(
    JsonApiEndpoitsEnum.USERS,
    `username=${userName}`
  );
  if (apiReponse.length !== 1) redirect("/");

  const [useData] = useState(apiReponse[0]);
  console.log(useData, apiReponse[0]);

  return <div>Hello from {userName}</div>;
};

export default UserProfile;
