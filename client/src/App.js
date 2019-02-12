import React, { Component } from 'react';
import Search from './components/Search';
import GoogleMap from './components/GoogleMap';
import './App.css';

class App extends Component {
  state = {
    address: '',
  }

  foundDoctor = doctorAddress => {
    this.setState({ address: doctorAddress });
  }

  render() {
    return (
      <div>
        <section className="hero is-medium is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Find a doctor</h1>
              <Search foundDoctor={this.foundDoctor} />
            </div>
          </div>
        </section>
        <GoogleMap address={this.state.address} />
      </div>
    );
  }
}

export default App;