import React, { Component } from 'react';
import EarthInput from './EarthInput.js'
import YearTable from './YearTable.js'
import {ORBITS, EARTH} from './constants.js'
import './App.css';

const initialState = {
  earth: [
    ["years", ""], ["months", ""],
    ["weeks", ""], ["days", ""],
    ["hours", ""], ["minutes", ""],
    ["seconds", ""]
  ],
  planets: [
    ["Mercury", ""], ["Venus", ""],
    ["Mars", ""], ["Jupiter", ""],
    ["Saturn", ""], ["Uranus", ""],
    ["Neptune", ""], ["Pluto", ""]
  ]
}
class App extends Component {
  constructor(){
    super()
    this.state = initialState
    this.calculateYears = this.calculateYears.bind(this)
  }

  calculateYears(event){
    let {planets, earth} = this.state

    let units = event.target.name.toUpperCase()
    let value = parseInt(event.target.value, 10)

    const earthYears = value / EARTH[units]

    if(isNaN(value))  return this.setState(initialState)

    let earthAges = earth.map(unit => {
      const NAME = unit[0].toUpperCase()
      let unitDuration = Math.round( EARTH[NAME] * earthYears )
      return [unit[0], unitDuration]
    })

    this.setState({earth: earthAges})

    let ages = planets.map(planet => {
      const NAME = planet[0].toUpperCase()
      let planetAge = Math.round( earthYears / ORBITS[NAME])
      return [planet[0], planetAge]
    })

    this.setState({planets: ages})
  }

  render() {
    let {planets, earth} = this.state

    return (
      <div className="App">
        <header className="App-header">
          <div className="App-title-wrapper">
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
