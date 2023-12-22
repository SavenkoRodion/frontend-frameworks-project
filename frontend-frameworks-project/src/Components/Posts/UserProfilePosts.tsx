import React, { useEffect, useState } from "react";
import useUserName from "../../Hooks/useUserName";
import jsonApiFetch from "../../Hooks/jsonApiFetch";
import JsonApiEndpointsEnum from "../../Model/JsonApiEndpointsEnum";
import TPost from "../../Model/TPost";
import { TUser } from "../../Model/TUser";
import Post from "./Post";
import { CircularProgress } from "@mui/material";

const UserProfilePosts = () => {
  const userName = useUserName();
  const [userPosts, setUserPosts] = useState<TPost[]>([]);
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
    jsonApiFetch<TPost>(
      JsonApiEndpointsEnum.POSTS,
      `userId=${userData?.id}`,
      setUserPosts
    );
  }, [userData]);

  useEffect(() => {
    jsonApiFetch<TPost>(JsonApiEndpointsEnum.POSTS, "", setUserPosts);
  }, []);

  return (
    <>
      {userPosts.length ? (
        userPosts.map((e) => <Post post={e} userName={userName!} />)
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default UserProfilePosts;
