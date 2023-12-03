import { Box, Link, Typography } from "@mui/material";
import { TComapany } from "../../Model/TUser";

interface UserProps {
  userName: string;
  name: string;
  company: TComapany;
}

const Album = ({ userName, name, company }: UserProps) => {
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
      <Link href={`/${userName}`} variant="h4">
        Name: {userName}
      </Link>
    </Box>
  );
};

export default Album;
