import JsonApiEndpointsEnum from "../../Model/JsonApiEndpointsEnum";
import jsonApiFetch from "../../Hooks/jsonApiFetch";
import { TUser } from "../../Model/TUser";
import { useEffect, useState } from "react";
import User from "./User";

const Posts = () => {
  const [users, setUsers] = useState<TUser[]>([]);

  useEffect(() => {
    jsonApiFetch<TUser>(JsonApiEndpointsEnum.USERS, "", setUsers);
  }, []);

  return (
    <>
      {users.length &&
        users.map((user: TUser, i: number) => (
          <User
            userName={user.username}
            name={user.name}
            company={user.company}
            key={i}
          />
        ))}
    </>
  );
};

export default Posts;
