import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const BasicLayout = lazy(() => import(''))

const root = createBrowserRouter([
  {
    path:"",
    element: <Layout/>,
    children: [
      path:"login",
      element: <About/>
    ],
  }
]);

export default root;