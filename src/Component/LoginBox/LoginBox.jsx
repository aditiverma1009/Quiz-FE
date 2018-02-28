import React from 'react';
import './LoginBox.css';
import PropTypes from 'prop-types';

class LoginBox extends React.Component{ 
    constructor() {
    super();
    this.state = {
    
    }; 
  }

render() {
   return(
       <div className="LoginBoxOuter">
           <div className="LoginBoxOuterLeft">
                <h4 className="LoginBoxOuterLeftWelcome">Welcome</h4>
                <h4 className="LoginBoxOuterLeftTo">to</h4>
                <h2 className="LoginBoxOuterLeftQuizzy">Quizzy!</h2>
           </div>
           <div className="LoginBoxOuterRight">
           <h4 className="LoginBoxOuterRightLogin">Login</h4>
           <p className="LoginBoxOuterRightUsername">Username</p>
           <input className="LoginBoxOuterRightInput" type="text" onChange={(event)=>this.props.usernameSet(event)}/>
           <button className="LoginBoxOuterRightUsername" onClick={()=>this.props.setUserScore()}>Login</button>
           </div>
        </div>
   );
}//render close
}//class close

export default LoginBox;

LoginBox.propTypes = {
  usernameSet: PropTypes.func.isRequired,
  setUserScore: PropTypes.func.isRequired,
};
