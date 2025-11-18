import { createBrowserRouter } from "react-router";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage";



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
  }
]);