import React from "react";
import { NavLink } from "react-router-dom";

const MenuBar = () => {
  const navLink = [
    {
      link: "/",
      text: "Home",
    },

    {
      link: "/projects",
      text: "Projects",
      submenu: [
        {
          link: "/projects/Counter",
          text: "Counter",
        },
        {
          link: "/projects/to-do-list",
          text: "To-do List",
        },
        {
          link: "/projects/stop-watch",
          text: "StopWatch",
        },
        {
          link: "/projects/weather-forecast",
          text: "Weather Forecast",
        },
      ],
    },
    {
      link: "/About",
      text: "About",
    },
    {
      link: "/Games",
      text: "Games",
    },
  ];

  return (
    <div className="bg-[#003399] flex justify-between text-white m-auto p-8">
      <h1>Akash's Portfolio</h1>

      <div>
        <div className="flex gap-14">
          {navLink.map((item, index) => (
            <div key={index} className="relative group">
              <NavLink to={item.link} className="py-4">
                {item.text}
              </NavLink>

              {item.submenu && (
                <div className="absolute top-full left-0 bg-white text-black mt-2 p-2 rounded shadow hidden group-hover:block">
                  {item.submenu.map((subItem, subIndex) => (
                    <NavLink
                      key={`${index}-${subIndex}`}
                      to={subItem.link}
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      {subItem.text}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
//     <div className='bg-[#003399] flex justify-between text-white m-auto p-8'>
//         <h1 >
//             Akash's Portfolio
//         </h1>
//         <div>
//             <div className='flex gap-14'>
//                 {
//                     navLink.map((item,index) => (
//                         <div key={index} className="relative group">

//                         <NavLink  to={item.link}>{item.text}</NavLink>
//                 {
//                     item.submenu && (
//                         <div className="absolute">{
//                         item.submenu.map((subItem,subIndex) => (
//                             <NavLink key={subIndex} to={subItem.link}>{subItem.text}</NavLink>
//                         )   )}</div>
//                     )
//                 } </div>
//                     ))
//                 }

//             </div>
//         </div>

//         {/* <ul>
//             <li className='flex gap-14' >
//                 <NavLink to="#">Home</NavLink>
//                 <NavLink to="#">About</NavLink>
//                 <NavLink to="#">Projects
//                     <li>Counter</li>
//                     <li>StopWatch</li>
//                     <li>Weather Forecast</li>

//                 </NavLink>
//             </li>
//         </ul> */}
//     </div>

//   );
// };
export default MenuBar;
