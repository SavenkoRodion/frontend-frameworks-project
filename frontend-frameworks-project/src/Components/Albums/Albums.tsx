import { useEffect, useState } from "react";
import Album from "./Album";
import jsonApiFetch from "../../Hooks/jsonApiFetch";
import JsonApiEndpointsEnum from "../../Model/JsonApiEndpointsEnum";
import { TUser } from "../../Model/TUser";
import TAlbums from "../../Model/TAlbums";
import { Box, CircularProgress } from "@mui/material";
import useUserName from "../../Hooks/useUserName";
import jsonApiFetchFirst from "../../Hooks/jsonApiFetchFirst";

const Albums = () => {
  const userName = useUserName();
  const [albums, setAlbums] = useState<TAlbums[]>([]);
  const [userData, setUserData] = useState<TUser | null>(null);

  useEffect(() => {
    jsonApiFetchFirst<TUser | null>(
      JsonApiEndpointsEnum.USERS,
      `username=${userName}`,
      setUserData
    );
  }, [userName]);

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
        albums.map((album: TAlbums, i: number) => (
          <Album key={i} title={album.title} albumId={album.id} />
        ))
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default Albums;
