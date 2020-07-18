import React from 'react'
import Hours from './Hours'
function Days({ exerciseData }) {
  return (
    <ul className="text-center">
      {exerciseData.map((item) => {
        const { day, hours } = item
        return (
          <li key={day}>
            <span className="fw-700 fs-20">{day}</span>
            <Hours hours={hours}></Hours>
          </li>
        )
      })}
    </ul>
  )
}
export default Days
