import react, { useState, useEffect } from 'react';
import './App.css';
import Weather from './components/Weather';

function App() {
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);
  const [data, setData] = useState([]);
  let componentMounted = true;


  const getData = async () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLon(position.coords.longitude)
      setLat(position.coords.latitude)
      console.log("lon: ", lon)
      console.log("lat: ", lat)
    })
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1287278a5c47699e866e4e7fab9b9304`);
    if (componentMounted) {
      setData(await response.json())
      console.log("data: ", data)
    }

  }
  useEffect(async () => {

    getData();
    return () => {
      componentMounted = false;
    }
  }, [lon, lat])

  console.log(data)
  return (
    <div className="container">
      {(typeof data.main !== 'undefined') ? <Weather weatherData={data} /> : <div>Loading.....</div>}
    </div>
  );
}

export default App;
