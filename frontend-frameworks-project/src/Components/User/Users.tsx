import JsonApiEndpoitsEnum from "../../Model/JsonApiEndpoitsEnum";
import jsonApiFetch from "../../Hooks/jsonApiFetch";
import { TUser } from "../../Model/TUser";
import { useEffect, useState } from "react";
import User from "./User";

const Posts = () => {
  const [users, setUsers] = useState<TUser[]>([]);

  useEffect(() => {
    jsonApiFetch<TUser>(JsonApiEndpoitsEnum.USERS, "", setUsers);
  }, []);

  return (
    <>
      {users.length &&
        users.map((e: TUser) => (
          <User userName={e.username} name={e.name} company={e.company} />
        ))}
    </>
  );
};

export default Posts;
