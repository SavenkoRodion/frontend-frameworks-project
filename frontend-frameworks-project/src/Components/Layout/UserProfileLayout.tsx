import { Outlet, redirect } from "react-router-dom";
import { Box, Link, Toolbar } from "@mui/material";
import style from "./UserProfileLayout.style";
import useUserName from "../../Hooks/useUserName";

type Props = {};

const UserProfile = (props: Props) => {
  const userName: string = useUserName();
  if (!userName) redirect("/");

  return (
    <>
      <Toolbar sx={style.ToolBar} style={{ padding: 0 }}>
        <Link
          href={`/User/${userName}`}
          variant="body1"
          color="inherit"
          align="center"
          sx={style.ToolBarElement}
        >
          User profile
        </Link>
        <Link
          href={`/User/${userName}/Posts`}
          variant="body1"
          color="inherit"
          align="center"
          sx={style.ToolBarElement}
        >
          Posts
        </Link>
        <Link
          href={`/User/${userName}/Albums`}
          variant="body1"
          color="inherit"
          align="center"
          sx={style.ToolBarElement}
        >
          Albums
        </Link>
        <Link
          href={`/User/${userName}/Todos`}
          variant="body1"
          color="inherit"
          align="center"
          sx={style.ToolBarElement}
        >
          Todos
        </Link>
      </Toolbar>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "0 auto",
            maxWidth: "500px",
          }}
        >
          <Outlet context={userName} />
        </Box>
      </Box>
    </>
  );
};

export default UserProfile;
