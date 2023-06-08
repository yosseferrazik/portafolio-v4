import "./styles.css";
import Sidenav from "./components/Sidenav/Sidenav";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import {
  FaHeart,
} from "react-icons/fa";

export default function App() {
  return (
    <div className="main">
      <div className="bg"></div>
      <Sidenav/>  
      <Home />
      <About />
      <Projects />
      <footer>
        <p>
          Hecho con <FaHeart /> por Yossef FTW
        </p>
      </footer>
    </div>
  );
}