import React from 'react'
function Hours({ hours }) {
  return (
    <ul>
      {hours.map((item) => {
        const { hour, exercise } = item
        return (
          <li key={hour}>
            <span className="mr-10">{hour}</span>
            <span className="mr-10">{exercise}</span>
          </li>
        )
      })}
    </ul>
  )
}
export default Hours
