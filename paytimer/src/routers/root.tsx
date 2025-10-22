import { JSX, lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

const BasicLayout = lazy(() => import('../layouts/BasicLayout'));
const MainPage = lazy(() => import("../pages/MainPage"));
const loading:JSX.Element  = <div>로딩중...</div>

const root = createBrowserRouter([
  {
    path:"/",
    element: <BasicLayout/>,
    children: [
      {
        path:"/",
        element: <Suspense fallback={loading}>
          <Navigate replace to = 'login'/>
        </Suspense>,
      },
      {
        path:"login",
        element: <Suspense fallback={loading}>
            <MainPage/>
          </Suspense>
      }
    ],
  }
]);

export default root;