import React from "react";
import { Route, Routes } from "react-router-dom";
import { ClientLayout } from "../layouts";
import { Home, Courses, Blog, Post } from "../pages/web";

export const WebRouter = () => {
  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };

  return (
    <Routes>
      <Route path="/" element={loadLayout(ClientLayout, Home)} />
      <Route path="/cursos" element={loadLayout(ClientLayout, Courses)} />
      <Route path="/blog" element={loadLayout(ClientLayout, Blog)} />
      <Route path="/blog/:path" element={loadLayout(ClientLayout, Post)} />
    </Routes>
  );
};
