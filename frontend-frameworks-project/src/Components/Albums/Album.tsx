import { Box, Typography } from "@mui/material";

interface AlbumProps {
  title: string;
}

const Album = ({ title }: AlbumProps) => {
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
    </Box>
  );
};

export default Album;
