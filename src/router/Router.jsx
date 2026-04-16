import { createBrowserRouter } from "react-router";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage";
import AugthLayout from "../Layout/AugthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SendParcel from "../pages/SendParcel";
import PrivateRoute from "./PrivateRoute";
import DashBordLayout from "../Layout/dashBordLayout";
import MyParcels from "../pages/Dashbord/MyParcels/MyParcels";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    hydrateFallbackElement:<h1>Loading ....</h1>,
    children:[
        {
            index:true,
            Component:Home
        },
        {
          path:'/coverage',
          Component:Coverage,
          loader: () => fetch('/serviceCenter.json').then(res => res.json())
        },
        {
        path:'/parcel',
        element:<PrivateRoute><SendParcel></SendParcel></PrivateRoute>,
        loader: () => fetch('/serviceCenter.json').then(res => res.json())
      },
    ]
  },
  {
    path:'/',
    element:<AugthLayout></AugthLayout>,
    children:[
      {
        path:'/login',
        Component:Login
      },
      {
        path:'/register',
        Component:Register,
      },
      

    ]
  },
  {
    path: 'dashboard',
    element:<PrivateRoute><DashBordLayout></DashBordLayout></PrivateRoute>,
    children:[
     {
      path:'my-parcels',
      Component: MyParcels,
     }
    ]
  }
]);