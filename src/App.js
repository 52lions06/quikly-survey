import React, { Component } from 'react';
import logo from './logo.svg';
import Questions from './components/Questions';
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
