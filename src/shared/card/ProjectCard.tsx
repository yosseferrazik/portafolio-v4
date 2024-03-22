import "./ProjectCard.css";
import { RiGithubFill, RiLink } from "react-icons/ri";
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: boolean;
  linkstring?: string;
  github?: boolean;
  githublink?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  link,
  linkstring,
  github,
  githublink,
}: ProjectCardProps) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={image} alt={title} className="image-card" />
      {link && (
        <button onClick={() => window.open(linkstring)}>
          {" "}
          <RiLink />
        </button>
      )}

      {github && (
        <button onClick={() => window.open(githublink)}>
          <RiGithubFill />
        </button>
      )}
    </article>
  );
};

export default ProjectCard;
