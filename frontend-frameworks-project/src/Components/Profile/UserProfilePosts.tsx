import { useEffect, useState } from "react";
import jsonApiFetch from "../../Hooks/jsonApiFetch";
import JsonApiEndpointsEnum from "../../Model/JsonApiEndpointsEnum";
import TPost from "../../Model/TPost";
import { TUser } from "../../Model/TUser";
import Post from "../Posts/Post";
import { Box, CircularProgress } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import TComment from "../../Model/TComments";

const UserProfilePosts = () => {
  const userName: string = useOutletContext();
  const [userPosts, setUserPosts] = useState<TPost[]>([]);
  const [data, setData] = useState<TUser[]>([]);
  const [userData, setUserData] = useState<TUser>();
  const [comments, setComments] = useState<TComment[]>([]);

  useEffect(() => {
    jsonApiFetch<TUser>(
      JsonApiEndpointsEnum.USERS,
      `username=${userName}`,
      setData
    );
    console.log(userName);
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
    jsonApiFetch<TComment>(JsonApiEndpointsEnum.COMMENTS, "", setComments);
  }, []);

  return (
    <Box
      sx={
        !userPosts.length ? { display: "flex", justifyContent: "center" } : {}
      }
    >
      {userPosts.length ? (
        userPosts.map((e, i) => (
          <Post
            key={i}
            post={e}
            userName={userName}
            commentsCount={comments.filter((c) => c.postId === e.id).length}
          />
        ))
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default UserProfilePosts;
