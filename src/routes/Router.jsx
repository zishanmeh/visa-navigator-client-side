import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import AddVisa from "../pages/AddVisa";
import Register from "../pages/Register";
import Login from "../pages/Login";

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
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default Router;
