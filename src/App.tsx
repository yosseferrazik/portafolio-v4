import Aboutme from "./components/about/Aboutme";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } 
    }
  }

  window.addEventListener("scroll", reveal);
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
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;

