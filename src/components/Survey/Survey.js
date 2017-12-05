import React from 'react';
import Questions from '../components/Questions';
import QuestionCount from '../components/QuestionCount';
import AnswerOptions from '../components/AnswerOptions';


const Survey = (props) => {
    return (
       <div className="Survey">
         <QuestionCount
           counter={props.questionId}
           total={props.questionTotal}
         />
         <Question content={props.question} />
         <ul className="answerOptions">
           {props.answerOptions.map(renderAnswerOptions)}
         </ul>
       </div>
    );
  }

  // Survey.propTypes = {
  //   answer: React.PropTypes.string.isRequired,
  //   answerOptions: React.PropTypes.array.isRequired,
  //   counter: React.PropTypes.number.isRequired,
  //   question: React.PropTypes.string.isRequired,
  //   questionId: React.PropTypes.number.isRequired,
  //   questionTotal: React.PropTypes.number.isRequired,
  //   onAnswerSelected: React.PropTypes.func.isRequired
  // };

  export default Survey;