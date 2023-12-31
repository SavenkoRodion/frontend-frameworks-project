import { useOutletContext } from "react-router-dom";
import { TUser } from "../../Model/TUser";
import JsonApiEndpointsEnum from "../../Model/JsonApiEndpointsEnum";
import { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import jsonApiFetchFirst from "../../Hooks/jsonApiFetchFirst";

const UserProfile = () => {
  const userName: string = useOutletContext();

  const [userData, setUserData] = useState<TUser | null>(null);

  useEffect(() => {
    jsonApiFetchFirst<TUser | null>(
      JsonApiEndpointsEnum.USERS,
      `username=${userName}`,
      setUserData
    );
  }, [userName]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      id="user-info-wrapper"
    >
      {userData ? (
        <>
          <Typography variant="h5">Name: {userData.name}</Typography>
          <Typography>Email: {userData.email}</Typography>
          <Typography variant="h6">Address</Typography>
          <Typography>Street: {userData.address.street}</Typography>
          <Typography>Suite: {userData.address.suite}</Typography>
          <Typography>City: {userData.address.city}</Typography>
          <Typography>Zip Code: {userData.address.zipcode}</Typography>
          <br />
          <Typography>Phone: {userData.phone}</Typography>
          <Typography>Company name: {userData.company.name}</Typography>
        </>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default UserProfile;
