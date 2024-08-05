import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Navbar.css';

function Navbar({ setFilter }) { 
    const handleHomeClick = () => {
        setFilter('Home');
    };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          
        </div>
        <ul className="nav-links">
          <li><button onClick={() => setFilter('all')}>All</button></li>
          <li><button onClick={() => setFilter('completed')}>Completed</button></li>
          <li><button onClick={() => setFilter('incomplete')}>Incomplete</button></li>
        </ul>
        <ul className="nav-left">
          <li><button onClick={handleHomeClick}>Home</button></li> {/*does this work better than setfilter?*/}
          <li><button onClick={handleHomeClick}>About</button></li> 
          <li><button onClick={handleHomeClick}>Contact</button></li> 

       {/*<li><button onClick={() => setFilter('Home')}>Home</button></li>        diff way of writing
          <li><button onClick={() => setFilter('About')}>About</button></li>
          <li><button onClick={() => setFilter('Contact')}>Contact</button></li>*/}
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
  































