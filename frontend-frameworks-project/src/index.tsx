import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Posts from "./Components/Posts/Posts";
import UserProfile from "./Components/User/UserProfile";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Posts />} />
          <Route path="posts" element={<Posts />} />
          <Route path=":userName" element={<UserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
