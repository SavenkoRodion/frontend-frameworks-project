import TPost from "../../Model/TPost";
import JsonApiEndpoitsEnum from "../../Model/JsonApiEndpoitsEnum";
import jsonApiFetch from "../../Hooks/jsonApiFetch";
import Post from "./Post";
import { TUser } from "../../Model/TUser";
import TComment from "../../Model/TComments";
import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState<TPost[]>([]);
  const [users, setUsers] = useState<TUser[]>([]);
  const [comments, setComments] = useState<TComment[]>([]);

  useEffect(() => {
    jsonApiFetch<TPost>(JsonApiEndpoitsEnum.POSTS, "", setPosts);
    jsonApiFetch<TUser>(JsonApiEndpoitsEnum.USERS, "", setUsers);
    jsonApiFetch<TComment>(JsonApiEndpoitsEnum.COMMENTS, "", setComments);
  }, []);

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
