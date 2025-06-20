import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../App.css';
import Search from './Search';

function Header({ handlesearch }) {
  return (
    <div className='header'>
      <h1 style={{color:"white"}}> Weathery</h1>
      <Search handlesearch={handlesearch} />
    </div>
  );
}

export default Header;
