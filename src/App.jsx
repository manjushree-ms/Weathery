import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Parttwo from './components/Parttwo';
import Partone from './components/Partone';
import Partthree from './components/Partthree';
import axios from 'axios';

function App() {
  const [w, setw] = useState({});
  const [city, setcity] = useState("London");

  async function getw() {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cfa59889722018f05e0f555c6de0e348&units=metric`
    );
    setw(data);
  }

  function getcity(c) {
    setcity(c);
  }

  useEffect(() => {
    getw();
  }, [city]);

  return (
    <div>
      <Header handlesearch={getcity} />
      {w.weather ? (
        <div>
          <Partone city={city} coord={w.coord} wea={w.weather[0]} />
          <Parttwo main={w.main} />
          <Partthree wind={w.wind} />
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default App;
