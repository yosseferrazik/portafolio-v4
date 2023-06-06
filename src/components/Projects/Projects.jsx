import "./Projects.css";
import { useState, useEffect } from "react";
import Card from "./Card";
export default function Projects() {

  return (
    <div className="projects">
      <div className="title">
        <h2>Proyectos</h2>
        <hr />
        <p>Los proyectos de los que me siento mas orgulloso </p>
      </div>
      <div className="card-container">
        <Card
          key={"1"}
          name={"Crypto Tracker"}
          desc={"🪙  Una pagina hecha con ReactJS que rastrea cryptomonedas"}
          glink={"https://github.com/yosseferrazik/cryptocurrency-tracker"}
          link={"https://cryptoka.netifly.com"}
          thumb={"https://i.imgur.com/jvvOlg7.png"}
          stars={"1"}
        />

        <Card
          key={"2"}
          name={"Github User Info"}
          desc={
            "Una pagina web hecha con React que fetchea información de la rest API de Github con Axios ."
          }
          glink={"https://github.com/yosseferrazik/github-user-info"}
          link={"https://user-info-from-github.netlify.app/"}
          thumb={"https://i.imgur.com/3kglUIu.png"}
          stars={"1"}
        />
      </div>
    </div>
  );
}