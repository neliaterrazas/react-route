import React from "react";
import { Switch, Route, Link } from 'react-router-dom';


function Header(){
  const header = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    zIndex: '2',
    backgroundColor: 'black',
    padding: '20px 20px 20px 20px',
    top: '0px',
    left: '0px',
    width: '97vw',
    opacity: '.6'
  }
  const links = {
    opacity: '1',
    color: 'white',
    textDecoration: 'none',
    paddingRight: '10px',
    fontWeight: 'bold',
  }
  const sign = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  }
  return(
    <div>
      <div style={header}>
        <Link to="/" style={links}>TESLA</Link>
        <div>
          <Link style={links} to="/ModelS">MODEL S</Link>
          <Link style={links} to="/Model3">MODEL 3</Link>
          <Link style={links} to="/ModelX">MODEL X</Link>
          <Link style={links} to="/ModelY">MODEL Y</Link>
          <Link style={links} to="/Roadster">ROADSTER</Link>
          <Link style={links} to="/Energy">ENERGY</Link>
        </div>
        <div>
          <a style={links}>SHOP</a>
          <a style={sign}>SIGN IN</a>
        </div>
      </div>
    </div>
  );

}

export default Header;
