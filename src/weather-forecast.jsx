// import React, { useState } from 'react'

// export const WeatherForecast = () => {
//     const[city,setCity]=useState('');
//     const[weather ,setWeather]=useState(null);
//     const[error,setError]=useState('');

//     const apiKey = '';

//     const getWeather = async()=>{
//         if (!city)return;

//         try{
//             const res=await fetch(

//             );
//             if(!res.ok)throw new Error ('City not found');
//             const data =await res.json();
//             setWeather(data);
//             setError('');

//         }catch (err){
//             setWeather(null);
//             setError('City not found');
//         }
//     };

//   return (
//     <div>

//     <div className='max-full  max-w-[900px] mx-auto bg-amber-200 mt-12 rounded-full  '>
//         <div className='text-4xl flex justify-center '>
//             <h1 className='bg-[#003399] text-white rounded-full px-10 mt-8'>WeatherForecast</h1>
//         </div>
//         <div className='flex max-w-[900px] max-auto justify-center mt-8 text-2xl'>
//             <input type="text"
//             onChange={(e)=> setCity(e.target.value)}
//             placeholder='Enter the city name '
//             />
//             <button onClick={getWeather} className='bg-[#003399] text-white rounded-full px-10'>Get Forecast</button>
//         </div>

//      <div>
//         <h2>16</h2>
//      </div>

//     </div>
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";

export const WeatherForecast = () => {
  const api = import.meta.env.VITE_API_KEY;
  // console.log(api);

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const getWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=27.70&lon=85.30&appid=${api}`,
        );
        const data = await res.json();
        setWeather(data);
        console.log(data);
      } catch (error) {
        setWeather(null);
        setError("Error");
      }
    };
    getWeather();
  }, [api]);

  return (
    <div>
      <div className="flex justify-center mt-12">
        <h1 className="text-4xl  bg-[#003399] text-white rounded-full px-12 py-4 ">
          WeatherForecast
        </h1>
      </div>

      <div className="flex justify-center bg-[#003399] text-white w-full max-w-[900px] mx-auto rounded-full mt-12 py-12">
        <div>
          <div>
            <input
              type="text"
              className="text-white"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter the city"
            />
            {/* <button onClick={getWeather}>Search</button> */}
            <button>Search</button>
          </div>

          <div>
            <h1>{weather?.main?.temp}</h1>
            <p>{weather?.sys?.country}</p>
          </div>
          <div className="flex gap-4">
            <div>
              <p>67%</p>
              <p>Humidity</p>
            </div>
            <div>
              <p>0.05 km/hr</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
