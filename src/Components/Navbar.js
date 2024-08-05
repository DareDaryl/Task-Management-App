import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Navbar.css';

function Navbar({ setFilter }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
        </div>
        <ul className="nav-links">
          <li><button onClick={() => setFilter('all')}>All</button></li>  {/*Event handler that handles click*/}
          <li><button onClick={() => setFilter('completed')}>Completed</button></li> {/*arrow function that calls 
          the 'setFilter' function with the argument 'all, completed or incomplete'.*/}
          <li><button onClick={() => setFilter('incomplete')}>Incomplete</button></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; 





/*This is what I tried but could not get to work : 
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ setFilter }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-left">
          <div className="logo">
            </div>
            <ul className="nav-links">
              <li><Link className="nav-link" to="/Home">Home</Link></li>
              <li><Link className="nav-link" to="/About">About</Link></li>
              <li><Link className="nav-link" to="/Contact">Contact</Link></li>
            </ul>
          </div>
          <div className="nav-right">
            <ul className="nav-links">
              <li><button onClick={() => setFilter('all')}>All</button></li>
              <li><button onClick={() => setFilter('completed')}>Completed</button></li>
              <li><button onClick={() => setFilter('incomplete')}>Incomplete</button></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar; */
  