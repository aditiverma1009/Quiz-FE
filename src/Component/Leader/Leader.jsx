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
      <div className="LeaderBox" >
        <div className="urscore" />
        <div>Leaderboard</div>
        <div>{leadlist}</div>
        <div><button type="submit" value="submit">Play Again</button></div>
      </div>
    );
  }// render close
}// class close

export default LoginBox;

LoginBox.propTypes = {
  usernameSet: PropTypes.func.isRequired,
  setUserScore: PropTypes.func.isRequired,
};
