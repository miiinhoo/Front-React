import { JSX } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import FirstSection from "./mainpage/FirstSection";
import SecondSection from "./mainpage/SecondSection";
import ThirdSection from "./mainpage/ThirdSection";

function MainPage():JSX.Element{

  return (
    <ReactFullpage
      scrollingSpeed={800}
      navigation
      anchors={["firstPage", "secondPage", "thirdPage"]}
      sectionsColor={['gray','gray','gray']}
      credits={{ enabled: false }}
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <FirstSection/>
            </div>
            <div className="section">
              <SecondSection/>
            </div>
            <div className="section">
              <ThirdSection/>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};
export default MainPage;