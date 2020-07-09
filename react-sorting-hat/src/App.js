import React from 'react';
import logo from './logo.svg';
import './App.css';

import Question from "./Components/Question";

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
        <Question content={'What is your Favorite House'}></Question>
    )
  }

}

export default App;
