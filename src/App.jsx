import "./styles.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import {
  FaHeart,
  FaDiscord,
  FaYoutube,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

export default function App() {
  return (
    <>
    <div className="pan">
<div className="stars">

</div>
    </div>
    <div className="main">
      <div class="sidenav">
        <hr id="hr" />
        <a href="https://discord.gg/raXEg2WNJd" target="_blank">
          <FaDiscord />
        </a>
        ㅤ
        <a href="https://x.x">
          <FaYoutube />
        </a>
        ㅤ
        <a href="https://x.x">
          <FaTwitter />
        </a>
        ㅤ
        <a href="https://x.x">
          <FaGithub />
        </a>
      </div>
      <Home />
      <About />
      <Projects />
      <footer>
        <p>
          {" "}
          Hecho con <FaHeart /> por Yossef FTW
        </p>
      </footer>
    </div>
    </>
  );
}