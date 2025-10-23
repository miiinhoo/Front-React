
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useEvent(){
  
  // 경로 지정 useNavigate
  const navigate = useNavigate(); 

  // 페이지 상태값조정 useState
    // 구조 할당 방식 useState
    const [ temp, setTemp ] = useState(0);
    // 일반 boolean상태값 조절
    const [ bool, setBool ] = useState(false);
    // 일반 number값 상태 조절
    const [ numb, setNumb ] = useState<number|null>(null);


  return{
    // useNavigate
    navigate,
    
    // 상태값 반환
    temp,
    setTemp,
    bool,
    setBool,
    numb,
    setNumb,

    // 이벤트핸들러

  }
}
export default useEvent;