import React from 'react';
// import axios from 'axios';
import './QuesDeck.css';
import PropTypes from 'prop-types';


class QuizDeck extends React.Component{ 
    constructor() {
    super();
    this.state = {
    }; 
  }

//  componentWillMount(){
//     axios.get('/fetchData')
//     .then((response)=>{ 
//        const newresponse=response.data;
//     //    console.log("here");
//     //     console.log(newresponse);
//        return newresponse;
//     }).then((data)=>{
//         this.setState({
//             quesOptionList:data,
//         });
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//  } 


render() {

const OptionList = this.props.options;
console.log(OptionList);
const oList = OptionList.map((step, index) => (
    <p>
    <input 
        key={step} 
        type="radio" 
        name="gender" 
        value={step}
    />
    <label for="my_id">{step}</label>
    </p>
));

   return(
       <div className="QuizDeck">
          <div>{this.props.quesid}</div>
          <div>{this.props.ques}</div>
          <div>{this.props.answer}</div>
          <div><form>{oList}</form></div>
          <div>{this.props.usrnm}</div>
        </div>
   );
}//render close
}//class close

export default QuizDeck;

QuizDeck.propTypes = {
    quesid: PropTypes.number.isRequired,
    ques: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    optionspage: PropTypes.array.isRequired,
    usrnm: PropTypes.string.isRequired,
};

// page={this.props.pageNo}
//             setUserScore={()=>this.props.setUserScore()}
//             usrnm={this.props.username}
