import "./Navbar.css";
export function Navbar() {
  const navButtons: string[] = ["Home", "Work", "Contact"];
  return (
    <div className='nav'>
      {navButtons.map((button) => (
        <span className='nav-button' key={button}>
          {button}
        </span>
      ))}
    </div>
  );
}
