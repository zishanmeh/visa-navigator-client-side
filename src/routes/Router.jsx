import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import AddVisa from "../pages/AddVisa";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoutes";
import AllVisa from "../pages/AllVisa";
import VisaDetails from "../pages/VisaDetails";
import MyAddedVisa from "../pages/MyAddedVisa";
import MyVisaApplication from "../pages/MyVisaApplication";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/add-visa",
        element: (
          <PrivateRoute>
            <AddVisa></AddVisa>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "all-visa",
        loader: () => fetch("http://localhost:3000/allVisa"),
        element: <AllVisa></AllVisa>,
      },
      {
        path: "/visa/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/visa/${params.id}`),
        element: (
          <PrivateRoute>
            <VisaDetails></VisaDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-visa/:email",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/visa/user/${params.email}`),
        element: (
          <PrivateRoute>
            <MyAddedVisa></MyAddedVisa>
          </PrivateRoute>
        ),
      },
      {
        path: "visa/application/:email",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/application/${params.email}`),
        element: (
          <PrivateRoute>
            <MyVisaApplication></MyVisaApplication>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Router;
