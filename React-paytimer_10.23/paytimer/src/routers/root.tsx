import { JSX, lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import UserRouter from "./UserRouter";

// 레이아웃 틀 import
const BasicLayout = lazy(() => import('../layouts/BasicLayout'));
// 리스트 페이지
const ListPage = lazy(() => import("../pages/ListPage"));

// 등록 페이지
const AddPage = lazy(() => import("../pages/AddPage"));

// 통계 페이지
const StatPage = lazy(() => import("../pages/StatPage"));

// 설정 페이지
const SettingPage = lazy(() => import("../pages/SettingPage"));

export const loading:JSX.Element  = <div>로딩중...</div>


const root = createBrowserRouter([
  {
    path:"/",
    element: <BasicLayout/>,
    children: [
      {
        index:true,
        element: (<Suspense fallback={loading}>
          <Navigate replace to = 'user/login'/>
        </Suspense>),
      },
      {
        path:"user",
        children: UserRouter(),
      },
      {
        path:'list',
        element: (
          <Suspense fallback={loading}>
            <ListPage/>
          </Suspense>
        ),
      },
      {
        path:"add",
        element: (
          <Suspense fallback={loading}>
            <AddPage/>
          </Suspense>
        )
      },
      {
        path:"stats",
        element: (
          <Suspense fallback={loading}>
            <StatPage/>
          </Suspense>
        )
      },
      {
        path:"setting",
        element: (
          <Suspense fallback={loading}>
            <SettingPage/>
          </Suspense>
        )
      }
    ],
  }
]);

export default root;