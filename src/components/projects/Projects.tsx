import React from "react";
import "./Projects.css";
import ProjectCard from "../../shared/card/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="reveal">
      <h1>Proyectos</h1>
      <p>
        Aqui dejo una serie de proyectos que he ido desarrollando con el tiempo
        e ido subiendo a internet
      </p>
      <div className="card-contaier">
        <ProjectCard
          title="GENERIC-LOGS"
          description="Un paquete que modifica visualmente los registros para facilitar la resolución de errores."
          image="https://i.imgur.com/N1sGtiL.png"
          github={true}
          githublink="https://github.com/yosseferrazik/generic-logs"
        />
      </div>
    </section>
  );
};

export default Projects;
