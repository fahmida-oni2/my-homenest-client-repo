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
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import MyProfile from "../Pages/MyProfile/MyProfile";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Privacy from "../Pages/Privacy/Privacy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <Loading></Loading>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/all-properties",
        element: <AllProperties></AllProperties>,
        loader: () =>
          fetch("https://real-estate-api-server.vercel.app/all-properties"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/privacy",
        element: <Privacy></Privacy>,
      },

      {
        path: "/all-properties/:id",
        element: <PropertyDetails></PropertyDetails>,
        loader: ({ params }) =>
          fetch(
            `https://real-estate-api-server.vercel.app/all-properties/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayouts></AuthLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <Loading></Loading>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivateRoutes>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <Loading></Loading>,

    children: [
      {
        path: "profile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "add-properties",
        element: <AddProperties></AddProperties>,
      },
      {
        path: "my-properties",
        element: <MyProperties></MyProperties>,
      },

      {
        path: "my-ratings",
        element: <MyRatings></MyRatings>,
      },
      {
        path: "update-properties/:id",
        element: <UpdateProperty></UpdateProperty>,
        loader: ({ params }) =>
          fetch(
            `https://real-estate-api-server.vercel.app/all-properties/${params.id}`
          ),
      },
    ],
  },
]);
