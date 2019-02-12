import React, { Component } from 'react';
import Search from './components/Search';
import GoogleMap from './components/GoogleMap';
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
              <Search />
            </div>
          </div>
        </section>
        <div className="bob">
          <GoogleMap />
        </div>
      </div>
    );
  }
}

export default App;