import smiley from "../../../public/memphis-emoji-smiled-face-1.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
export function Navbar() {
  interface linkObject {
    name: string;
    link: string;
  }
  const navButtons: linkObject[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Work",
      link: "/work",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div className='nav'>
      <img className='icon' src={smiley} loading='lazy'></img>
      <h1 className="nav-title">Daniel Villery</h1>
      {navButtons.map((button) => (
        <NavLink className='nav-button' to={button.link} key={button.name}>
          {button.name}
        </NavLink>
      ))}
    </div>
  );
}
