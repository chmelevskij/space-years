import React, { Component } from 'react';
import EarthInput from './EarthInput.js'
import YearTable from './YearTable.js'
import {ORBITS, EARTH} from './constants.js'
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      earth: [
        ["years", 0], ["months", 0],
        ["weeks", 0], ["days", 0],
        ["hours", 0], ["minutes", 0],
        ["seconds", 0]
      ],
      planets: [
        ["MERCURY", 0], ["VENUS", 0],
        ["MARS", 0], ["JUPITER", 0],
        ["SATURN", 0], ["URANUS", 0],
        ["NEPTUNE", 0], ["PLUTO", 0]
      ]
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
    let {planets, earth} = this.state

    return (
      <div className="App">
        <header className="App-header">
          <div class="App-title-wrapper">
            <h1 className="App-title">Get your space age!</h1>
            <h2>Your earth age in:</h2>
          </div>
          <EarthInput calculateYears={this.calculateYears} earthAges={earth} />
        </header>
        <main className="App-main">
          <YearTable planets={planets} />
        </main>
      </div>
    );
  }
}

export default App;
