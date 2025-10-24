import { JSX, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { BasicHeader } from "./header/BasicHeader";
import useEvent from "../hooks/useEvent";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const BasicLayout = ():JSX.Element => {
  const { location,navigate,isMainFullpage } = useEvent();
  useEffect(() => {
    const loggedOut = onAuthStateChanged(auth, (user) => {
      if(!user && location.pathname !== "/user/login" && location.pathname !== "/user/signup"){
        alert("로그아웃 되었습니다.")
        navigate("/user/login")
      }
    })
      return () => loggedOut();
  },[location.pathname,navigate]);

  // # 까지 포함시켜 클래스 추가/삭제
  
  
  // 또한, / 기본 url에도 클래스 추가/삭제

  return(
    <div>
      {/* 헤더 */}
      <header className={isMainFullpage ? "absolute":""}>
        <BasicHeader/>
      </header>
      <div className="main-content">
        <div className="main-wrapper">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}
export default BasicLayout;