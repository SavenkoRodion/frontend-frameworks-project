import { Link } from "react-router-dom";
import TPost from "../../Model/TPost";
import TComment from "../../Model/TComments";

type PostProps = {
  post: TPost;
  userName: string;
  comments: TComment[] | undefined; 
};

const Post = ({ post, userName, comments }: PostProps) => {
  console.log(comments)
  return (
    <div style={{ border: "1px solid black" }}>
      <br />
      Author: <Link to={`/${userName}`}>{userName}</Link>
      <br />
      title: {post.title}
      <br />
      body: {post.body}
      <br />
      <br />
      <div style={{ border: "1px solid black" }}>
        {comments?.length ?? comments?.map((e)=><span style={{ border: "1px solid black" }}>{e.body}</span>)}
      </div>
    </div>
  );
};

export default Post;
