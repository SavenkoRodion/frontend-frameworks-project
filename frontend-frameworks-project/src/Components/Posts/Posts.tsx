import TPost from "../../Model/TPost";
import JsonApiEndpointsEnum from "../../Model/JsonApiEndpointsEnum";
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
    jsonApiFetch<TPost>(JsonApiEndpointsEnum.POSTS, "", setPosts);
    jsonApiFetch<TUser>(JsonApiEndpointsEnum.USERS, "", setUsers);
    jsonApiFetch<TComment>(JsonApiEndpointsEnum.COMMENTS, "", setComments);
  }, []);

  return (
    <>
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
