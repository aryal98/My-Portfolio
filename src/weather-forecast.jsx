// import React, { useState } from 'react'

// export const WeatherForecast = () => {
//     const [city,setCity]=useState('');
//     const [weather,setWeather]=useState(null);
//     const[error, setError]=useState('');

//     const apiKey='https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}';

//     const getWeather =async()=>{
//         if(!city) return;

//         try{
//             const res=await fetch(

//             );
//             if(!res.ok) throw new Error('City not found');
//             const data =await res.json();
//             setWeather(data);
//             setError('');

//         }catch(err){
//             setWeather(null);
//             setError('City not found');

//         }

//     };
//   return (
//     <div>
//         <div>
//             <h1>Weather Forecast</h1>
//         </div>
//         <div>
//             <input type="text" />
//             <button>Get Forecast</button>
//         </div>
        
//     </div>
//   )
// }

