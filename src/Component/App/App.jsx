import React from 'react';
import axios from 'axios';
import './App.css';
import NavBar from '../NavBar/NavBar';
import Container from '../Container/Container';

class App extends React.Component{ 
    constructor() {
    super();
    this.state = {
      pageNo:0,
      username:'',
    }; 
  }

// importdatatodb=()=>{
//   axios.post('/postQuesIntoDb', {
   
//   })
//   .then(()=> axios.post('/postOptionsIntoDb', {
   
//   })); 
// }

  usernameSet=(event)=>{
    const usrnm=event.target.value;
    this.setState({
        username:usrnm,
    });
  }

  goToSetState=()=>{
    this.setState({
        pageNo:1,
    });
  
  }


  setUserScore=()=>{
  axios.post('/setUserScore', {
    username: this.state.username,
    score: 0,
  })
  .then(()=>this.goToSetState());
  // .then(()=> axios.post('/postQuesIntoDb', {
   
  // }))
  // .then(()=> axios.post('/postOptionsIntoDb', {
   
  // })); 
  
}

render() {
  return(<div className="mainApp">
    <NavBar page={this.state.pageNo} usrnm={this.state.username}/>
    <div className="boss">
    <Container 
      page={this.state.pageNo}
      usernameSet={(event)=>this.usernameSet(event)}
      setUserScore={()=>this.setUserScore()}
      usrnm={this.state.username}
      />
      </div>
    </div>
  );
}
}

export default App;

