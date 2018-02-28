import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios';
import './Leader.css';


class LoginBox extends React.Component {
  constructor() {
    super();
    this.state = {
      lead: [],
    };
  }

  componentWillMount() {
    axios.get('/leadership')
      .then((response) => {
        const newresponse = response.data;
        //    console.log("here");
        //     console.log(newresponse);
        return newresponse;
      }).then((data) => {
        this.setState({
          lead: data,
        });
      });
  }

  render() {
    const leadlist = this.state.lead;
    console.log(leadlist);
    const lList = leadlist.map(step => (

      <div>
        {step.username}
        {step.score}
      </div>


    ));

    return (
      <div className="LeaderBox" >
        <div className="urscore" />
        <div>Leaderboard</div>
        <div>{lList}</div>
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
