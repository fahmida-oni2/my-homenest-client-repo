import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Loading from "../Components/Loading/Loading";
import AllProperties from "../Pages/AllProperties/AllProperties";
import AddProperties from "../Pages/AddProperties/AddProperties";
import MyProperties from "../Pages/MyProperties/MyProperties";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import MyRatings from "../Pages/MyRatings/MyRatings";
import AuthLayouts from "../Components/AuthLayouts/AuthLayouts";
import PrivateRoutes from "./PrivateRoutes";

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
            element:<PrivateRoutes>
              <AddProperties></AddProperties>
            </PrivateRoutes>
        },
         {
            path:'/my-properties',
            element:<PrivateRoutes>
              <MyProperties></MyProperties>
            </PrivateRoutes>
        },
         {
            path:'/my-ratings',
            element:<PrivateRoutes>
              <MyRatings></MyRatings>
            </PrivateRoutes>
        },

    ]
  },
  {
          path:'/auth',
          element:<AuthLayouts></AuthLayouts>,
          children:[
              {
                path: '/auth/login',
                element:<Login></Login>,
              },
              {
                path: '/auth/register',
                element:<Register></Register>,
              }
          ],
        }
]);