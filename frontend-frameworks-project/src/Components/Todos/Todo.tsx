import { Box, Typography } from "@mui/material";

interface TodoProps {
  title: string;
  completed: Boolean;
}

const Todo = ({ title, completed }: TodoProps) => {
  return (
    <Box
      sx={{
        border: "1px solid black",
        borderRadius: "5px",
        marginBottom: " 20px",
        padding: "10px",
        height: "auto",
        width: "500px",
      }}
    >
      <Typography component="h2" variant="h4">
        {title}
      </Typography>
      <Typography>Completed: {completed.toString()}</Typography>
    </Box>
  );
};

export default Todo;
