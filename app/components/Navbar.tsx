"use client"

import redcircle from "@/assets/images/redcircle.png";
import { IoMenu, IoClose } from "react-icons/io5";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";

const Navbar = () => {

    const tl = gsap.timeline({
        paused: true
    });
    useGSAP(() => {
        tl.to("#menu",{
            duration: 1,
            
            y:"0%",
            ease: "expo.inOut"
        });
        tl.fromTo("#li",{
            y:"-100%",
            opacity: 0
        },{
            duration: .2,
            opacity: 1,
            y: "0%",
            stagger: 0.15
        });
    });

 

  return (
    <header className="w-full py-5 px-5 flex justify-between items-center" style={{backgroundColor:"#f5f5f7"}}>
      <nav className="flex w-full">
        <img src={redcircle.src} alt="Logo" width={20} height={20} />

        <div className="flex flex-1 justify-end max-md:hidden">
          {["home", "about", "faq", "giveaways", "discounts", "buzz band", "login", "signup"].map((nav) => (
            <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-red-400 transition-all">
              {nav}
            </div>
          ))}
        </div>

        <div className="flex flex-1 justify-end md:hidden" onClick={() => tl.play()}>
          <IoMenu size={20}/>
        </div>

        <div id="menu" className="px-5 py-5 z-50" style={{position:"absolute", top:0, left:0, width: "100%", height:"100vh", backgroundColor:"#f5f5f7", transform:"translateY(-100%)"}}>
        <div className="flex flex-1 justify-end"  onClick={() => tl.reverse()}>
          <IoClose size={20}/>
        </div>
        <ul id="ul">
            <li id="li"><a href="#" style={{fontSize:"30px"}}>home</a></li>
            <li id="li"><a href="about" style={{fontSize:"30px"}}>about</a></li>
            <li id="li"><a href="faq" style={{fontSize:"30px"}}>faq</a></li>
        </ul>
    </div>
      </nav>
    </header>
  )
}

export default Navbar