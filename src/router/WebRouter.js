import { Route, Routes } from "react-router-dom";
import { ClientLayout } from "../layouts";
import { Home } from "../pages/web";

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
    </Routes>
  );
};
