import React, { Component } from 'react';
import EarthInput from './EarthInput.js'
import YearTable from './YearTable.js'
import round from 'lodash.round'
import {ORBITS, EARTH} from './constants.js'
import './App.css'

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
    let value = parseInt(event.target.value, 10)
    if(isNaN(value)) return this.setState(initialState)

    let {planets, earth} = this.state
    let units = event.target.name.toUpperCase()
    const earthYears = value / EARTH[units]

    const update = (consts, operation) => unit => {
      const NAME = unit[0].toUpperCase()
      let duration = operation(consts[NAME], earthYears)
      let unitDuration = round(duration, 4)
      return [unit[0], unitDuration]
    }

    earth = earth.map(update(EARTH, (a,b) => a * b))
    planets = planets.map(update(ORBITS, (a,b) => b / a))

    this.setState({planets, earth})
  }

  render() {
    let {planets, earth} = this.state

    return (
      <div className="App">
        <header>
          <h1>Get your space age!</h1>
          <h2>Your earth age in:</h2>
          <EarthInput calculateYears={this.calculateYears} earthAges={earth} />
        </header>
        <main>
          <YearTable planets={planets} />
        </main>
      </div>
    );
  }
}

export default App
