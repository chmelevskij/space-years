import React from 'react'
import './EarthInput.css'

const EarthInput = ({calculateYears}) => {
  const UNITS = ["years", "months", "weeks", "days", "hours", "minutes", "seconds"]

  let inputs = UNITS.map(unit => (
      <span key={unit} class="earth-unit">
        <label htmlFor={unit}>Earth {unit}</label>
        <input onChange={calculateYears} id={unit} type="number" min="0" max="150"/>
      </span>
  ))
  return (
    <form>
      {inputs}
    </form>
  )
}

export default EarthInput
