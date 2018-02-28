import React from 'react';
import './LoginBox.css';
import PropTypes from 'prop-types';

class LoginBox extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }


  render() {
    return (
      <div className="LoginBoxOuter">
        <div className="LoginBoxOuterLeft">
          <div className="LoginBoxOuterLeftWelcome">Welcome</div>
          <div className="LoginBoxOuterLeftTo">to</div>
          <div className="LoginBoxOuterLeftQuizzy">Quizzy!</div>
        </div>
        <div className="LoginBoxOuterRight">
          <h4 className="LoginBoxOuterRightLogin">Login</h4>
          <p className="LoginBoxOuterRightUsername">Username</p>
          <input className="LoginBoxOuterRightInput" type="text" onChange={event => this.props.usernameSet(event)} />
          <div>
            <button className="loginbtn" onClick={() => this.props.setUserScore()}>Login</button>
          </div>
        </div>
      </div>
    );
  }// render close
}// class close

export default LoginBox;

LoginBox.propTypes = {
  usernameSet: PropTypes.func.isRequired,
  setUserScore: PropTypes.func.isRequired,
};
