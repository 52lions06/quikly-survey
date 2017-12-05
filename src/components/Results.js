import React from 'react';
function Result(props) {
    return (
      <div className="result">
        You prefer <strong>{props.quizResult}</strong>!
      </div>
    );
  }

  // Result.propTypes = {
  //   quizResult: React.PropTypes.string.isRequired,
  // };

  export default Result;

//presentational component
//This is a presentation component that will display the result. Next we have to update the render function in App.js. Replace the <Survey/> component in the render function with the following: