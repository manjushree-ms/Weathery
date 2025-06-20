import React from 'react'
import Clouds from '../assets/Clouds.jpeg'
import Clear from '../assets/Clear.jpeg'
import Rain from '../assets/Rain.jpeg'
import Drizzle from '../assets/Drizzle.jpeg'
import Fog from '../assets/Fog.jpeg'
import Mist from '../assets/Mist.jpeg'
import Snow from '../assets/Snow.jpeg'
import Thunderstorm from '../assets/Thunderstorm.jpeg'
import Tornado from '../assets/Tornado.jpeg'


import '../styles/Style.css'
function Partone({ city, coord, wea }) {
  const images = { "Clear": Clear,
  "Clouds": Clouds,
  "Rain": Rain,
  "Drizzle": Drizzle,
  "Thunderstorm": Thunderstorm,
  "Snow": Snow,
    "Fog":Fog,
  "Tornado":Tornado,
"Mist":Mist}

  return (
    <div className="partone-container">
      <div className="weather-info">
        <div className="location">
          <i className="bi bi-geo-alt" style={{ fontSize: '32px' }}></i>
          <h1>{city}</h1>
        </div>
        <div className="desc">
          <p><b>Weather:</b> {wea.main}</p>
          <p><b>Description:</b> {wea.description}</p>
        </div>
        <div className="coord">
          <p><b>Latitude:</b> {coord.lat}</p>
          <p><b>Longitude:</b> {coord.lon}</p>
        </div>
      </div>
      <div className="weather-image">
        <img src={images[wea.main]} alt={wea.main} />
      </div>
    </div>
  )
}

export default Partone
