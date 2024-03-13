import Aboutme from "./components/about/Aboutme";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";
import Skills from "./components/skills/Skills";

function App() {
  const [Lang, setLang] = useState("");
  return (
    <div className="website-container">
      <Navbar />
      <br />
      <Header />
      <hr />
      <main>
        <Aboutme />
        <br />
        <hr />
        <Skills />
      </main>
    </div>
  );
}

export default App;
export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
