import TPost from "../../Model/TPost";
import JsonApiEndpoitsEnum from "../../Model/JsonApiEndpoitsEnum";
import jsonApiFetch from "../../Hooks/jsonApiFetch";
import Post from "./Post";
import { TUser } from "../../Model/TUser";
import TComment from "../../Model/TComments";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

const Posts = () => {
  const [posts, setPosts] = useState<TPost[]>([]);
  const [users, setUsers] = useState<TUser[]>([]);
  const [comments, setComments] = useState<TComment[]>([]);

  useEffect(() => {
    jsonApiFetch<TPost>(JsonApiEndpoitsEnum.POSTS, "", setPosts);
    jsonApiFetch<TUser>(JsonApiEndpoitsEnum.USERS, "", setUsers);
    jsonApiFetch<TComment>(JsonApiEndpoitsEnum.COMMENTS, "", setComments);
  }, []);

  return (
    <Box
      sx={{
        maxWidth: "960px",
        display: "flex",
        flexDirection: "column",
        justifySelf: "center",
      }}
    >
      {posts.length &&
        posts.map((e) => (
          <Post
            post={e}
            userName={users.find((user) => user.id === e.userId)?.username!}
            comments={comments.filter((comment) => comment.postId === e.id)}
          />
        ))}
    </Box>
  );
};

export default Posts;
