import { useState } from "react"

    let count=0;

export function Navbar({setCity}) {

        const [temp_city,set_temp_city]=useState("banglore");

             console.log(++count);

    return (

        <div className="flex justify-between items-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-500 hover:to-blue-600 h-16 px-4 py-2 rounded-lg shadow-lg">

            <div className="flex items-center gap-4 text-white">
                <div className="text-lg font-bold">My Weather App</div>
                <div onClick={(e)=>{
                       setCity(e.target.innerHTML)
                }} className=" text-sm hover:text-yellow-300 transition duration-300 cursor-pointer">New York</div>
                <div onClick={(e)=>{
                       setCity(e.target.innerHTML)
                }} className="text-sm hover:text-yellow-300 transition duration-300 cursor-pointer">Mumbai</div>
                <div onClick={(e)=>{
                       setCity(e.target.innerHTML)
                }} className="text-sm hover:text-yellow-300 transition duration-300 cursor-pointer">Kolkata</div>
                <div onClick={(e)=>{
                       setCity(e.target.innerHTML)
                }} className="text-sm hover:text-yellow-300 transition duration-300 cursor-pointer">Chennai</div>
                <div onClick={(e)=>{
                       setCity(e.target.innerHTML)
                }} className="text-sm hover:text-yellow-300 transition duration-300 cursor-pointer">Noida</div>
            </div>

            <div className="flex justify-between gap-2">
                <input onChange={(e)=>{
                      set_temp_city(e.target.value);
                }} type="text" placeholder="Enter city name" className="px-2 py-1 border border-gray-500 rounded-md text-gray-800 focus:outline-none focus:border-blue-500" />
                  <div><button onClick={(e)=>{
                       setCity(temp_city);
                  }} className="px-2 py-1   rounded-md text-gray-800 focus:outline-none focus:border-blue-500 text-slate-100 border borde-white-600"  >Submit</button></div> 
            </div>


        </div>


    )

}