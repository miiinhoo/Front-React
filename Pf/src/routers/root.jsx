import { lazy,Suspense } from "react"
import { createBrowserRouter } from "react-router-dom"

const BasicLayout = lazy(()=> import("../layouts/BasicLayout"));
const FullPageContainer = lazy(() => import("../pages/container/FullPageContainer"));
const About = lazy(() => import("../pages/test/About"));

const Loading = <div>Loading</div>

const root = createBrowserRouter ([
  {
    path:"",
    element:<BasicLayout/>,
    children:[
      {
        path:"",
        element:<FullPageContainer/>
      },
      {
        // test
        path:"about",
        element: <Suspense fallback={Loading}><About/></Suspense>
      }
    ]
  }
]);
export default root;