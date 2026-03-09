import { FaReact, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiFirebase } from "react-icons/si";
function Skills() {
  return (
    <section>
      <h2 id="skills" className="section-title">Skills</h2>

      <div className="skills">
        <div className="skill">
          <FaHtml5 size={24} />
          <span>HTML</span>
        </div>
        <div className="skill">
          <FaCss3Alt size={24} />
          <span>CSS</span>
        </div>
        <div className="skill">
          <SiJavascript size={24} />
          <span>JavaScript</span>
        </div>
        <div className="skill">
          <FaReact size={24} />
          <span>React</span>
        </div>
        <div className="skill">
          <SiFirebase size={24} />
          <span>Firebase</span>
        </div>
        <div className="skill">
          <FaGithub size={24} />
          <span>Git / GitHub</span>

        </div>
      </div>
    </section>
  )
}
export default Skills;