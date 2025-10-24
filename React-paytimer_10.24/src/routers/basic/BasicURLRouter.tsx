import { Navigate } from "react-router-dom";
import useEvent from "../../hooks/useEvent"
import { Node } from "../protected/ProtectedRouter";

export default function BasicURLRouter({children}:Node){
  const { location } = useEvent();

  if(location.pathname === "/"){
    <Navigate replace to={"#firstPage"}/>
  }

  return children;
}