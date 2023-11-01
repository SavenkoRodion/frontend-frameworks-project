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
          <Link href="/" variant="h5" color="inherit" align="left">
            React zaliczeniowy
          </Link>
        </Toolbar>
      </AppBar>
      Hello world from Layout
      <br />
      Home
      <Outlet />
    </div>
  );
};

export default Layout;
