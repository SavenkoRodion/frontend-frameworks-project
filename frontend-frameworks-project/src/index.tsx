import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Posts from "./Components/Posts/Posts";
import UserProfile from "./Components/User/UserProfile";
import Todos from "./Components/Todos/Todos";
import Albums from "./Components/Albums/Albums";
import AlbumView from "./Components/Albums/AlbumView";

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
          <Route path=":userName/todos" element={<Todos />} />
          <Route path=":userName/albums" element={<Albums />} />
          <Route path=":userName/albums/:albumId" element={<AlbumView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
