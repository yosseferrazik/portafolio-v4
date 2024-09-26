import "./Navbar.css";
import { RiHome2Line, RiUser5Line, RiFileUserLine,RiProfileLine, RiMedalLine, RiBox3Line, RiLeafLine, RiMailLine  } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };


  return (
<nav>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`right ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <RiHome2Line />
            &nbsp;<span>Home</span>
          </li>
          <li>
            <RiUser5Line />
            &nbsp;<span>About me</span>
          </li>
          <li>
            <RiFileUserLine />
            &nbsp;<span>Resume</span>
          </li>
          <li>
            <RiProfileLine />
            &nbsp;<span>Professional Profiles</span>
          </li>
          <li>
            <RiMedalLine />
            &nbsp;<span>Certificates</span>
          </li>
          <li>
            <RiBox3Line />
            &nbsp;<span>Projects</span>
          </li>
          <li>
            <RiLeafLine />
            &nbsp;<span>7 HHEP</span>
          </li>
          <li>
            <RiMailLine />
            &nbsp;<span>Contact</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
// Otro lado navbar
/*
   <div className="left">
        <ul>
          <li>Hola</li>
        </ul>
      </div>
*/
