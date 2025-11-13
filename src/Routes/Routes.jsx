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
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";
import UpdateProperty from "../Pages/UpdateProperty/UpdateProperty";

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
            loader:()=> fetch('https://real-estate-api-server.vercel.app/all-properties')
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
          {
            path:'/all-properties/:id',
           element: <PrivateRoutes>
            <PropertyDetails></PropertyDetails>
           </PrivateRoutes>,
            loader:({params})=> fetch(`https://real-estate-api-server.vercel.app/all-properties/${params.id}`)
        },
         {
            path:'/update-properties/:id',
           element: <PrivateRoutes>
           <UpdateProperty></UpdateProperty>
           </PrivateRoutes>,
             loader:({params})=> fetch(`https://real-estate-api-server.vercel.app/all-properties/${params.id}`)
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