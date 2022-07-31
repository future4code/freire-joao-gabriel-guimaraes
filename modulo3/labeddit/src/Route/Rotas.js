import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../Pages/LoginPage/LoginPage";
import { SignUpPage } from "../Pages/SignUpPage/SignUpPage";
import { FeedPage } from "../Pages/FeedPage/FeedPage";
import { PostPage } from "../Pages/PostPage/PostPage";

export const Rotas = () => {
  const [body, setBody] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="signUp" element={<SignUpPage />} />
        <Route
          path="feed"
          element={<FeedPage body={body} setBody={setBody} />}
        />
        <Route
          path="post/:id"
          element={<PostPage body={body} setBody={setBody} />}
        />
      </Routes>
    </BrowserRouter>
  );
};
