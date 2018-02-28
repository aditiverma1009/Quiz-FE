import React from 'react';
import './Container.css';
import LoginBox from '../LoginBox/LoginBox';
import QuizPlatform from '../QuizPlatform/QuizPlatform';



class Container extends React.Component{ 
    constructor() {
    super();
    this.state = {
       
    }; 
  }


render() {
    console.log();
    if(this.props.page===0){
        return(
            <div>
            <LoginBox 
            usernameSet={(event)=>this.props.usernameSet(event)}
            setUserScore={()=>this.props.setUserScore()}
            />
            </div>
        );      
    }
    else if(this.props.page===1){
        return(<div>
            <QuizPlatform 
            page={this.props.page}
            setUserScore={()=>this.props.setUserScore()}
            usrnm={this.props.usrnm}
         
            />
          </div>
        );
    }
    else if(this.props.page===2){
        return(<div>
           hi
          </div>
        );
    }
    else{
        return(<div>in else</div>);
    }
}//render close
}//class close

export default Container;

