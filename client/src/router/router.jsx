import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import AllToy from "../pages/AllToy";
import MyToys from "../pages/myToys/MyToys";
import UpdateToy from "../pages/UpdateToy";
import AddToy from "../pages/AddToy";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addToy",
        element: <AddToy />,
      },
      {
        path: "/allToy",
        element: <AllToy />,
      },
      {
        path: "/myToy",
        element: <MyToys />,
      },
      {
        path: "/update_toy/:toyId",
        element: <UpdateToy />,
        loader: ({ params }) => fetch(`/api/singleToy/${params.toyId}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
export default router;
