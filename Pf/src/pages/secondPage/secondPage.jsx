import { mySkill } from "../../arrays/SkillArrays";
import { Link } from "react-router-dom";

const SecondPage = () => {
  return(
    <div className="main-inner">
      <div className="section-center">

        <div className="skills-content">
          <h3>SKILLS</h3>
          <ul className="skills-items">
            {mySkill.slice(1,4).concat(mySkill.slice(5,4)).map(list => (
              <li key={list.id} className="skills-item">
                <Link to={list.path}>
                  <span>{list.name}</span>
                  <img src={list.imageUrl} alt={list.imageName} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default SecondPage;