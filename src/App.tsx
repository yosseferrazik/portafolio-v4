import Aboutme from "./components/about/Aboutme";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
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
        <br />
        <hr />
        <Projects/>
      </main>
    </div>
  );
}

export default App;
export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
