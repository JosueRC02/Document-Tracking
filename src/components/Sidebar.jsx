import { Fragment } from 'react';
import { useState} from "react";
import '../assets/css/dashboard.css'
import { useNavigate } from "react-router-dom";

import control from '../assets/img/control.png';
import logo from '../assets/img/logo.png';
import chart from '../assets/img/Chart_fill.png';
import Chat from '../assets/img/Chat.png';
import User from '../assets/img/Userr.png';
import calendar from '../assets/img/Calendar.png';
import Search from '../assets/img/Search.png';
import Chart from '../assets/img/Chart.png';
import Folder from '../assets/img/Folder.png';
import Setting from '../assets/img/Setting.png';


const Sidebar = () => {

    const navigate = useNavigate();
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", src:chart }, 
        { title: "Departamentos", src: Chart, gap: true },
        { title: "Empleados", src: User },
        { title: "Tramites", src: Folder},
        { title: "Casos", src: Chat },
        { title: "Tracking", src: Search },
        { title: "Schedule", src: calendar, gap: true },
        { title: "Setting", src: Setting },
    ];

    const pase = async (pmt1) => {
        if(pmt1 === "Dashboard"){
          console.log(pmt1);
          navigate('/Dashboard')
        }
        if(pmt1 === "Departamentos"){
          console.log(pmt1);
          navigate('/Departamento')
        }
        if(pmt1 === "Empleados"){
          console.log(pmt1);
          navigate('/Empleados')
        }
        if(pmt1 === "Tramites"){
            console.log(pmt1);
            navigate('/Tramite')
        }
        if(pmt1 === "Casos"){
            console.log(pmt1);
            navigate('/CasosAbiertos')
        }
      }

    return (
        <Fragment>
            <div className={` ${
                open ? "w-72" : "w-20 "
                } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
            >
                <img
                src={control} alt ="control"
                className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
                border-2 rounded-full  ${!open && "rotate-180"}`}
                onClick={() => setOpen(!open)}    
                />
                <div className="flex gap-x-4 items-center">
                <img
                    src={logo}
                    className={`cursor-pointer duration-500 ${
                    open && "rotate-[360deg]"
                    }`} alt="logo"
                />
                <h1
                    className={`text-white origin-left font-medium text-xl duration-200 ${
                    !open && "scale-0"
                    }`}
                >
                    Document Tracking
                </h1>
                </div>
                <ul className="pt-6">
                {Menus.map((Menu, index) => (
                    <li
                    key={index}
                    className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                    ${Menu.gap ? "mt-9" : "mt-2"} ${
                        index === 0 && "bg-light-white"
                    } `}
                    >
                    <img src={Menu.src} alt="menu" onClick={() => pase(Menu.title)}/>
                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                        {Menu.title}
                    </span>
                    </li>
                ))}
                </ul>
            </div>
        </Fragment>
    );
}

export default Sidebar;