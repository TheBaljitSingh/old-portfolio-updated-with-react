import React from "react"
import { useState } from "react"

export default function Navbar(){
 
    const [fix, setFix] = useState(false);
    const [menu, setMenu] = useState(false);

    function setFixed(){
         if(window.scrollY>=150){
            setFix(true);   
         }else{
            setFix(false);
         }
    }
    window.addEventListener("scroll", setFixed)

  

    const handleMenu = ()=>{
        setMenu(!menu);
    }

    return(
        <div>
            <div>
                { menu ? 
                <div className="w-full bg-gray-500 h-screen fixed z-50 ">
                    <div className="">
                    <div className=" absolute top-6 text-4xl text-white font-bold mx-3 ">
                    thebaljit<span className="text-indigo-700">singh</span>
                    
                    </div>
                    <div className=" absolute top-6 right-4 block">
                                <button onClick={handleMenu} className=" text-4xl text-black flex justify-between sm:hidden "><a href="/#">&#8801;</a></button>
                    </div>
                    
                    </div>
                    <div className="flex flex-col items-center justify-center p-9 ">
                        
                        <div className=" mt-8 font-medium text-2xl text-center text-black">
                            
                            
                        <ul className="menu-btn"><a href="/#">Home</a></ul>
                        <ul className="menu-btn"><a href="/#">About</a></ul>
                        <ul className="menu-btn"><a href="/#">Services</a></ul>
                        <ul className="menu-btn"><a href="/#">Skills</a></ul>
                        <ul className="menu-btn"><a href="/#">Team</a></ul>
                        <ul className="menu-btn"><a href="/#">Contact me</a></ul>
                        </div>
                    </div>

            </div>:
            <nav className={!fix?"w-full md:max-h-24 flex justify-between mx-auto items-center px-4 h-20 :px-4 fixed top-0 bg-transparent z-50 ":"w-full max-h-24 flex justify-between mx-auto items-center px-4 md:px-4 fixed  top-0 bg-black h-20 ease-in-out duration-150 z-50"}>


            <div className="mt-2 text-4xl text-white font-bold md:mx-10 ">
              thebaljit<span className="text-indigo-700">singh</span>
  
            </div>
            {/* main menu ye wala hai */}
            {/* menu ka margin me dikkat aa rahi hai. isko sabse right me karna hai */}
            <div className=" list-none md:flex  md:justify-between md:p-4 md:ml-[300px]  text-white font-semibold text-xl hidden ">
              <ul className="mx-[10px]"><a href="/#">About</a></ul>
              <ul className="mx-[10px]"><a href="/#">Home</a></ul>
              <ul className="mx-[10px]"><a href="/#">Services</a></ul>
              <ul className="mx-[10px]"><a href="/#">Skills</a></ul>
              <ul className="mx-[10px]"><a href="/#">Team</a></ul>
              <ul className="mx-[10px]"><a href="/#">Contact</a></ul>
            </div>
            <div>
              <button  id="menu" onClick={handleMenu} className=" text-4xl mt-2 text-white flex md:hidden "><a href="/#">&#8801;</a></button>
  
            </div>
          </nav>

                 }
            </div>
            
            

        </div>
    )

}