import Topbar from "./component/topbar/Topbar";
import Intro from "./component/intro/Intro";
import Contact from "./component/contact/Contact";
import Portofolio from "./component/portofolio/Portofolio";
import Testimoni from "./component/testimoni/Testimoni";
import Work from "./component/work/Work";
import "./app.scss";
import { useState } from "react";
import Menu from "./component/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> 
      <div className="sections">
        <Intro />
        <Portofolio />
        <Testimoni />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
