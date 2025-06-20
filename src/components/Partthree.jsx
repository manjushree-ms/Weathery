import React from 'react'
import '../styles/Style.css'

function Partthree({ wind }) {
  return (
    <div className="cards-container">
      <div className="card-box">
        <i className="bi bi-wind"></i>
        <p><b>Wind Speed</b></p>
        <p>{wind.speed} m/s</p>
      </div>
    </div>
  )
}

export default Partthree
