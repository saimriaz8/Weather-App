import React from "react";

export default function Result({ weatherdata }) {

    return (

        <div className="container shadow my-5 py-4 result">
            {
                weatherdata.length !== 0
                    ?
                    <>
                        <h1 className="city">{weatherdata.name}</h1>
                        <div className="temperature my-4">
                            <h6>Feels like:{weatherdata.main.feels_like} </h6>
                            <h6>Humidity: {weatherdata.main.humidity}</h6>
                        </div>
                        <div className="temperature my-4">
                            <h6>Temperature: {weatherdata.main.temp}</h6>
                            <h6>Pressure: {weatherdata.main.pressure}</h6>
                        </div>
                        <div className="temperature my-2">
                            <img src={`https://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png`} alt=""/>
                            <h6>{weatherdata.weather[0].main}</h6>
                        </div>
                    </>
                    :
                    <>
                        <h4 className="enter-city">Enter your City to get Weather</h4>
                    </>
            }
        </div>
    )
}