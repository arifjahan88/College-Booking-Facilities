import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import CollageDetails from "../Components/Collages/CollageDetails";
import Main from "../Layout/Main";
import Collages_Route from "../Components/Collages_Route/Collages_Route";
import CollageRoute_Details from "../Components/Collages_Route/CollageRoute_Details";
import Admission from "../Components/Admission/Admission";
import MyCollage from "../Components/MyCollage/MyCollage";
import Signin from "../Components/Authentication/Signin";
import Signup from "../Components/Authentication/Signup";
import Privateroutes from "./PrivateRoutes";
import PasswordReset from "../Components/Authentication/PasswordReset";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/collagedetails/:id",
        element: (
          <Privateroutes>
            <CollageDetails />
          </Privateroutes>
        ),
        loader: ({ params }) =>
          fetch(`project-task-server-lemon.vercel.app/collagedata/${params.id}`),
      },
      {
        path: "/collages",
        element: <Collages_Route />,
      },
      {
        path: "/collages/collagedetails/:id",
        element: (
          <Privateroutes>
            <CollageRoute_Details />
          </Privateroutes>
        ),
        loader: ({ params }) =>
          fetch(`project-task-server-lemon.vercel.app/collageroute/${params.id}`),
      },
      {
        path: "/admission",
        element: <Admission />,
      },
      {
        path: "/mycollage",
        element: (
          <Privateroutes>
            <MyCollage />
          </Privateroutes>
        ),
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/forgetpassword",
        element: <PasswordReset />,
      },

      {
        path: "*",
        element: <div>Not Found</div>,
      },
    ],
  },
]);
