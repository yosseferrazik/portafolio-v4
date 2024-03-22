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
import { BiLogoTypescript } from "react-icons/bi";

const Skills = () => {
  return (
    <section id="skills" className="reveal">
      <h1>Habilidades</h1>
      <div>
        <div className="text">
          <h1>Desarrollo web :</h1>
        </div>
        <div>
          <Tooltip text="CSS3">
            <RiCss3Fill />
          </Tooltip>{" "}
          <Tooltip text="HTML5">
            <RiHtml5Fill />
          </Tooltip>{" "}
          <Tooltip text="JavaScript">
            <RiJavascriptFill />
          </Tooltip>{" "}
          <Tooltip text="TypeScript">
            <BiLogoTypescript />
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
        <div className="text">
          <h1>Redes :</h1>
        </div>

        <div>
          <p>
            Tengo habilidades en calcular y asignar direcciones IP , así como en
            configurar dispositivos como routers y switches para garantizar una
            conectividad óptima en la red. Además, puedo identificar y
            solucionar problemas de conectividad y seguridad, como conflictos de
            direcciones IP o configuraciones erróneas, empleando herramientas de
            diagnóstico y análisis de red. Mi experiencia también incluye la
            configuración de VLANs para organizar y segmentar la red, junto con
            la implementación de políticas de seguridad para proteger la
            integridad de los datos y la infraestructura de red.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
