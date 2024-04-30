import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import AllToy from "../pages/AllToy";
import MyToys from "../pages/myToys/MyToys";
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
        path: "/allToy",
        element: <AllToy/>,
      },
      {
        path: "/myToy",
        element: <MyToys/>,
      },
    ],
  },
]);
export default router;
