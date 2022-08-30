import { Header } from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";


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
