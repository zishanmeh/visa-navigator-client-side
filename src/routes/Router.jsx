import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import AddVisa from "../pages/AddVisa";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/all-visa",
        element: <h2>Adding coffee</h2>,
      },
      {
        path: "/add-visa",
        element: <AddVisa></AddVisa>,
      },
    ],
  },
]);

export default Router;
