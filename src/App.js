import './App.css';
import Search from './Component/Search'
import Result from './Component/Result'
import { useState } from 'react';
import axios from 'axios';

function App() {
   const [search , setSearch]= useState("");
   const [weather , setWeather]=useState([]);

   const entername =(value) =>{
     setSearch(value);
   }

   const searchWeather = () => {
    if (search !== ""){
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric`
      )
      .then(
        (response)=>{
          // console.log(response);
          setWeather(response.data)
        }
      )
      .catch(
        (error)=>{
          console.log(error);
        }
      )
    }
   }

  return (
    <div className="App landing">
      <h1 className='headline py-5'>Weather App</h1>
      <Search searchdata={search} eventHandler={entername}  searchweatherHandler={searchWeather}/>
      <Result  weatherdata={weather}/>
    </div>
  );
}

export default App;
