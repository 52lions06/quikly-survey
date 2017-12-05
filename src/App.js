import React, { Component } from 'react';
import logo from './logo.svg';
import Questions from './components/Questions';
import surveyQuestions from './api/surveyQuestions';
import './App.css';

class App extends Component {
   constructor(props) {
    super(props);
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
        <Questions content="What is your favorite food?" />
      </div>
    );
  }
}

export default App;


//to explain how shuffleArray function works https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
