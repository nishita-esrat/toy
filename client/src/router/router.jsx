import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import AllToy from "../pages/AllToy";
import MyToys from "../pages/myToys/MyToys";
import UpdateToy from "../pages/UpdateToy";
import AddToy from "../pages/AddToy";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoute from "../private/PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import Blog from "../pages/Blog";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addToy",
        element: (
          <PrivateRoute>
            <AddToy />
          </PrivateRoute>
        ),
      },
      {
        path: "/allToy",
        element: <AllToy />,
      },
      {
        path: "/myToy",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/update_toy/:toyId",
        element: (
          <PrivateRoute>
            <UpdateToy />
          </PrivateRoute>
        ),
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
      {
        path: "/blogs",
        element: <Blog />,
      },
    ],
  },
]);
export default router;
