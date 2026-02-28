import pfp from "../assets/author-image.jpg"
import { useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const nav = {
    "About me": "#about-me",
    Projects: "#projects",
    Skills: "#skills",
    Contact: "#contact",
  }

  return (
    <div id="sidebar-wrapper" className='bg-linear-to-t from-blue-700 to-cyan-500 p-10 font-bold text-2xl h-screen w-max fixed left-0 transition ease-in-out duration-300'>
      <button type="button" className="absolute top-5 -right-5" onClick={() => setIsOpen(!isOpen)} aria-controls="sidebar-wrapper">toggle</button>
      <div className="inline-block cursor-pointer " onclick={() => setIsOpen(!isOpen)}>
        <div className="w-35 h-5 bg-white mt-6 mb-6 mr-0 ml-0 transition duration-400"></div>
        <div className="w-35 h-5 bg-white mt-6 mb-6 mr-0 ml-0 transition duration-400"></div>
        <div className="w-35 h-5 bg-white mt-6 mb-6 mr-0 ml-0 transition duration-400"></div>
      </div>
      <nav className="h-full">
        <ul className="sidebar-nav [&>*]:m-3 h-full flex flex-col items-center justify-center">
          <img src={pfp} alt="Nathaniel Marin" class="rounded-full h-50 w-50" />
          {Object.entries(nav).map(([key, value]) => (
            <li key={key} class="hover:scale-110 transition ease-in-out duration-200 cursor-pointer">
              <a href={value}>{key}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar;