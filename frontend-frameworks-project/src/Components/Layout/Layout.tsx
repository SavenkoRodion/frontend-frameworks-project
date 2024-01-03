import { Outlet } from "react-router-dom";
import styles from "./Layout.style";
import { AppBar, Box, CssBaseline, Link, Toolbar } from "@mui/material";
import React from "react";

const Layout = () => {
  return (
    <Box style={styles.Container}>
      <CssBaseline />
      <AppBar position="sticky" sx={{ marginBottom: "20px" }}>
        <Toolbar style={styles.LayoutHeader}>
          <Link href="/" variant="h5" color="inherit" align="center">
            React zaliczeniowy
          </Link>
          <Link href="/Posts" variant="body1" color="inherit" align="center">
            Posts
          </Link>
          <Link href="/Users" variant="body1" color="inherit" align="center">
            Users
          </Link>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Box
          sx={{
            maxWidth: "960px"
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
