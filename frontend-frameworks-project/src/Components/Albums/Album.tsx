import { Box, Link, Typography } from "@mui/material";
import useURLParams from "../../Hooks/useURLParams";

interface AlbumProps {
  title: string;
  albumId: number;
}

const Album = ({ title, albumId }: AlbumProps) => {
  const { userName } = useURLParams();
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
