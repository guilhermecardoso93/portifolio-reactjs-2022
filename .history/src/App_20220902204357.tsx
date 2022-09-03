import { Header } from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";

export function App() {
  return (
    <>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <Header />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
