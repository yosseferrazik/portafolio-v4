import { BiCodeCurly } from "react-icons/bi";
import { FaDiscord, FaYoutube, FaTwitter, FaGithub } from "react-icons/fa";
import "./Sidenav.css";

export default function Sidenav() {
  return (
    <div class="sidenav">
      <hr id="hr" />
      <a href="https://discord.gg/raXEg2WNJd" target="_blank">
        <FaDiscord />
      </a>
      ㅤ
      <a href="https://www.youtube.com/channel/UCqkBPgMQic5Y9HfxV44qTuw" target="_blank">
        <FaYoutube />
      </a>
      ㅤ
      <a href="https://twitter.com/YossefFTW" target="_blank">
        <FaTwitter />
      </a>
      ㅤ
      <a href="https://github.com/yosseferrazik" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
}
