import { redirect } from "react-router-dom";
import useUserName from "../../Hooks/useUserName";
import jsonApiFetch from "../../Hooks/jsonApiFetch";
import { TUser } from "../../Model/TUser";
import JsonApiEndpoitsEnum from "../../Model/JsonApiEndpoitsEnum";
import { useEffect, useState } from "react";
import TPost from "../../Model/TPost";
import TComment from "../../Model/TComments";
import Post from "../Posts/Post";
import { Link } from "@mui/material";

type Props = {};

const UserProfile = (props: Props) => {
  const userName = useUserName();
  if (!userName) redirect("/");

  const [data, setData] = useState<TUser[]>([]);
  const [userData, setUserData] = useState<TUser>();

  const [userPosts, setUserPosts] = useState<TPost[]>([]);
  const [userComments, setUserComments] = useState<TComment[]>([]);

  useEffect(() => {
    jsonApiFetch<TUser>(
      JsonApiEndpoitsEnum.USERS,
      `username=${userName}`,
      setData
    );
  }, [userName]);

  useEffect(() => {
    setUserData(data[0]);
  }, [data]);

  useEffect(() => {
    if (!userData) return;
    if (!userData.id) return;
    jsonApiFetch<TPost>(
      JsonApiEndpoitsEnum.POSTS,
      `id=${userData?.id}`,
      setUserPosts
    );
    if (!userData.name) return;
    jsonApiFetch<TComment>(
      JsonApiEndpoitsEnum.COMMENTS,
      `name=${userData?.name}`,
      setUserComments
    );
  }, [userData]);

  return (
    <div>
      Hello from {userData?.username}
      <br />
      User company is {userData?.company?.name}
      <br />
      <br />
      <Link href={`/${userName}/albums`}>View user albums</Link>
      <br />
      <br />
      <Link href={`/${userName}/todos`}>View user todos</Link>
      <br />
      <br />
      {userData?.username} posts
      <hr />
      <br />
      <br />
      {userPosts.length && userName && (
        <>
          {userPosts.map((e, i) => (
            <Post
              key={i}
              post={e}
              userName={userName}
              comments={userComments}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default UserProfile;
