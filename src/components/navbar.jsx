import React, {useState} from "react";
import "../navbar.css";

function Navbar() {
  const[active, setActive] = useState("nav__menu");
  const[toggleIcon, setToggleIcon] = useState("nav__toggler");
  const navToggle = () => {
    active === 'nav__menu' 
    ? setActive("nav__menu nav__active")
    : setActive("nav__menu");
    //animacion 
    toggleIcon === 'nav__toggler'
    ? setToggleIcon ("nav__toggler toggle")
    : setToggleIcon ("nav__toggler")
  };
  return (
    <div>
      <nav className="nav">
        <a href="#" className="brand">
          EasyShare
        </a>
        <ul className={active}>
          <il className="nav__item">
            <a href="#" className="nav__link">
              Home
            </a>
          </il>
          <il className="nav__item">
            <a href="#" className="nav__link">
              Acerca de
            </a>
          </il>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>

        </div>
      </nav>
    </div>
  );
}
export default Navbar;