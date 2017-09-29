import React, { Component } from 'react';
import EarthInput from './EarthInput.js'
import YearTable from './YearTable.js'
import round from 'lodash.round'
import {ORBITS, EARTH} from './constants.js'
import './App.css'

// Required years and conversions are stored as tuples.
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

  /**
   * This is wheres magic happens.
  */
  calculateYears(event){
    // First parse the input, just break out if not a number or empty.
    let value = parseInt(event.target.value, 10)
    if(isNaN(value)) return this.setState(initialState)

    let {planets, earth} = this.state
    let units = event.target.name.toUpperCase()
    const earthYears = value / EARTH[units] // Years as my base unit.

    /**
     * Curried function to apply on conversions. 
     * consts     - tuples ot for calculations.
     * operation  - since conversion need different arithmetic.
     */
    const update = (consts, operation) => unit => {
      const NAME = unit[0].toUpperCase()
      let duration = operation(consts[NAME], earthYears)
      let unitDuration = round(duration, 4)
      return [unit[0], unitDuration]
    }

    // applying updates
    earth = earth.map(update(EARTH, (a,b) => a * b))
    planets = planets.map(update(ORBITS, (a,b) => b / a))

    // finally update our state
    this.setState({planets, earth})
  }

  render() {
    let {planets, earth} = this.state

    return (
      <div className="App">
        <header>
          <h1>Get your space age!</h1>
          <h2>Your earth age in:</h2>
          {/* This accepts age and kicks off updates */}
          <EarthInput calculateYears={this.calculateYears} earthAges={earth} />
        </header>
        <main>
          {/* View for our conversions */}
          <YearTable planets={planets} />
        </main>
      </div>
    );
  }
}

export default App
