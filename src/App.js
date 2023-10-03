import { useEffect, useRef, useState } from "react";
import { useDrag } from 'react-dnd';
import './App.css';
import Typed from "typed.js";
import Friends from "./Friends";
import { FaUser } from "react-icons/fa";
import {FaLocationDot } from "react-icons/fa6";
import {SiGooglechrome} from "react-icons/si";
import {BsWordpress} from "react-icons/bs";
import {MdEmail} from "react-icons/md";
import HorizontalSlider from './HorizontalSlider';
import Navbar from "./Navbar";





function App() {


  const items = 
    Friends.map((e) => (
        
      <FriendCard
        key={e.key}
        name={e.name}
        image={e.image}
        bio={e.bio}
      />
      
  ));

  // new section start
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Developer", "Coder", "Freelancer", "SEO Expert"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });

    return () => {
      typed.destroy();
    }
  }, [])

  function FriendCard(props){
    return(
      
        <div className="slider-content">
            <div className=" ml-12 flex flex-row items-center justify-center hover:bg-indigo-700 bg-gray-900 w-[395px] h-[250px] rounded-lg  hover:cursor-pointer " >
                <div className="hover:border-white  ease-in-out  ">
                <img className="w-32  rounded-[50%] border-4 border-indigo-700 hover:border-white" src={props.image} alt="" />
                <div className="mt-5 text-center ">
                    <p className="mt-1 font-bold text-2xl text-white">{props.name}</p>
                    <p className="mt-2 font-medium text-white">{props.bio}</p>

                </div>

                </div>
            </div>
        </div>
    )
}


  return (
    <div className="overflow-hidden" >
      <div className=" min-h-screen max-h-screen w-screen bg-[url('./images/banner.jpg')] bg-cover bg-center ">
        {/* leking ye white wala nahi hat raha hai isko hatana hai */}

      <Navbar/>


        <div className=" ml-8 ">

          <div className=" flex-col text-slate-200 w-100 inline-block mt-44 md:mt-[260px] md:ml-[130px] ">
            <p className="text-4xl font- p-2">Hello ji, My name is</p>
            <h1 className="text-6xl font-bold p-2">Baljit Singh</h1>
            <p className=" text-4xl font-semibold p-2">And I'm a <span className="text-indigo-700" ref={el} /></p>
            {/* <p className="font-normal text-4xl p-2">And I'm a Developer</p> */}
            <div>
              <button className="bg-indigo-700 rounded bg-2 p-2 my-2 mx-2 font-semibold"> Contact me</button>

            </div>
          </div>

        </div>
      </div>




      {/* about me section start */}
      <div className="w-screen md:h-[88vh] h-auto  bg-white ">

        <div className=" flex flex-col items-center justify-center mt-8">
          <h1 className="text-3xl font-bold">About me</h1>
          <div className="w-32 h-1 border-b-4 border-blue-500 mt-2 rounded-xl "></div>
          <p className="font-bold ">who i am</p>
        </div>

        <div className=" md:justify-center md:items-center mt-16 flex flex-col md:flex-row">

          <div className="md:ml-24  flex items-center justify-center">
            <img className="max-w-sm border rounded-2xl object-center object-cover" src="https://thebaljitsingh.github.io/portfolio/gallery/Baljit_maskup.jpg" alt="maskup" />
          </div>
          <div className="p-14 flex-wrap">
            <h2 className="py-2 my-2 font-bold">I'm Baljit and I'm</h2>
            <p className="text-justify">A <i>Third-year</i> engineering student, I am interested in Web Devlopment, Competative Programming, and learning new Programming Language and seeking excitng opporunies replaced to the same. In the Web Devlopment field, I am looking for being a Full Stack Web Devloper. I am also looking forward to Android Devlopment in the upcomming academic year. I'm started Open-Source Contribution. I am also freelancing on different platforms as a side hustle.</p>
            <button className="p-4 my-2 font-medium bg-indigo-700 hover:text-indigo-700 hover:bg-transparent border-2 rounded-lg border-indigo-700 w-[162px] text-white "><a href="https://www.linkedin.com/in/thebaljitsingh/">Linkdin</a></button>
          </div>
        </div>


      </div>

      {/* Experiance section start here */}
      <div className="w-full md:h-[70vh] md:h:auto h-[96vh] bg-blue-500">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mt-8">My Experiance</h1>
          <div className="w-40 h-1 border-b-4 border-white mt-4 rounded-xl"></div>
          <p className="font-semibold -mt-4 bg-blue-500  w-[100px] flex justify-center"> what i have</p>
        </div>

        <div className="flex md:items-center md:justify-center md:flex-row flex-col items-center md:mt-20 mt:0 w-34 ">
          <div className="bg-black text-white md:w-1/4 w-[460px] p-2 m-2 h-48 text-center rounded border-black">
            <div className="hover:scale-105 cursor-pointer ease-in-out duration-500 hover:text-gray-400">
              <div className="flex justify-center mt-2">
              < BsWordpress size={50}/>
              </div>
              <div className="mt-4">
              <h2 className="font-medium text-2xl my-2">Wordpress</h2>
              <p className="mt-2 text-center">From installing to building a dynamic website</p>

              </div>
              
            </div>

          </div>
          <div className="bg-black text-white md:w-1/4 w-[460px]  p-2 m-2 h-48 text-center rounded border-black " >
            <div className="hover:scale-105 cursor-pointer ease-in-out duration-500 hover:text-gray-400">
              {/* <img className="w-[65px] mx-auto -mt-1  " src="" alt="" /> */}
              <div className="flex justify-center mt-2">
              <SiGooglechrome size={50}/>
              </div>
              <div className="mt-4">
              <h2 className="font-medium text-2xl my-auto ">SEO</h2>
              <p className="mt-2 text-center">Learning and doing SEO in last 2 year website listing on Google</p>


              </div>
              
            </div>

          </div>
          <div className="bg-black text-white md:w-1/4 w-[460px] p-2 m-2 h-48 text-center rounded border-black">
            <div className="hover:scale-105 cursor-pointer ease-in-out duration-500 hover:text-gray-400">
              <div className="mt-2">
              <img className="w-[105px] justify-center mx-auto -m-4" src="https://www.inventicons.com/uploads/iconset/2438/wm/512/Responsive-Web-Design-95.png" alt="" />

              </div>
              <div className="mt-4">
              <h2 className="font-medium text-2xl">Web Design</h2>
              <p className="mt-1">Web home page layout and custome page design</p>
              </div>

            </div>

          </div>
        </div>


      </div>

      {/* My Skills Status */}
      <div className="md:w-full md:h-screen h-auto  max-w-full w-screen bg-white">
        <div className="flex flex-col items-center justify-center w-screen">
          <h1 className="text-3xl font-bold mt-8">My Skills</h1>
          <div className="w-40 h-1 border-b-4 border-blue-500 mt-4 rounded-xl"></div>
          <p className="font-semibold -mt-4 bg-white  w-[100px] flex justify-center"> what i know</p>
        </div>

        <div className="  ">
          <div className=" p-4 w-auto md:ml-20  md:flex md:items-center flex md:flex-row flex-col max-h-auto md:mt-24 mt-10 ">

          <div className=" md:w-1/2 w-auto md:ml-20 ml:10">
            <h2 className="font-medium text-2xl">My creative skills & experience</h2>
            <p className=" text-lg mt-4 md text-justify break-words">I am interested in Web Devlopment, Competative Programming, and learning new Programming Language and seeking excitng opporunies replaced to the same. In the Web Devlopment field, I am looking for being a Full Stack Web Devloper. I am also looking forward to Android Devlopment in the upcomming academic year. I'm started Open-Source Contribution. I am also trying to do freelancing on different platforms as a side hustle.
              Begning in High Schools I learned to create a website on WordPress by watching videos from YouTube(SidTalk). Simultaneously I also learned SEO.
              That skills that i have attained from the dynamic environment and college life, and I am looking forward to implementing and pushing them in any opportunity that i receive.</p>
              <button className="p-4 my-2 font-medium bg-indigo-700 hover:text-indigo-700 hover:bg-transparent border-2 rounded-lg border-indigo-700 w-[150px] text-white "><a href="/#">Read more</a></button>


          </div>

          {/* progress bars */}
          <div className=" md:ml-20 mr-20 p-4 h-auto md:w-1/2 w-full">
            
          <div class="flex justify-between mb-1">
            <span class="text-base font-medium text-black dark:text-black ">HTML</span>
            <span class="text-sm font-medium text-black dark:text-black">90%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-blue-600 h-2.5 rounded-full" style={{width: "90%"}}></div>
          </div>
          <div class="flex justify-between mb-1">
            <span class="text-base font-medium text-black dark:text-black ">CSS</span>
            <span class="text-sm font-medium text-black dark:text-black">70%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-blue-600 h-2.5 rounded-full" style={{width: "70%"}}></div>
          </div>
          <div class="flex justify-between mb-1">
            <span class="text-base font-medium text-black dark:text-black ">Javascript</span>
            <span class="text-sm font-medium text-black dark:text-black">55%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-blue-600 h-2.5 rounded-full" style={{width: "55%"}}></div>
          </div>
          <div class="flex justify-between mb-1">
            <span class="text-base font-medium text-black dark:text-black ">SQL</span>
            <span class="text-sm font-medium text-black dark:text-black">45%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-blue-600 h-2.5 rounded-full" style={{width: "45%"}}></div>
          </div>
          <div class="flex justify-between mb-1">
            <span class="text-base font-medium text-black dark:text-black ">C++</span>
            <span class="text-sm font-medium text-black dark:text-black">98%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="bg-blue-600 h-2.5 rounded-full" style={{width: "98%"}}></div>
          </div>
             

          </div>

          </div>
          
        </div>


      </div>

            {/* my friend section */}
      <div className="w-full h-[80vh]  bg-blue-400">

      <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mt-8">My College Friends</h1>
          <div className="w-56 h-1 border-b-4 border-white mt-5 rounded-xl"></div>
          <p className="font-semibold text-xl -mt-5 bg-blue-400  w-[140px] flex justify-center"> who with me</p>
        </div>

        <div className=" mx-10">     
          <div className=" flex-row mt-24 scroll-smooth "> 

          <div className="app ">
          <HorizontalSlider items={items} />
          </div>

          </div>

        </div>
        </div>
        


      {/* contact me section */}
      <div className=" bg-blue-400  w-full h-[80vh] ">
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mt-8 ">Contact me</h1>
            <div className="w-40 h-1 border-b-4 border-blue-700 mt-5 rounded-xl"></div>
            <p className="font-semibold text-xl -mt-5 bg-blue-400   w-[120px] flex justify-center"> get in touch</p>
        </div>

        <div className="flex  flex-col">
          <div className="md:ml-44 ml-24 mt-12">
            <h2 className="font-bold text-2xl ">Get in Touch</h2>
            <p className="text-xl font-normal mt-2">for any query or support so please reach out me drop me messege</p>
          </div>
            <div className=" mt-6 md:ml-44 ml-24 space-y-4 ">
              <div className="flex flex-row space-x-8 ">
                <div className="flex items-center">
                <FaUser size={30}/>
                </div>
                <div>
                <p>Name</p>
                <p>Baljit Singh</p>
                </div>
            
              </div>
              <div className="flex flex-row  space-x-8 ">
                <div className="flex items-center">
                <FaLocationDot size={30}/>
                </div>
                <div >
                <p>Address</p>
                <p>Vadodara</p>
                </div>
                
              </div>
              <div className="flex flex-row  space-x-8 ">
                <div className="flex items-center">
                <MdEmail size={30}/>
                </div>
                <div>
                <p>Email</p>
                <p>TheBaljitSinghIn@gmail.com</p>
                </div>
                
              </div>
              
            </div>

            
            <div className="md:ml-44 ml-24   mt-4">
              <button className="my-2 font-medium bg-indigo-700  hover:text-indigo-700 hover:bg-transparent border-2 p-4 rounded-lg border-indigo-700 w-[150px] text-white "><a href="https://wa.me/8709548015">Whatsapp me!</a></button>
            </div>
            
          </div>

        </div>
        <div className="bg-black  w-full h-[8vh] flex justify-center items-center" >
          <p className="font-mono text-white">Created By <a className="text-blue-500 hover:text-blue-400 ease-in-out duration-300" href="https://github.com/TheBaljitSingh">Baljit Singh</a> | © 2023 All rights reserved. </p> 


        </div>


        

      </div>


    // </div>
  );
}


export default App;
