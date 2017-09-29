import React from 'react'


const YearTable = ({planets}) => (

          <table>
          <thead>
            <tr>
            <td>Planet</td>
            <td>Years</td>
            </tr>
          </thead>
            <tbody>
  {planets.map(planet => (
              <tr key={planet[0]}>
                <td>{planet[0]}</td>
                <td>{planet[1]}</td>
              </tr>
            ))
  }
            </tbody>
          </table>
)

export default YearTable
