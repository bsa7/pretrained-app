import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // TODO:
  // * add transition to navbar
  // * add a logo
  return (
    <div className='navbar'>
      <ul>
        <li>
          <Link to='/'>Home </Link>
        </li>

        <li>
          <Link to='/modals'>Modals</Link>
        </li>

        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
