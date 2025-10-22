
import { useNavigate } from "react-router-dom";

function useEvent(){

  // 경로 지정 useNavigate
  const navigate = useNavigate(); 

  // 페이지 상태값조정 useState
  

  return{
    navigate,

  }
}
export default useEvent;