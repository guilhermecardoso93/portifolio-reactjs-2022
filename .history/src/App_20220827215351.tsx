import { Header } from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";


export function App() {
  return (
    <>
      <Header />
      <Banner />
      <Skills/>
    </>
  );
}
