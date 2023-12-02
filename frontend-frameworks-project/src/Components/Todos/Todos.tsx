import JsonApiEndpoitsEnum from "../../Model/JsonApiEndpoitsEnum";
import jsonApiFetch from "../../Hooks/jsonApiFetch";
import { TUser } from "../../Model/TUser";
import { useEffect, useState } from "react";
import useUserName from "../../Hooks/useUserName";
import TTodos from "../../Model/TTodos";
import Todo from "./Todo";

const Todos = () => {
  const userName = useUserName();
  const [todos, setTodos] = useState<TTodos[]>([]);
  const [data, setData] = useState<TUser[]>([]);
  const [userData, setUserData] = useState<TUser>();

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
    jsonApiFetch<TTodos>(
      JsonApiEndpoitsEnum.TODOS,
      `userId=${userData?.id}`,
      setTodos
    );
  }, [userData]);

  console.log(todos);

  return (
    <>
      {todos.length &&
        todos.map((e, i) => (
          <Todo key={i} title={e.title} completed={e.completed} />
        ))}
    </>
  );
};

export default Todos;
