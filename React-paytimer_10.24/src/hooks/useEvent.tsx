
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function useEvent(){
  
  // 경로 지정 useNavigate
  const navigate = useNavigate(); 
  
  const hash = window.location.hash;
  const isMainFullpage = ["#firstPage", "#secondPage", "#thirdPage"].includes(hash);

  const location = useLocation();
  // 페이지 상태값조정 useState
    // 구조 할당 방식 useState
    const [ temp, setTemp ] = useState<{[key:string]:string}>({});
    // 일반 boolean상태값 조절
    const [ bool, setBool ] = useState(false);
    // 일반 number값 상태 조절
    const [ numb, setNumb ] = useState<number|null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
      setTemp((prev:any) => ({
        ...prev,
        [e.target.name] : e.target.value,
      }));
    }
    // 클릭 이벤트 방지
    const doNotRefreshSite = (event:any) => {
      event.preventDefault();
      event.stopPropagation();
    }

  return{
    // useNavigate,useLocation
    navigate,
    hash,
    isMainFullpage,
    location,

    // 상태값 반환
    temp,
    setTemp,
    bool,
    setBool,
    numb,
    setNumb,

    // 이벤트핸들러
    handleChange,
    doNotRefreshSite,

  }
}
export default useEvent;