import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li>
          <a href="#intro" onClick={()=>setMenuOpen(false)}>HOME</a>
        </li>
        <li>
          <a href="#portofolio" onClick={()=>setMenuOpen(false)}>PORTOFOLIO</a>
        </li>
        <li>
          <a href="#contact" onClick={()=>setMenuOpen(false)}>CONTACT</a>
        </li>
        <li>
          <a href="#testimoni" onClick={()=>setMenuOpen(false)}>TESTIMONI</a>
        </li>
        <li>
          <a href="#work" onClick={()=>setMenuOpen(false)} >WORK</a>
        </li>
      </ul>
    </div>
  );
}
