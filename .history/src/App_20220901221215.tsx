import { Header } from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import Contact from "./components/contact";


export function App() {
  return (
    <>
      <Header />
      <Banner />
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}
