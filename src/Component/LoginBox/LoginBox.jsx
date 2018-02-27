import React from 'react';
import axios from 'axios';
import './LoginBox.css';

class LoginBox extends React.Component{ 
    constructor() {
    super();
    this.state = {
     username:'',
    }; 
  }

  usernameSet=(event)=>{
    const usrnm=event.target.value;
    this.setState({
        username:usrnm,
    });
  }

  setUserScore=()=>{
  axios.post('/setUserScore', {
    username: this.state.username,
    score: 0,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

render() {
    console.log("usern"+this.state.username);
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
           <input className="LoginBoxOuterRightInput" type="text" onChange={(event)=>this.usernameSet(event)}/>
           <button className="LoginBoxOuterRightUsername" onClick={this.setUserScore()}>Login</button>
           </div>
        </div>
   );
}//render close
}//class close

export default LoginBox;

