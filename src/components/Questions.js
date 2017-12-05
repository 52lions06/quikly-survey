import React from 'react';

  function Questions(props) {
    return (
      <h2 className="questions">{props.content}</h2>
    );
  }

  // Questions.propTypes = {
  //   content: React.PropTypes.string.isRequired
  // };

  export default Questions;

  //stateless component 
  //container component -- creates the questions
  
  //find a npm-proptypes since PropTypes is deprecated 