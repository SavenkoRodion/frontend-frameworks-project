import { Outlet } from "react-router-dom";
import styles from "./Layout.style";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Layout = () => {
  return (
    <div style={styles.Container}>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <Link href="/" variant="h5" color="inherit" align="center">
            React zaliczeniowy
          </Link>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Outlet />
      </Box>
    </div>
  );
};

export default Layout;
