import { createBrowserRouter } from "react-router";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage";
import AugthLayout from "../Layout/AugthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    hydrateFallbackElement:<h1>loading ....</h1>,
    children:[
        {
            index:true,
            Component:Home
        },
        {
          path:'/coverage',
          Component:Coverage,
          loader: () => fetch('/serviceCenter.json').then(res => res.json())
        }
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
      }
    ]
  }
]);