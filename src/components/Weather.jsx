import React from 'react'


export default function Weather(weatherData) {
    console.log("weatherData: ", weatherData)
    const data = weatherData.weatherData
    const refresh = () => {
        window.location.reload()
    }
    /* const date = new date.now() */
    const temp = (data.main.temp - 273.15).toFixed(0)
    const temp_min = (data.main.temp_min - 273.15).toFixed(0)
    const temp_max = (data.main.temp_max - 273.15).toFixed(0)

    return (
        <div>
            <div className="row justify-content-center ">
                <div className="card text-white bg-primary  col-md-4">
                    <div className="card-header mt-1">Weather <i className="btn text-white fa fa-refresh float-end p-1" onClick={refresh}></i></div>
                    {/* <image sc /> */}
                    <div className="card-body">
                        <h1 className="card-title">{temp} &deg;C</h1>
                        <h3 className="card-title">{temp_min}&deg;C - {temp_max}&deg;C</h3>
                        <h2 className="card-title">Location : {data.name}</h2>
                        <p className="card-text"></p>
                        <p className="card-text">Humidity : {data.main.humidity}%</p>
                        <p className="card-text">Mode : {data.weather[0].main}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
