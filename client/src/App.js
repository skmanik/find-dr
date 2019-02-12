import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    // state goes here
  }

  testThisShit() {
    console.log("Hello!");
  }

  render() {
    return (
      <div>
        <section className="hero is-medium is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Find a doctor</h1>
              <h2 className="subtitle">Enter the doctor's name to view their location on the map!</h2>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;