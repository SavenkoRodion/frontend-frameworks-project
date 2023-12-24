import { useEffect, useState } from "react";
import Album from "./Album";
import jsonApiFetch from "../../Hooks/jsonApiFetch";
import JsonApiEndpointsEnum from "../../Model/JsonApiEndpointsEnum";
import { TUser } from "../../Model/TUser";
import useURLParams from "../../Hooks/useURLParams";
import TAlbums from "../../Model/TAlbums";
import { Box, CircularProgress } from "@mui/material";

const Albums = () => {
  const { userName } = useURLParams();
  const [albums, setAlbums] = useState<TAlbums[]>([]);
  const [data, setData] = useState<TUser[]>([]);
  const [userData, setUserData] = useState<TUser>();

  useEffect(() => {
    console.log(userName);
    jsonApiFetch<TUser>(
      JsonApiEndpointsEnum.USERS,
      `username=${userName}`,
      setData
    );
  }, [userName]);

  useEffect(() => {
    setUserData(data[0]);
  }, [data]);

  useEffect(() => {
    jsonApiFetch<TAlbums>(
      JsonApiEndpointsEnum.ALBUMS,
      `userId=${userData?.id}`,
      setAlbums
    );
  }, [userData]);

  return (
    <Box
      sx={!albums.length ? { display: "flex", justifyContent: "center" } : {}}
    >
      {albums.length ? (
        albums.map((e, i) => <Album key={i} title={e.title} albumId={e.id} />)
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default Albums;
