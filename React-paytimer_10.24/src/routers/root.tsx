import { JSX, lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import UserRouter from "./UserRouter";

const ProtectedRouter = lazy(() => import("../routers/protected/ProtectedRouter"));
// 레이아웃 틀 import
const BasicLayout = lazy(() => import('../layouts/BasicLayout'));

// 메인 페이지
const MainPage = lazy(() => import("../pages/MainPage"));

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
    element: <ProtectedRouter><BasicLayout/></ProtectedRouter>,
    children: [
      {
        index:true,
        element: (
          <Suspense fallback={loading}>
            <MainPage/>
          </Suspense>
        ),
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