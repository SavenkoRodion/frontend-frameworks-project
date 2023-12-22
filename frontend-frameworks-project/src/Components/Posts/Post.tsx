import TPost from "../../Model/TPost";
import TComment from "../../Model/TComments";
import { Box, Link, Typography } from "@mui/material";

type PostProps = {
  post: TPost;
  userName: string;
  comments?: TComment[];
  isExpanded?: boolean;
};

const Post = ({ post, userName, comments, isExpanded = false }: PostProps) => {
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
      <Typography>body: {post.body}</Typography>
      {isExpanded && (
        <Box>
          Post comments:
          <br />
          <br />
          {comments?.length &&
            comments?.map((e) => (
              <>
                <span style={{ display: "block" }}>
                  Comment Author: {e.email}
                  <br />
                  {e.body}
                </span>
                <br />
                <br />
              </>
            ))}
        </Box>
      )}
    </Box>
  );
};

export default Post;
