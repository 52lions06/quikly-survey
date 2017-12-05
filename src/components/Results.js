import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Result(props) {
    return (
      <ReactCSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div className="result">
        You prefer <strong>{props.surveyResult}</strong>!
      </div>
       </ReactCSSTransitionGroup>
    );
  }

  // Result.propTypes = {
  //   surveyResult: React.PropTypes.string.isRequired,
  // };

  export default Result;

//presentational component
//This is a presentation component that will display the result. Next we have to update the render function in App.js. Replace the <Survey/> component in the render function with the following: