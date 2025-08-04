import React from 'react'

export const Home = () => {
  return (
    <>
    <div >Home</div>

      <div className='flex justify-center text-3xl m-4' >
        <p>Hey!there it's Akash Aryal !</p>       
      </div>

      <div className='flex items-center  max-w-[1168px] mx-auto bg-[#003399] text-white justify-items-center rounded-full p-10 '>
        <div className='flex flex-1 w-[100%] h-[100%]  px-2 rounded-full'>
           <img src="11.jpeg" alt=""   className='rounded-full'/>
        </div>
        <div className=' flex-1 text-xl '>
         <li>I'm a CSIT 4th semester student with a strong passion for React development.</li>
          <li>I enjoy building dynamic, user-friendly web applications and continuously exploring new technologies in the React ecosystem.</li>
            <li> I'm driven by curiosity and a desire to create efficient, scalable front-end solutions through clean code and modern development practices. </li>

        </div>
      </div>


    </>
  )
};
