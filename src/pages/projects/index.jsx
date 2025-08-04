import React from 'react'

export const Projects = () => {
  const projectDone=[
    {
      link:"/projects/counter",
      text:"Counter"
    },{
      link:"/projects/to-do-list",
      text:"To-do list"
    },
    {
      link:"/projects/stop-watch",
      text:"Stop-Watch"
    },
    {
      link:"/projects/weather-forecastt",
      text:"Weather Forecast"
    }
  ]
  return (
    <>
    <div className='flex justify-center text-4xl '>
      <h1 className='mt-8'>
        Projects
        </h1>
        </div>
    {/* <p>Done 2 projects </p><br /> */}

    {/* <p>They are:
      <ol>
        <li>Counter</li>
        <li>StopWatch</li>
      </ol>
    </p> */}
    <div className='max-w-[900px] mx-auto '>

  <div className='bg-[#003399] text-4xl text-white rounded-full px-18 mt-8 mx-auto'>{
    projectDone.map((item,index)=>(
      <div key={index} >
        <a href={item.link}>{item.text}</a>
        </div>
    ))
    
  }
  </div>
  </div>
    </>
  )
};
