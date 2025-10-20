import ReactFullpage from "@fullpage/react-fullpage";
import FirstPage from "../firstPage/firstPage";
import SecondPage from "../secondPage/secondPage";
import ThirdPage from "../thirdPage/thirdPage";
import FourthPage from "../FourthPage/fourthPage";

const FullPageContainer = () => {

  return(
    <ReactFullpage
    scrollingSpeed={1500}
    
    navigation
    render={() => (
      <div className="fullpage-container">
        <div className="section sec1">
          <div className="main-visual">
            <FirstPage/>
          </div>
        </div>
        <div className="section sec2">
          <div className="main-visual">
            <SecondPage/>
          </div>
        </div>
        <div className="section sec3">
          <div className="main-visual">
            <ThirdPage/>
          </div>
        </div>
        <div className="section sec4">
          <div className="main-visual">
            <FourthPage/>
          </div>
        </div>
      </div>
    )}
  />
  )
}
export default FullPageContainer;