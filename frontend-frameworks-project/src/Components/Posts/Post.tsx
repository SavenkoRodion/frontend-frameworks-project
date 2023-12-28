import TPost from "../../Model/TPost";
import { Box, Link, Typography } from "@mui/material";

type PostProps = {
  post: TPost;
  userName: string;
  commentsCount: number;
  children?: JSX.Element;
};

const Post = ({ post, userName, commentsCount, children }: PostProps) => {
  return (
    <Box
      sx={{
        border: "1px solid black",
        borderRadius: "5px",
        marginBottom: "30px",
        padding: "20px",
      }}
    >
      <Typography>
        Posted by <Link href={`/User/${userName}`}>{userName}</Link>
      </Typography>
      <Typography component="h2" variant="h4">
        {post.title}
      </Typography>
      <Typography>{post.body}</Typography>
      <Typography sx={{ marginTop: "10px" }}>
        This post has{" "}
        <Link href={`/post/${post.id}`}>{commentsCount} comments</Link>
      </Typography>
      {children}
    </Box>
  );
};

export default Post;
