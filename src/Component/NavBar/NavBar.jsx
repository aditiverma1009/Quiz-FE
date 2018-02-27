import React from 'react';

import './NavBar.css';

//fetch username


const NavBar=(props)=>{

  return(
      <div className="NavBar-Bar">
        <div>
         Quizzy
        </div>
        <div className={props.page?"alert":"normal"}>
          fetchUserName
        </div>
     </div>
  );
}


export default NavBar;

