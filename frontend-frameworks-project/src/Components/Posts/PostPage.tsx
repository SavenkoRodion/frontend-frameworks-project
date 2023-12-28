import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import jsonApiFetch from "../../Hooks/jsonApiFetch";
import JsonApiEndpointsEnum from "../../Model/JsonApiEndpointsEnum";
import TPost from "../../Model/TPost";
import TComment from "../../Model/TComments";
import { Box, CircularProgress, Link, Typography } from "@mui/material";
import { TUser } from "../../Model/TUser";
import Post from "./Post";

const PostPage = () => {
  const { postId } = useParams();
  const [postData, setPostData] = useState<TPost[]>([]);
  const [post, setPost] = useState<TPost>();
  const [comments, setComments] = useState<TComment[]>([]);
  const [userData, setUserData] = useState<TUser[]>([]);
  const [user, setUser] = useState<TUser>();

  useEffect(() => {
    jsonApiFetch(JsonApiEndpointsEnum.POSTS, `id=${postId}`, setPostData);
  }, [postId]);

  useEffect(() => {
    setPost(postData[0]);
    jsonApiFetch(JsonApiEndpointsEnum.USERS, `id=${post?.userId}`, setUserData);
  }, [postData, post]);

  useEffect(() => {
    setUser(userData[0]);
  }, [userData]);

  useEffect(() => {
    jsonApiFetch(
      JsonApiEndpointsEnum.COMMENTS,
      `postId=${postId}`,
      setComments
    );
  }, [postId]);

  return (
    <>
      {post && user?.name && comments.length ? (
        <Post
          post={post!}
          userName={user!.username}
          commentsCount={comments.length}
        >
          <Box>
            {comments.length &&
              comments.map((e, i) => (
                <Box
                  sx={{
                    padding: "10px 0 10px",
                    margin: "5px 0 5px",
                    borderTop: "1px solid black",
                  }}
                  key={i}
                >
                  <Typography>Commented by: {e.email}</Typography>
                  <Typography variant="h5">{e.name}</Typography>
                  <Typography>{e.body}</Typography>
                </Box>
              ))}
          </Box>
        </Post>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default PostPage;
