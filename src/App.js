import React, { Component } from 'react';
import update from 'react-addons-update';
import logo from './logo.svg';
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

// updated state and selecting an answer
// This function is currently performing two tasks; setting the answer and then setting the next question. 
  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < surveyQuestions.length) {
        setTimeout(() => this.setNextQuestion(), 300);
      } else {
        // do nothing for now
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Quikly Survey</h1>
        </header>
        <Survey
          answer={this.state.answer}
          answerOptions={this.state.answerOptions}
          questionId={this.state.questionId}
          question={this.state.question}
          questionTotal={surveyQuestions.length}
          onAnswerSelected={this.handleAnswerSelected}
        />
      </div>
    );
  }
}

export default App;


//to explain how shuffleArray function works https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
