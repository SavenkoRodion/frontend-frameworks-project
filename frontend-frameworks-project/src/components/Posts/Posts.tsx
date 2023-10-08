import { useEffect, useState } from "react";
import TPost from "../../types/TPost";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState<TPost[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data: TPost[]) => setPosts(data));
  }, []);

  return (
    <>
      Hello there
      {posts.length && posts.map((e) => <Post post={e} />)}
    </>
  );
};

export default Posts;
