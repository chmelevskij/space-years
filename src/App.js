import React, { Component } from 'react';
import EarthInput from './EarthInput.js'
import YearTable from './YearTable.js'
import './App.css';

// orbital year equivalents on other planets
const ORBITS = {
  MERCURY: 0.2408467,
  VENUS: 0.61519726,
  MARS: 1.8808158,
  JUPITER: 11.862615,
  SATURN: 29.447498,
  URANUS: 84.016846,
  NEPTUNE: 164.79132,
  PLUTO: 248.00
}

// number of average units in a year
const EARTH = {
  years: 1,
  months: 12,
  weeks: 52.04, // (4 *  7 * 52 +1) / 28  since leap years every 28 years make another week
  days: 365.25,
  hours: 8766,
  minutes: 525960,
  seconds: 31557600,
}

class App extends Component {

  constructor(){
    super()

    this.state = {
      earth: [["years", 0], ["months", 0], ["weeks", 0], ["days", 0], ["hours", 0], ["minutes", 0], ["seconds", 0]],
      planets: [["MERCURY", 0], ["VENUS", 0], ["MARS", 0], ["JUPITER", 0], ["SATURN", 0], ["URANUS", 0], ["NEPTUNE", 0], ["PLUTO", 0]]
    }

    this.calculateYears = this.calculateYears.bind(this)
  }

  calculateYears(event){
    let {planets, earth} = this.state

    let units = event.target.name
    let value = parseInt(event.target.value, 10)

    const earthYears = value / EARTH[units]

    let earthAges = earth.map(unit => {
      const name = unit[0]
      let unitDuration = Math.round( EARTH[name] * earthYears )
      return [name, unitDuration]
    })

    this.setState({earth: earthAges})

    let ages = planets.map(planet => {
      const NAME = planet[0]
      let planetAge = Math.round( earthYears / ORBITS[NAME], 2)
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
          <EarthInput calculateYears={this.calculateYears} earthAges={this.state.earth} />
        </header>
        <main className="App-main">
          <YearTable planets={planets} />
        </main>
      </div>
    );
  }
}

export default App;
