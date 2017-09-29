import React, { Component } from 'react';
import round from 'lodash.round'
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
    const earthYears = parseInt(event.target.value)
    this.setState({earth: earthYears})
    let {planets} = this.state

    let ages = planets.map(planet => {
      const NAME = planet[0]
      let planetAge = round(ORBITS[NAME] * earthYears, 2)
      return [NAME, planetAge]
    })

    this.setState({planets: ages})
  }

  render() {
    let {planets} = this.state

    let planetRows = planets.map(planet => (
              <tr key={planet[0]}>
                <td>{planet[0]}</td>
                <td>{planet[1]}</td>
              </tr>
            ))

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Get Your Age!</h1>
        </header>
          <main>
            <label htmlFor="earth-years">Earth years</label>
            <input onChange={this.calculateYears} id="earth-years" type="number" min="0" max="150"/>

            <label htmlFor="earth-months">Earth months</label>
            <input onChange={this.calculateYears} id="earth-months" type="number" min="0" max="150"/>

            <label htmlFor="earth-weeks">Earth weeks</label>
            <input onChange={this.calculateYears} id="earth-weeks" type="number" min="0" max="150"/>

            <label htmlFor="earth-days">Earth days</label>
            <input onChange={this.calculateYears} id="earth-days" type="number" min="0" max="150"/>

            <label htmlFor="earth-hours">Earth hours</label>
            <input onChange={this.calculateYears} id="earth-hours" type="number" min="0" max="150"/>

            <label htmlFor="earth-minutes">Earth minutes</label>
            <input onChange={this.calculateYears} id="earth-minutes" type="number" min="0" max="150"/>

            <label htmlFor="earth-seconds">Earth seconds</label>
            <input onChange={this.calculateYears} id="earth-seconds" type="number" min="0" max="150"/>
          <table>
          <thead>
            <tr>
            <td>Planet</td>
            <td>Years</td>
            </tr>
          </thead>
            <tbody>
            {planetRows}
            </tbody>
          </table>
          </main>
      </div>
    );
  }
}

export default App;
