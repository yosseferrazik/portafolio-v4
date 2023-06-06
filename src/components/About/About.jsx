import "./About.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaJsSquare,
  FaArrowDown,
} from "react-icons/fa";
export default function About() {
  return (
    <div className="about">
      <div className="sobremi">
        <h2>Sobre mi</h2>
        <hr />
        <p>
          Mi nombre es Yossef Errazik, pero en internet me conocen como Yossef
          FTW. Soy un entusiasta de la tecnología que se interesó por este mundo
          a finales de 2020, cuando recibí mi primer portátil. Desde entonces,
          he descubierto el fascinante mundo del desarrollo de videojuegos y
          software. Me apasiona especialmente el desarrollo de aplicaciones web
          y videojuegos. Además, también me considero un diseñador y artista de
          pixel art.{" "}
        </p>
      </div>
    </div>
  );
}