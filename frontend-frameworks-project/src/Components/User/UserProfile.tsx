import { redirect } from "react-router-dom";
import useURLParams from "../../Hooks/useURLParams";
import jsonApiFetch from "../../Hooks/jsonApiFetch";
import { TUser } from "../../Model/TUser";
import JsonApiEndpointsEnum from "../../Model/JsonApiEndpointsEnum";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

type Props = {};

const UserProfile = (props: Props) => {
  const { userName } = useURLParams();
  if (!userName) redirect("/");

  const [data, setData] = useState<TUser[]>([]);
  const [userData, setUserData] = useState<TUser>();

  useEffect(() => {
    jsonApiFetch<TUser>(
      JsonApiEndpointsEnum.USERS,
      `username=${userName}`,
      setData
    );
  }, [userName]);

  useEffect(() => {
    setUserData(data[0]);
  }, [data]);

  return (
    <>
      <Typography>Name: {userData?.name}</Typography>
      <Typography>Email: {userData?.email}</Typography>
      <Typography>City: {userData?.address.city}</Typography>
    </>
  );
};

export default UserProfile;
