import React from 'react';

const Questions = (props) => {
    return (
      <h2 className="question">{props.content}</h2>
    );
  }

  // Questions.propTypes = {
  //   content: React.PropTypes.string.isRequired
  // };

  export default Questions;

  //stateless component 
  //presentational component  -- creates the questions
  
  //find a npm-proptypes since PropTypes is deprecated 