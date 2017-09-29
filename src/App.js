import React, { Component } from 'react';
import EarthInput from './EarthInput.js'
import YearTable from './YearTable.js'
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
      planets: [["MERCURY", 0], ["VENUS", 0], ["MARS", 0], ["JUPITER", 0], ["SATURN", 0], ["URANUS", 0], ["NEPTUNE", 0], ["PLUTO", 0]]
    }

    this.calculateYears = this.calculateYears.bind(this)
  }

  calculateYears(event){
    const earthYears = parseInt(event.target.value, 10)
    this.setState({earth: earthYears})
    let {planets} = this.state

    let ages = planets.map(planet => {
      const NAME = planet[0]
      let planetAge = Math.round(ORBITS[NAME] * earthYears, 2)
      return [NAME, planetAge]
    })

    this.setState({planets: ages})
  }

  render() {
    let {planets} = this.state


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Get Your Age!</h1>
          <EarthInput calculateYears={this.calculateYears} />
        </header>
        <main className="App-main">
          <YearTable planets={planets} />
        </main>
      </div>
    );
  }
}

export default App;
