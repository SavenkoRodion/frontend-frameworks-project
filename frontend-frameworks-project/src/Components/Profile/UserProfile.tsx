import { useOutletContext } from "react-router-dom";
import jsonApiFetch from "../../Hooks/jsonApiFetch";
import { TUser } from "../../Model/TUser";
import JsonApiEndpointsEnum from "../../Model/JsonApiEndpointsEnum";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

const UserProfile = () => {
  const userName: string = useOutletContext();

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
    console.log(data);
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
