import TPost from "../../Model/TPost";

type PostProps = {
  post: TPost;
  userName: string;
};

const Post = ({ post, userName }: PostProps) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <br />
      userName: {userName}
      <br />
      title: {post.title}
      <br />
      body: {post.body}
      <br />
      <br />
    </div>
  );
};

export default Post;
