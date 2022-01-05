import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li>
          <a href="#intro">HOME</a>
        </li>
        <li>
          <a href="#portofolio">PORTOFOLIO</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
        <li>
          <a href="#testimoni">TESTIMONI</a>
        </li>
        <li>
          <a href="#work">WORK</a>
        </li>
      </ul>
    </div>
  );
}
