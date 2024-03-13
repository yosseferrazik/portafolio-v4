import Tooltip from "../../shared/tooltip/Tooltip";
import "./Skills.css";
import {
  RiCss3Fill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiReactjsFill,
} from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
const Skills = () => {
  return (
    <section id="skills">
      <h1>Habilidades</h1>
      <div>
        <u>
          <h1>Desarrollo web :</h1>
        </u>
        <div>
          <Tooltip text="CSS3">
            <RiCss3Fill />
          </Tooltip>{" "}
          <Tooltip text="HTML5">
            <RiHtml5Fill />
          </Tooltip>{" "}
          <Tooltip text="JS">
            <RiJavascriptFill />
          </Tooltip>{" "}
          <Tooltip text="ReactJS">
            <RiReactjsFill />
          </Tooltip>{" "}
          <Tooltip text="NoseJS">
            <FaNodeJs />
          </Tooltip>{" "}
          <Tooltip text="ExpressJS">
            <SiExpress />
          </Tooltip>{" "}
          <Tooltip text="MongoDB">
            <DiMongodb />
          </Tooltip>
        </div>
      </div>{" "}
      <br />
      <div>
        <u>
          <h1>Redes :</h1>
        </u>
        <div>Tengo conocimientos en los fundamentos basicos en redes, se</div>
      </div>
    </section>
  );
};

export default Skills;
