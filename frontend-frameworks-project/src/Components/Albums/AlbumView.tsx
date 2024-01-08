import useURLParams from "../../Hooks/useURLParams";
import { useEffect, useState } from "react";
import { TUser } from "../../Model/TUser";
import jsonApiFetch from "../../Hooks/jsonApiFetch";
import JsonApiEndpointsEnum from "../../Model/JsonApiEndpointsEnum";
import { Grid, Link } from "@mui/material";
import TPhoto from "../../Model/TPhoto";
import jsonApiFetchFirst from "../../Hooks/jsonApiFetchFirst";

const AlbumView = () => {
  const { userName, albumId } = useURLParams();
  const [photos, setPhotos] = useState<TPhoto[]>([]);
  const [userData, setUserData] = useState<TUser | null>(null);

  useEffect(() => {
    jsonApiFetchFirst<TUser | null>(
      JsonApiEndpointsEnum.USERS,
      `username=${userName}`,
      setUserData
    );
  }, [userName]);

  useEffect(() => {
    jsonApiFetch<TPhoto>(
      JsonApiEndpointsEnum.PHOTOS,
      `albumId=${albumId}`,
      setPhotos
    );
  }, [userData, albumId]);

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {photos.length &&
        photos.map((photo: TPhoto, i: number) => (
          <Grid item key={i}>
            <Link href={photo.url} target="_blank" rel="noreferrer">
              <img src={photo.thumbnailUrl} alt={photo.title} />
            </Link>
          </Grid>
        ))}
    </Grid>
  );
};

export default AlbumView;
