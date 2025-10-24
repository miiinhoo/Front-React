import React from "react";
import { auth } from "../../firebase";
import { Navigate } from "react-router-dom";
import useEvent from "../../hooks/useEvent";

export type Node = {
  children : React.ReactNode;
}
export default function ProtectedRouter ({children}:Node) {
  const { location,isMainFullpage } = useEvent();

  if(!auth.currentUser && 
    location.pathname !== "/user/login" && 
    location.pathname !== "/user/signup" && !isMainFullpage){
    alert("로그인을 먼저 해주세요.")
    return <Navigate replace to = "/user/login"/>;
  }
  return <>{children}</>;
}