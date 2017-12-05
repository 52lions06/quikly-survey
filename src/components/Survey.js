import React from 'react';
import Questions from '../components/Questions';
import QuestionCount from '../components/QuestionCount';
import AnswerOptions from '../components/AnswerOptions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



const Survey = (props) => {

function renderAnswerOptions(key) {
    return (
      <AnswerOptions
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

    return (
        <ReactCSSTransitionGroup
        className="container"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}
      >
       <div key={props.questionId}>
         <QuestionCount
           counter={props.questionId}
           total={props.questionTotal}
         />
         <Questions content={props.question} />
         <ul className="answerOptions">
           {props.answerOptions.map(renderAnswerOptions)}
         </ul>
       </div>
       </ReactCSSTransitionGroup>
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

  //presentational component 

  //Here we’ve wrapped the survey element in a ReactCSSTransitionGroup element. Child elements of ReactCSSTransitionGroup must be provided with a unique key attribute. 