import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import CollageDetails from "../Components/Collages/CollageDetails";
import Main from "../Layout/Main";
import Collages_Route from "../Components/Collages_Route/Collages_Route";
import CollageRoute_Details from "../Components/Collages_Route/CollageRoute_Details";
import Admission from "../Components/Admission/Admission";
import MyCollage from "../Components/MyCollage/MyCollage";

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
        element: <CollageDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/collagedata/${params.id}`),
      },
      {
        path: "/collages",
        element: <Collages_Route />,
      },
      {
        path: "/collages/collagedetails/:id",
        element: <CollageRoute_Details />,
        loader: ({ params }) => fetch(`http://localhost:5000/collageroute/${params.id}`),
      },
      {
        path: "/admission",
        element: <Admission />,
      },
      {
        path: "/mycollage",
        element: <MyCollage />,
      },
      {
        path: "*",
        element: <div>Not Found</div>,
      },
    ],
  },
]);
