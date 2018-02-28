import React from 'react';

import './NavBar.css';

// fetch username


const NavBar = props => (
  <div className="NavBar-Bar">
    <div className="logo">
         Quizzy
    </div>
    <div className={props.page === 0 ? 'normal' : 'alert'}>
      {props.usrnm}
    </div>
  </div>
);


export default NavBar;

