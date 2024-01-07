import JsonApiEndpointsEnum from "../../Model/JsonApiEndpointsEnum";
import jsonApiFetch from "../../Hooks/jsonApiFetch";
import { TUser } from "../../Model/TUser";
import { useEffect, useState } from "react";
import TTodos from "../../Model/TTodos";
import Todo from "./Todo";
import { Box, CircularProgress } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import jsonApiFetchFirst from "../../Hooks/jsonApiFetchFirst";

const Todos = () => {
  const userName: string = useOutletContext();
  const [todos, setTodos] = useState<TTodos[]>([]);
  const [userData, setUserData] = useState<TUser | null>(null);

  useEffect(() => {
    jsonApiFetchFirst<TUser | null>(
      JsonApiEndpointsEnum.USERS,
      `username=${userName}`,
      setUserData
    );
  }, [userName]);

  useEffect(() => {
    if (userData) {
      jsonApiFetch<TTodos>(
        JsonApiEndpointsEnum.TODOS,
        `userId=${userData?.id}`,
        setTodos
      );
    } else {
      setTodos([]);
    }
  }, [userData]);

  return (
    <Box
      sx={!todos.length ? { display: "flex", justifyContent: "center" } : {}}
    >
      {todos.length ? (
        todos.map((todo: TTodos, i: number) => (
          <Todo key={i} title={todo.title} completed={todo.completed} />
        ))
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default Todos;
