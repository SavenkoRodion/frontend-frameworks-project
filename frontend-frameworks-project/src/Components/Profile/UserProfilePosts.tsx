import { useEffect, useState } from "react";
import jsonApiFetch from "../../Hooks/jsonApiFetch";
import JsonApiEndpointsEnum from "../../Model/JsonApiEndpointsEnum";
import TPost from "../../Model/TPost";
import { TUser } from "../../Model/TUser";
import Post from "../Posts/Post";
import { Box, CircularProgress } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import TComment from "../../Model/TComments";
import jsonApiFetchFirst from "../../Hooks/jsonApiFetchFirst";

const UserProfilePosts = () => {
  const userName: string = useOutletContext();
  const [userPosts, setUserPosts] = useState<TPost[]>([]);
  const [userData, setUserData] = useState<TUser | null>(null);
  const [comments, setComments] = useState<TComment[]>([]);

  useEffect(() => {
    jsonApiFetchFirst<TUser | null>(
      JsonApiEndpointsEnum.USERS,
      `username=${userName}`,
      setUserData
    );
  }, [userName]);

  useEffect(() => {
    if (userData) {
      jsonApiFetch<TPost>(
        JsonApiEndpointsEnum.POSTS,
        `userId=${userData.id}`,
        setUserPosts
      );
    } else {
      setUserPosts([]);
    }
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
        userPosts.map((userPost: TPost, i: number) => (
          <Post
            key={i}
            post={userPost}
            userName={userName}
            commentsCount={
              comments.filter(
                (comment: TComment) => comment.postId === userPost.id
              ).length
            }
          />
        ))
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default UserProfilePosts;
