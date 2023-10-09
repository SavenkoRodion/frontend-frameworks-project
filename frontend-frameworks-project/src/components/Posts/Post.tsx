import TPost from "../../Model/TPost";

type PostProps = {
  post: TPost;
};

const Post = ({ post }: PostProps) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <br />
      user id: {post.userId}
      <br />
      post id: {post.id}
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
