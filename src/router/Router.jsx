import { createBrowserRouter } from "react-router";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children:[
        {
            index:true,
            Component:Home
        },
        {
          path:'/coverage',
          Component:Coverage,
        }
    ]
  }
]);