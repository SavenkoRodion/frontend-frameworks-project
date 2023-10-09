import TPost from "../../Model/TPost";
import JsonApiEndpoitsEnum from "../../Model/JsonApiEndpoitsEnum";
import useJsonApiFetch from "../../Hooks/useJsonApiFetch";
import Post from "./Post";

const Posts = () => {
  const posts = useJsonApiFetch<TPost>(JsonApiEndpoitsEnum.POSTS);

  return (
    <>
      <br />
      Hello from Posts page
      {posts.length && posts.map((e) => <Post post={e} />)}
    </>
  );
};

export default Posts;
