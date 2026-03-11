import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Sounds } from "./pages/Sounds";
import { Presskit } from "./pages/Presskit";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "sounds", Component: Sounds },
      { path: "presskit", Component: Presskit },
    ],
  },
]);