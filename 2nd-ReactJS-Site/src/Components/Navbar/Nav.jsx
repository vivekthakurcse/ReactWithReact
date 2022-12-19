import React, { Components } from 'react';
import "./Nav.css";

// class Nav extends Components {
//   render() {
//     return <nav className='Navbar'>
//       <ul className='Nav-list'>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">About</a></li>
//         <li><a href="#">Service</a></li>
//         <li><a href="#">Contact Us</a></li>
//       </ul>
//     </nav>
//   }
// }
function Nav() {
  return (
    <nav className='Navbar'>
      <ul className='Nav-list'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}
export default Nav;