import TPost from "../../Model/TPost";
import JsonApiEndpoitsEnum from "../../Model/JsonApiEndpoitsEnum";
import useJsonApiFetch from "../../Hooks/useJsonApiFetch";
import Post from "./Post";
import { TUser } from "../../Model/TUser";
import TComment from "../../Model/TComments";

const Posts = () => {
  const posts = useJsonApiFetch<TPost>(JsonApiEndpoitsEnum.POSTS);
  const users = useJsonApiFetch<TUser>(JsonApiEndpoitsEnum.USERS);
  const comments = useJsonApiFetch<TComment>(JsonApiEndpoitsEnum.COMMENTS);

  return (
    <>
      <br />
      Hello from Posts page
      {posts.length &&
        posts.map((e) => (
          <Post
            post={e}
            userName={users.find((user) => user.id === e.userId)?.username!}
            comments={comments.filter((comment) => comment.postId === e.id)}
          />
        ))}
    </>
  );
};

export default Posts;
