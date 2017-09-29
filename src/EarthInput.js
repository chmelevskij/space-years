import React from 'react'
import './EarthInput.css'

const EarthInput = ({calculateYears, earthAges}) => {
  const UNITS = ["years", "months", "weeks", "days", "hours", "minutes", "seconds"]

  let inputs = UNITS.map((unit, index) => (
    <span key={unit}> 
      <label htmlFor={unit}>{unit}</label>
      <input 
        onChange={calculateYears}
        id={unit}
        name={unit}
        value={earthAges[index][1] ? Math.floor(earthAges[index][1]) : "" }
        type="number"
        min="0"
      />
    </span>
  ))

  return (
    <form>
      {inputs}
    </form>
  )
}

export default EarthInput
