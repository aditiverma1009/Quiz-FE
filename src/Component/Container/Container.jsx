import React from 'react';

import './Container.css';
import LoginBox from '../LoginBox/LoginBox';

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
            <LoginBox/>
            </div>
        );      
    }
    else if(this.props.page===1){
        return(<div>
            hi
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

