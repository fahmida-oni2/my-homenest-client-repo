import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Loading from "../Components/Loading/Loading";
import AllProperties from "../Pages/AllProperties/AllProperties";
import AddProperties from "../Pages/AddProperties/AddProperties";
import MyProperties from "../Pages/MyProperties/MyProperties";
import MyRatings from "../Pages/MyRtaings/MyRatings";


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    hydrateFallbackElement:<Loading></Loading>,
    children:[
        {
            index: true,
            Component:Home 
        },
         {
            path:'/all-properties',
            element:<AllProperties></AllProperties>,
        },
         {
            path:'/add-properties',
            element:<AddProperties></AddProperties>,
        },
         {
            path:'/my-properties',
            element:<MyProperties></MyProperties>,
        },
         {
            path:'/my-ratings',
            element:<MyRatings></MyRatings>,
        },

    ]
  },
]);