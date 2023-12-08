import JsonApiEndpointsEnum from "../../Model/JsonApiEndpointsEnum";
import jsonApiFetch from "../../Hooks/jsonApiFetch";
import { TUser } from "../../Model/TUser";
import { useEffect, useState } from "react";
import useURLParams from "../../Hooks/useURLParams";
import TTodos from "../../Model/TTodos";
import Todo from "./Todo";

const Todos = () => {
  const { userName } = useURLParams();
  const [todos, setTodos] = useState<TTodos[]>([]);
  const [data, setData] = useState<TUser[]>([]);
  const [userData, setUserData] = useState<TUser>();

  useEffect(() => {
    jsonApiFetch<TUser>(
      JsonApiEndpointsEnum.USERS,
      `username=${userName}`,
      setData
    );
  }, [userName]);

  useEffect(() => {
    setUserData(data[0]);
  }, [data]);

  useEffect(() => {
    jsonApiFetch<TTodos>(
      JsonApiEndpointsEnum.TODOS,
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
