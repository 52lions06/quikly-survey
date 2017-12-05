import React, { Component } from 'react';
import update from 'react-addons-update';
import logo from './logo.svg';
import Results from './components/Results';
import Survey from './components/Survey';
import surveyQuestions from './api/surveyQuestions';
import './App.css';

class App extends Component {
   constructor(props) {
    super(props);
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);

    this.state = {
     counter: 0,
     questionId: 1,
     question: '',
     answerOptions: [],
     answer: '',
     answersCount: {
       nintendo: 0,
       microsoft: 0,
       sony: 0
     },
     result: ''
    };
  }

  //this is inserting api questions into Survey before the initial rendering
   componentWillMount() {
    const shuffledAnswerOptions = surveyQuestions.map((question) => this.shuffleArray(question.answers));  

    this.setState({
      question: surveyQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  setUserAnswer(answer) {
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: {$apply: (currentValue) => currentValue + 1}
    });
    this.setState({
      answersCount: updatedAnswersCount,
      answer: answer
    });
  }

    // goes after the updated answer function 
    // Here we increment the counter and questionId state, by first creating the variables, then assigning them via setState.
  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: surveyQuestions[counter].question,
      answerOptions: surveyQuestions[counter].answers,
      answer: ''
    });
  }

// updated state and selecting an answer
// This function is currently performing two tasks; setting the answer and then setting the next question. 
  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < surveyQuestions.length) {
        setTimeout(() => this.setNextQuestion(), 300);
      } else {
        // calling setResults after 300ms. The delay is a UX decision, user has a moment to see the visual feedback indicating that their selection has been made.
        setTimeout(() => this.setResults(this.getResults()), 300);
      }
  }


  shuffleArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };
  
  // This function calculates which answer type (Sony, Microsoft or Nintendo in our case) has the highest number - aka the survey result
  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    //Then on line 4, answersCountValues is mapping over this array to return an array of the values.
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    //Then we can get the highest number of that array with Math.max.apply, this is assigned to the maxAnswerCount variable on line 5. 
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  //This function receives the result from getResults which is an array, and checks to see if that array has one value
  setResults (result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }

  renderSurvey() {
    return (
       <Survey
          answer={this.state.answer}
          answerOptions={this.state.answerOptions}
          questionId={this.state.questionId}
          question={this.state.question}
          questionTotal={surveyQuestions.length}
          onAnswerSelected={this.handleAnswerSelected}
        />
    );
  }

  renderResult() {
    return (
      <Results surveyResult={this.state.result} />
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Quikly Survey</h1>
        </header>
       
        {/*App will only show results if everyhing is done or will show the quiz*/}
        {this.state.result ? this.renderResult() : this.renderSurvey()}

      </div>
    );
  }
}

export default App;


//to explain how shuffleArray function works https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

// line 38 -- setAnswer() -- We’re setting the answer based on the user’s selection, which is the first instance of changing state based on user actions. The value being passed in as the answer parameter on line 1, is the value of the selected answer. Which in our case will be either Nintendo, Microsoft or Sony.

// react-addons-update creates a new object which merges this.state.answerCount and the new answerCount value