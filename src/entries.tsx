import { createPages } from "waku";

// layouts
import Layout from "./app/_layout";
import Root from "./app/_root";

// pages
import About from "./app/about";
import Index from "./app/index";

// api
import * as helloHandlers from "./app/api/hello";

export default createPages(async function makePages({
  createPage,
  createLayout,
  createRoot,
  createApi,
}) {
  return [
    createRoot({
      render: "dynamic",
      component: Root,
    }),
    createLayout({
      render: "dynamic",
      path: "/",
      component: Layout,
    }),
    createPage({
      render: "dynamic",
      path: "/",
      component: Index,
    }),
    createPage({
      render: "dynamic",
      path: "/about",
      component: About,
    }),
    createApi({
      render: "dynamic",
      path: "/api/hello",
      handlers: helloHandlers,
    }),
  ];
});
