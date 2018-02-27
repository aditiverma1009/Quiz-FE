import React from 'react';

import './App.css';
import NavBar from '../NavBar/NavBar';
import Container from '../Container/Container';

class App extends React.Component{ 
    constructor() {
    super();
    this.state = {
      pageNo:0,
    }; 
  }

render() {
  return(<div>
    <NavBar page={this.state.pageNo}/>
    <Container page={this.state.pageNo}/>
    </div>
  );
}
}

export default App;

