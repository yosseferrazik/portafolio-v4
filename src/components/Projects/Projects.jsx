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
          name={"Generic logs"}
          desc={"Generic-logs es un paquete para NodeJS que mejora ligeramente la funcion console.log"}
          glink={"https://github.com/yosseferrazik/generic-logs"}
          link={"https://www.npmjs.com/package/generic-logs"}
          thumb={"https://i.imgur.com/SwYGc0a.png"}
        />

        <Card
          key={"2"}
          name={"Crypto Tracker"}
          desc={"🪙  Una pagina hecha con ReactJS que rastrea cryptomonedas"}
          glink={"https://github.com/yosseferrazik/cryptocurrency-tracker"}
          link={"https://cryptoka.netifly.com"}
          thumb={"https://i.imgur.com/jvvOlg7.png"}
        />

        <Card
          key={"3"}
          name={"Github User Info"}
          desc={
            "Una pagina web hecha con React que fetchea información de la rest API de Github con Axios ."
          }
          glink={"https://github.com/yosseferrazik/github-user-info"}
          link={"https://user-info-from-github.netlify.app/"}
          thumb={"https://i.imgur.com/3kglUIu.png"}
        />
      </div>
    </div>
  );
}