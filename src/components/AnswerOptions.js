import React from 'react';

const AnswerOptions = (props) => {
    return (
      <li className="answerOptions">
        <input
          type="radio"
          className="radioCustomButton"
          name="radioGroup"
          checked={props.answerType === props.answer}
          id={props.answerType}
          value={props.answerType}
          disabled={props.answer}
          onChange={props.onAnswerSelected}
        />
        <label className="radioCustomLabel" htmlFor={props.answerType}>
          {props.answerContent}
        </label>
      </li>
    );
  }

  // AnswerOptions.propTypes = {
  //   answerType: React.PropTypes.string.isRequired,
  //   answerContent: React.PropTypes.string.isRequired,
  //   answer: React.PropTypes.string.isRequired,
  //   onAnswerSelected: React.PropTypes.func.isRequired
  // };

  export default AnswerOptions;

  //stateless component
  //container component -- How we answer each question

  //This component consists of a list item with a radio button and label. There is one new concept introduced here on line 10; the checked property is a comparison statement. This value will be a boolean (true or false) based on whether the answer selected is equal to the answer option type.