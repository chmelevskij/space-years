import React from 'react'
import './EarthInput.css'

const EarthInput = ({calculateYears}) => (
  <form>
    <label htmlFor="earth-years">Earth years</label>
    <input onChange={calculateYears} id="earth-years" type="number" min="0" max="150"/>

    <label htmlFor="earth-months">Earth months</label>
    <input onChange={calculateYears} id="earth-months" type="number" min="0" max="150"/>

    <label htmlFor="earth-weeks">Earth weeks</label>
    <input onChange={calculateYears} id="earth-weeks" type="number" min="0" max="150"/>

    <label htmlFor="earth-days">Earth days</label>
    <input onChange={calculateYears} id="earth-days" type="number" min="0" max="150"/>

    <label htmlFor="earth-hours">Earth hours</label>
    <input onChange={calculateYears} id="earth-hours" type="number" min="0" max="150"/>

    <label htmlFor="earth-minutes">Earth minutes</label>
    <input onChange={calculateYears} id="earth-minutes" type="number" min="0" max="150"/>

    <label htmlFor="earth-seconds">Earth seconds</label>
    <input onChange={calculateYears} id="earth-seconds" type="number" min="0" max="150"/>
  </form>
)

export default EarthInput
