import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import MenuBar from './menu-bar'
import { About } from './pages/about'
import { Games } from './pages/games'
import { Home } from './pages/home'
import { Projects } from './pages/projects'
import { Counter } from './counter'
import { StopWatch } from "./stop-watch"
import { ToDoList } from './to-do-list'
// import { WeatherForecast } from './weather-forecast'
// import { ToDoList } from './to-do-list' 



function App() {
 

  return (
    <>
    
 <Router>
  <MenuBar/>
  <Routes>
  <Route index element={<Home/>} />
  <Route path='/projects' element={<Projects/>} />
  <Route path='/projects/counter' element={  <Counter/>}/>
  <Route path='/projects/stop-watch' element={<StopWatch/>}/>
  {/* <Route path='/projects/weather-forecast' element={<WeatherForecast/> }/> */}
  <Route path='/projects/to-do-list'element={<ToDoList/>}/>
  

  <Route path='/about' element={<About/>}/>
  <Route path='/games' element={<Games/>}/> 
  </Routes>
 </Router>
    </>
    
  )
}

export default App;
