import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Posts from "./Components/Posts/Posts";
import UserProfileLayout from "./Components/Layout/UserProfileLayout";
import UserProfile from "./Components/Profile/UserProfile";
import Todos from "./Components/Todos/Todos";
import Albums from "./Components/Albums/Albums";
import AlbumView from "./Components/Albums/AlbumView";
import Users from "./Components/User/Users";
import UserProfilePosts from "./Components/Profile/UserProfilePosts";
import PostPage from "./Components/Posts/PostPage";

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
          <Route path="users" element={<Users />} />
          <Route path="post/:postId" element={<PostPage />} />
          <Route path="User/:userName" element={<UserProfileLayout />}>
            <Route path="" element={<UserProfile />} />
            <Route path="Posts" element={<UserProfilePosts />} />
            <Route path="Todos" element={<Todos />} />
            <Route path="Albums" element={<Albums />} />
            <Route path="Albums/:albumId" element={<AlbumView />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
