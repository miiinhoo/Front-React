import { JSX, useEffect } from "react";
import { SectionTitleArray } from "../../arrays/mainpage/FirstSectionArrays";
import useEvent from "../../hooks/useEvent";

export default function FirstSection():JSX.Element {
  const { hash } = useEvent();
  const isInclude = ['#firstPage'].includes(hash);
  useEffect(() => {
    const titles = document.querySelectorAll(".title-text");
    titles.forEach((el) => {
      if (isInclude) {
        el.classList.add("animate"); // 현재 섹션일 때
      } else {
        el.classList.remove("animate"); // 다른 섹션일 때
      }
    });
  },[hash]);

  return(
    <div className="section-inner">
      <div className="section-left">
        <h1 className="section-title">
          {
            SectionTitleArray.map((list,idx) => (
              <p className="title-text" key={list.id} style={list.id === idx + 1 ? {transitionDelay:`${list.delay}s`}:{}}>
                {list.name}
              </p>
            ))
          }
        </h1>
      </div>
      <div className="section-right">
        <h2 className="section-subtitle">
          “매달 결제일, 이제 까먹지 마세요.” 
        </h2>
        <div className="text-wrapper">
          <div className="text-content">
            카드, 구독, 통신비, 할부까지 — 한 번에 관리
          </div>
        </div>
        <div className="startNow">
          <p>
            지금 시작하기
          </p>
        </div>
        <p className="scroll-animation">
          <span>scroll to next section</span><span className="arrow">{/*아래화살표*/}</span>
        </p>
      </div>
    </div>
  );
}