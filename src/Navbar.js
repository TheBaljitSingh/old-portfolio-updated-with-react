import React from "react"
import { useState } from "react"

export default function Navbar(){
 
    const [fix, setFix] = useState(false);

    function setFixed(){
         if(window.scrollY>=200){
            setFix(true);   
         }else{
            setFix(false);
         }
    }
    window.addEventListener("scroll", setFixed)
    console.log(fix);

    return(
        <div>
            
            <nav className={!fix?"w-full max-h-24 flex justify-between mx-auto items-center px-4 md:px-4 fixed top-0 bg-transparent z-50":"w-full max-h-24 flex justify-between mx-auto items-center px-4 md:px-4 fixed  top-0 bg-black ease-in-out duration-500 z-50"}>


          <div className="text-4xl text-white font-bold md:mx-10 ">
            thebaljit<span className="text-indigo-700">singh</span>

          </div>
          {/* menu ka margin me dikkat aa rahi hai. isko sabse right me karna hai */}
          <div className=" list-none md:flex md:p-4 md:ml-[300px]  text-white font-semibold text-xl hidden ">
            <ul className="mx-[10px]"><a href="/#">About</a></ul>
            <ul className="mx-[10px]"><a href="/#">Home</a></ul>
            <ul className="mx-[10px]"><a href="/#">Services</a></ul>
            <ul className="mx-[10px]"><a href="/#">Skills</a></ul>
            <ul className="mx-[10px]"><a href="/#">Team</a></ul>
            <ul className="mx-[10px]"><a href="/#">Contact</a></ul>
          </div>
          <div>
            <button className="md:hidden text-4xl text-white flex "><a href="/#">&#8801;</a></button>

          </div>
        </nav>

        </div>
    )

}