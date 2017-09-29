import React, { Component } from 'react';
import './App.css';

const ORBITS = {
      EARTH: 365.25,
      MERCURY: 0.2408467,
      VENUS: 0.61519726,
      MARS: 1.8808158,
      JUPITER: 11.862615,
      SATURN: 29.447498,
      URANUS: 84.016846,
      NEPTUNE: 164.79132,
      PLUTO: 248.00
    }

class App extends Component {

  constructor(){
    super()
    this.state = {
      earth: 0,
      mercury: 0,
      venus: 0,
      mars: 0,
      jupiter: 0,
      saturn: 0,
      uranus: 0,
      neptune: 0,
      pluto: 0
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Get Your Age!</h1>
        </header>
          <main>
            <label for="earth">Earth years</label>
            <input id="earth" type="number" min="0"/>
          </main>
      </div>
    );
  }
}

export default App;
