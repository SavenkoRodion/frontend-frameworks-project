import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import jsonApiFetch from "../../Hooks/jsonApiFetch";
import JsonApiEndpointsEnum from "../../Model/JsonApiEndpointsEnum";
import TPost from "../../Model/TPost";
import TComment from "../../Model/TComments";
import { Box, CircularProgress, Typography } from "@mui/material";
import { TUser } from "../../Model/TUser";
import Post from "./Post";
import jsonApiFetchFirst from "../../Hooks/jsonApiFetchFirst";

const PostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<TPost | null>(null);
  const [comments, setComments] = useState<TComment[]>([]);
  const [user, setUser] = useState<TUser | null>(null);

  useEffect(() => {
    jsonApiFetchFirst<TPost | null>(
      JsonApiEndpointsEnum.POSTS,
      `id=${postId}`,
      setPost
    );
  }, [postId]);

  useEffect(() => {
    if (post) {
      jsonApiFetchFirst<TUser | null>(
        JsonApiEndpointsEnum.USERS,
        `id=${post.userId}`,
        setUser
      );
    }
  }, [post]);

  useEffect(() => {
    jsonApiFetch<TComment>(
      JsonApiEndpointsEnum.COMMENTS,
      `postId=${postId}`,
      setComments
    );
  }, [postId]);

  return (
    <>
      {post && user?.name && comments.length ? (
        <Post
          post={post}
          userName={user.username}
          commentsCount={comments.length}
        >
          <Box>
            {comments.length &&
              comments.map((comment: TComment, i: number) => (
                <Box
                  sx={{
                    padding: "10px 0 10px",
                    margin: "5px 0 5px",
                    borderTop: "1px solid black",
                  }}
                  key={i}
                >
                  <Typography>Commented by: {comment.email}</Typography>
                  <Typography variant="h5">{comment.name}</Typography>
                  <Typography>{comment.body}</Typography>
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
