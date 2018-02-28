import React from 'react';
import axios from 'axios';
import './QuesDeck.css';
import PropTypes from 'prop-types';


class QuizDeck extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: '',
    };
  }



  componentDidMount() {
    axios.post('/fetchOption', {
      username: this.props.usrnm,
      quesid: this.props.quesid,
    })
      .then((selectedOp) => {
        const newres = selectedOp.data;
        // console.log('hi');
        return newres;
      })
      .then((data) => {
        this.setState({
          selected: data,
        });
        return data;
      });
  }

  onRadioClick=(step,quesidarg,usrnmarg)=>{
    console.log(step);
     axios.post('/updateOption', {
       username: usrnmarg,
       quesid:quesidarg,
       selectedOption:step,
     }).then(()=>{
         this.setState({
             selected:step,
         });
     });
     
   }


  render() {
    const OptionList = this.props.options;

    console.log(`selected state${this.state.selected}`);
    const oList = OptionList.map((step, index) => (
      <p>
        <input
          key={step}
          type="radio"
          name="gender"
          value={step}
          onChange={(event)=>this.onRadioClick(step,this.props.quesid,this.props.usrnm)}
          checked={(this.state.selected === step ? "checked":console.log("no"))}
        />
        <span className="my_id">{step}</span>
      </p>
    ));

    return (
        <div className="qdouter">
      <div className="QuizDeck">
        <div className="QuizDeck1">Question {this.props.quesid} :</div>
        <div className="QuizDeck2">{this.props.ques}</div>
        {/* <div>{this.props.answer}</div> */}
        <div className="QuizDeck3"><form>{oList}</form></div>
        {/* <div>{this.props.usrnm}</div> */}
      </div>
      </div>
    );
  }// render close
}// class close

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
