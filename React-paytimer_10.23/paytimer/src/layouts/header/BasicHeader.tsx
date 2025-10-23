import { JSX } from "react";
import { Link } from "react-router-dom";
import { MainArrays } from "../../arrays/MainArrays";
import useEvent from "../../hooks/useEvent";

export function BasicHeader():JSX.Element{
  const {
    numb,
    setNumb,
  } = useEvent();

  return(
    <div className="header-inner">
      <div className="header-logo">
        <h1>
          <Link to="/">
            <img src="" alt="로고" />
          </Link>
        </h1>
      </div>
      <div id="gnb">
        <nav>
          <ul>
            {MainArrays.map((list,index) => (
              <li key={index} 
              className={"nav-items"+list.id}
              
              >
                <Link to={list.pathname}
                onMouseOver={() => setNumb(index)}
                onMouseOut={() => setNumb(null)}
                >
                  {numb === index ? list.emoji+list.name:list.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav> 
      </div>
      <div className="user-table">
        <div className="user-content">
          
        </div>
      </div>
    </div>
  )
}
