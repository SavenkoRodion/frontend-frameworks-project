import JsonApiEndpointsEnum from "../../Model/JsonApiEndpointsEnum";
import jsonApiFetch from "../../Hooks/jsonApiFetch";
import { TUser } from "../../Model/TUser";
import { useEffect, useState } from "react";
import TTodos from "../../Model/TTodos";
import Todo from "./Todo";
import { Box, CircularProgress } from "@mui/material";
import { useOutletContext } from "react-router-dom";

const Todos = () => {
  const userName: string = useOutletContext();
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
    <Box
      sx={!todos.length ? { display: "flex", justifyContent: "center" } : {}}
    >
      {todos.length ? (
        todos.map((e, i) => (
          <Todo key={i} title={e.title} completed={e.completed} />
        ))
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default Todos;
