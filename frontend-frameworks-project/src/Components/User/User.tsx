import { Box, Link } from "@mui/material";
import { TComapany } from "../../Model/TUser";

interface UserProps {
  userName: string;
  name: string;
  company: TComapany;
}

const User = ({ userName }: UserProps) => {
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
      <Link href={`/User/${userName}`} variant="h4">
        Name: {userName}
      </Link>
    </Box>
  );
};

export default User;
