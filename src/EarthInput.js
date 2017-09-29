import React from 'react'
import './EarthInput.css'

const EarthInput = ({calculateYears, earthAges}) => {
  const UNITS = ["years", "months", "weeks", "days", "hours", "minutes", "seconds"]

  let inputs = UNITS.map((unit, index) => (
      <span key={unit} className="Earth-unit">
        <label htmlFor={unit}>Earth {unit}</label>
        <input onChange={calculateYears} id={unit} name={unit} value={earthAges[index][1]} type="number" min="0"/>
      </span>
  ))
  return (
    <form className="Earth">
      {inputs}
    </form>
  )
}

export default EarthInput
