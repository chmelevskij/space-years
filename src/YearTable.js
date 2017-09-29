import React from 'react'
import './YearTable.css'

const YearTable = ({planets}) => (
  <table>
    <thead>
      <tr>
        <td><h3>Planet</h3></td>
        <td><h3>Years</h3></td>
      </tr>
    </thead>
    <tbody>
      {
        planets.map(planet => (
          <tr key={planet[0]}>
            <td>{planet[0]}</td>
            <td>{Math.floor(planet[1])}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
)

export default YearTable
