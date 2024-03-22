import React, { useState, useEffect } from "react";
import "./Aboutme.css";

const Aboutme: React.FC = () => {
  const [greeting, setGreeting] = useState<string>("");

  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();

    if (hours < 13) {
      setGreeting("buenos días");
    } else if (hours < 20) {
      setGreeting("buenas tardes");
    } else {
      setGreeting("buenas noches");
    }
  }, []);

  return (
    <section id="aboutme" className="reveal" >
      <img src="/src/assets/web-aboutme.webp" alt="Sobre mi" width="20%" className="reveal"/>
      <div>
        <h1>Sobre mí</h1>
        <p>
          Hola {greeting}, me llamo Yossef Errazik, y actualmente estoy cursando
          un Grado Medio de Sistemas Microinformáticos y Redes. No tengo un rol
          determinado en lo que refiere a lo que me gusta o lo que hago, si me
          tuviera que decantar por algo seria el desarrollo web, pero si está
          relacionado con la tecnología, ten por seguro que me gustará o me
          parecera interesante.
        </p>
      </div>
    </section>
  );
};

export default Aboutme;
