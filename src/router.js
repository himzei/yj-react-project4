import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import { Children } from "react";
import NotFound from "./app/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [],
  },
]);

export default router;
