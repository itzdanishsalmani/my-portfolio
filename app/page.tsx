import { About } from "./components/About";
import { Main } from "./components/Main";
import { NabvBar } from "./components/NavBar";
import { Skills } from "./components/Skills";

export default function Home() {
  return (
    <div>
      <NabvBar/>
      <Main/>
      <About/>
      <Skills/>
    </div>
      );
}
