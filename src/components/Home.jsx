import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import tesla from '../assets/images/tesla.jpg';

function Home(){
  const img = {
    width: '100%',
    position: 'absolute',
    top: '0px',
    left: '0px',
    zIndex: '0'
  }
  const bttn = {
    borderRadius: '5px',
    backgroundColor: 'pink',
    width: '50%',
    position: 'absolute',
    zIndex: '1',

    top: '200px'
  }
  return(
  <div>
    <img style={img} src={tesla}/>
    <button style={bttn}type='button'>Boop</button>
  </div>
  );
}

export default Home;
