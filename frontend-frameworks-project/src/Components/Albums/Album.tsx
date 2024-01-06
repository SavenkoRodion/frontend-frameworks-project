import { Box, Link, Typography } from "@mui/material";
import useUserName from "../../Hooks/useUserName";

interface AlbumProps {
  title: string;
  albumId: number;
}

const Album = ({ title, albumId }: AlbumProps) => {
  const userName = useUserName();
  return (
    <Link href={`/User/${userName}/Albums/${albumId.toString()}`}>
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
      </Box>
    </Link>
  );
};

export default Album;
