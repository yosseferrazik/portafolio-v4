import "./Projects.css";
import { FaLink, FaGithub, FaStar, FaJsSquare } from "react-icons/fa";
export default function Card({
  name,
  desc,
  glink,
  link,
  stars,
  thumb,
}) {
  return (
    <article>
      <div className="card">
        <img src={thumb} alt="" className="image" />
        <div className="desc">
          <br />
          <a href={glink}>
            <FaGithub />
          </a>{" "}
          <a href={link}>
            <FaLink />
          </a>{" "}
          <hr />
          <br />
          {name}
          <p>
            <br />
            {desc}
            <br /> <br />
          </p>
        </div>
      </div>
    </article>
  );
}