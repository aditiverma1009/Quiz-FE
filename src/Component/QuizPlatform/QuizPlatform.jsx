import React from 'react';
import axios from 'axios';
import './QuizPlatform.css';
import PropTypes from 'prop-types';
import QuesDeck from '../QuesDeck/QuesDeck';

class QuizPlatform extends React.Component{ 
    constructor() {
    super();
    this.state = {
        quesOptionList:[],
    }; 
  }

 componentWillMount(){
    axios.get('/fetchData')
    .then((response)=>{ 
       const newresponse=response.data;
    //    console.log("here");
    //     console.log(newresponse);
       return newresponse;
    }).then((data)=>{
        this.setState({
            quesOptionList:data,
        });
    })
    .catch(function (error) {
      console.log(error);
    });
 } 

//  goToSetState=()=>{
//     this.setState({
//         pageNo:1,
//     });
  
//   }



 onRadioClick=(event,quesidarg,usrnmarg)=>{
     console.log(event.target.value);
      axios.post('/updateOption', {
        username: usrnmarg,
        quesid:quesidarg,
        selectedOption:event.target.value,
      })
      .then((respo)=>console.log(respo));
    }
 

render() {

const quesOptionList = this.state.quesOptionList;
console.log(quesOptionList);
const qoList = quesOptionList.map((step, index) => (
      <li key={step.quesid}>
        <QuesDeck
          quesid={step.quesid}
          ques={step.ques}
          answer={step.answer}
          options={step.options}
          usrnm={this.props.usrnm}
          onRadioClick={(event)=>this.onRadioClick(event,step.quesid,this.props.usrnm)}
        />
      </li>
    ));

   return(
       <div className="QuizPlatformOuter">
          {qoList}
        </div>
   );
}//render close
}//class close

export default QuizPlatform;

QuizPlatform.propTypes = {
  page: PropTypes.number.isRequired,
  usrnm: PropTypes.string.isRequired,
  setUserScore: PropTypes.func.isRequired,
};

// page={this.props.pageNo}
//             setUserScore={()=>this.props.setUserScore()}
//             usrnm={this.props.username}
