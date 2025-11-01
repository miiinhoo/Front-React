import { createBrowserRouter } from "react-router-dom";
import BasicLayout from "../layouts/BasicLayout";
import { lazy, Suspense } from "react";

const loading = <div>로딩중..</div>;
const MainPage = lazy(() => import("../pages/MainPage"));
const CommentPage = lazy(() => import("../pages/comment/CommentPage"));
const ContactPage = lazy(() => import("../pages/contact/ContactPage"));

const root = createBrowserRouter([
    {
        path:"/",
        element:<BasicLayout/>,
        children:[
            {
                index:true,
                element:
                <Suspense fallback={loading}>
                    <MainPage/>
                </Suspense>
            },
            {
                path:"contact",
                element:
                <Suspense fallback={loading}>
                    <ContactPage/>
                </Suspense>
            },
            {
                path:"comment",
                element:
                <Suspense fallback={loading}>
                    <CommentPage/>
                </Suspense>
            }
        ]   
    }
])
export default root;