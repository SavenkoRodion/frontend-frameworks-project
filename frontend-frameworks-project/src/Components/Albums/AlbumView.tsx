import useURLParams from "../../Hooks/useURLParams";
import { useEffect, useState } from "react";
import { TUser } from "../../Model/TUser";
import jsonApiFetch from "../../Hooks/jsonApiFetch";
import JsonApiEndpointsEnum from "../../Model/JsonApiEndpointsEnum";
import { Grid } from "@mui/material";
import TPhoto from "../../Model/TPhoto";

const AlbumView = () => {
  const { userName, albumId } = useURLParams();
  const [photos, setPhotos] = useState<TPhoto[]>([]);
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

  useEffect(() => {
    jsonApiFetch<TPhoto>(
      JsonApiEndpointsEnum.PHOTOS,
      `albumId=${albumId}`,
      setPhotos
    );
  }, [userData, albumId]);

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {photos.length && photos.map((e, i) => (
        <Grid item key={i}>
          <a href={e.url} target="_blank" rel="noreferrer">
            <img src={e.thumbnailUrl} alt={e.title} />
          </a>
        </Grid>
      ))}
    </Grid>
  );

};

export default AlbumView;