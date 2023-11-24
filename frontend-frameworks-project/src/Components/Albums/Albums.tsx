import { useEffect, useState } from "react";
import Album from "./Album";
import jsonApiFetch from "../../Hooks/jsonApiFetch";
import JsonApiEndpoitsEnum from "../../Model/JsonApiEndpoitsEnum";
import { TUser } from "../../Model/TUser";
import useUserName from "../../Hooks/useUserName";
import TAlbums from "../../Model/TAlbums";

const Albums = () => {
  const userName = useUserName();
  const [albums, setAlbums] = useState<TAlbums[]>([]);
  const [data, setData] = useState<TUser[]>([]);
  const [userData, setUserData] = useState<TUser>();

  useEffect(() => {
    jsonApiFetch<TUser>(
      JsonApiEndpoitsEnum.USERS,
      `username=${userName}`,
      setData
    );
  }, [userName]);

  useEffect(() => {
    setUserData(data[0]);
  }, [data]);

  useEffect(() => {
    jsonApiFetch<TAlbums>(
      JsonApiEndpoitsEnum.ALBUMS,
      `userId=${userData?.id}`,
      setAlbums
    );
  }, [userData]);

  return (
    <>
      {albums.length && albums.map((e, i) => <Album key={i} title={e.title} />)}
    </>
  );
};

export default Albums;
