import React from 'react'
import '../styles/Style.css'

function Parttwo({ main }) {
  return (
    <div className="cards-container">
      <div className="card-box">
        <i className="bi bi-thermometer-half"></i>
        <p><b>Temperature</b></p>
        <p>{main.temp} K</p>
      </div>

      <div className="card-box ">
        <i className="bi bi-droplet-half"></i>
        <p><b>Humidity</b></p>
        <p>{main.humidity}%</p>
      </div>

      <div className="card-box">
        <i className="bi bi-speedometer2"></i>
        <p><b>Pressure</b></p>
        <p>{main.pressure} hPa</p>
      </div>

      {main.sea_level && (
        <div className="card-box">
          <i className="bi bi-water"></i>
          <p><b>Sea Level</b></p>
          <p>{main.sea_level} hPa</p>
        </div>
      )}
    </div>
  )
}

export default Parttwo;
