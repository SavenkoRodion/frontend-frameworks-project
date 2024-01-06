import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import jsonApiFetch from "../../Hooks/jsonApiFetch";
import JsonApiEndpointsEnum from "../../Model/JsonApiEndpointsEnum";
import TPost from "../../Model/TPost";
import TComment from "../../Model/TComments";
import { Box, CircularProgress, Link, Typography } from "@mui/material";
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
    <Box
      sx={{
        border: "1px solid black",
        borderRadius: "5px",
        marginBottom: "30px",
        padding: "20px",
      }}
    >
      <Box>
        <Typography>
          Posted by{" "}
          <Link href={`/User/${user?.username}`}>{user?.username}</Link>
        </Typography>
        <Typography component="h2" variant="h4">
          {post?.title}
        </Typography>
        <Typography>body: {post?.body}</Typography>
        <Typography sx={{ marginTop: "10px" }}>
          This post has{" "}
          <Link href={`/post/${post?.id}`}>{comments!.length} comments</Link>
        </Typography>
      </Box>

      <Box>
        {comments.length &&
          comments.map((e) => (
            <Box
              sx={{
                padding: "10px 0 10px",
                margin: "5px 0 5px",
                borderTop: "1px solid black",
              }}
            >
              <Typography>Commented by: {e.email}</Typography>
              <Typography variant="h5">{e.name}</Typography>
              <Typography>{e.body}</Typography>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default PostPage;
