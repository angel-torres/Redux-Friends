import React, { Component } from 'react';
import Friends from './components/Friends'
import AddFriendForm from './components/AddFriendForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddFriendForm />
        <Friends />
      </div>
    );
  }
}

export default App;
