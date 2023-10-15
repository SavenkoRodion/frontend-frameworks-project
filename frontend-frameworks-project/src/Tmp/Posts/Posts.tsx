import TPost from "../../Model/TPost";
import JsonApiEndpoitsEnum from "../../Model/JsonApiEndpoitsEnum";
import useJsonApiFetch from "../../Hooks/useJsonApiFetch";
import Post from "./Post";
import { TUser } from "../../Model/TUser";

const Posts = () => {
  const posts = useJsonApiFetch<TPost>(JsonApiEndpoitsEnum.POSTS);
  const users = useJsonApiFetch<TUser>(JsonApiEndpoitsEnum.USERS);

  return (
    <>
      <br />
      Hello from Posts page
      {posts.length &&
        posts.map((e) => (
          <Post
            post={e}
            userName={users.find((lol) => lol.id === e.userId)?.username!}
          />
        ))}
    </>
  );
};

export default Posts;
