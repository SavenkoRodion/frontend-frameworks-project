import TPost from "../../types/TPost";

type PostProps = {
  post: TPost;
};

const Post = ({ post }: PostProps) => {
  return (
    <div style={{ border: "1px solid black" }}>
      title: {post.title} <br />
      body: {post.body}
    </div>
  );
};

export default Post;
