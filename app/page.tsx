"use client"

import Navbar from "./components/Navbar";
import Plans from "./components/Plans";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import BuzzBand from "./components/BuzzBand";
import { OrbitControls } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";
import Lights from "./components/Lights";
import { LinearGradient } from 'react-text-gradients'
import {ScrollTrigger} from "gsap/all";
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3 } from "react-icons/tb";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useGSAP(
    () => {
      gsap.to("#caption", {opacity:1, delay:0.5});

      gsap.to("#textani", {
        scale: 0.8,
        scrollTrigger: {
          trigger: "#textani",
          start:"top bottom",
          end:"bottom center",
          scrub: true, 
        },
        ease: "power1.inOut",
      });

      gsap.to("#instructions", {
        y:-50,
        scrollTrigger: {
          trigger: "#instructions",
          start:"top 60%",
          end:"bottom 80%",
          scrub: true, 
        },
        ease: "power1.inOut",
        stagger:0.2
      });

      gsap.to("#textani2", {
        scale: 0.8,
        scrollTrigger: {
          trigger: "#textani2",
          start:"top bottom",
          end:"bottom center",
          scrub: true, 
        },
        ease: "power1.inOut",
      });

      ScrollTrigger.create({
        trigger:"#gclass-holder",
        start:"-0.1% top",
        end:"bottom bottom",
        onEnter: () => {
          gsap.set("#gclass-holder", {position:"fixed", top:"0", zIndex:"-50"});
        },
        onLeaveBack: () => {
          gsap.set("#gclass-holder", {position:"relative"});
        }
      })

      gsap.to("#gclass", {
        rotation:0,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        scrollTrigger: {
          trigger:"#gclass",
          start:"top top",
          end:"+=200%",
          scrub: true, 
        },
        ease:"power2.inOut",
      });

      gsap.to("#textani3", {
        scale: 0.8,
        scrollTrigger: {
          trigger: "#textani3",
          start:"top bottom",
          end:"bottom center",
          scrub: true, 
        },
        ease: "power1.inOut",
      });

      gsap.to("#textani4", {
        scale: 0.8,
        scrollTrigger: {
          trigger: "#clear-box",
          start:"top bottom",
          end:"40% center",
          scrub: true, 
        },
        ease: "power1.inOut",
      });
    }
  );

  return (
    <div className="overflow-hidden">
      <Navbar/>

      <div className="" style={{height:"100vh"}}>
        <video style={{position:"relative", top:"0"}} width="100%" height="100%" className="pointer-events-none -z-50" autoPlay muted loop>
          <source src="/bg-slowed.mp4" type="video/mp4" />
        </video>
        {/*<div id="caption" style={{opacity: "0", position:"absolute", left:"0", top:"50%", width:"100%", textAlign:"center"}}>
          <span style={{borderRadius:"20px", padding:"18px", fontSize:"20px", letterSpacing:"1px"}} className="text-white bg-red-400">See what everyone's Buzzing about</span>
        </div>*/}
        <div id="caption" className="justify-self-center" style={{opacity:"0", position:"absolute", left:"0", top:"50%", width:"100%", textAlign:"center"}}>
          <p className="text-7xl font-extrabold text-center" >
            <LinearGradient gradient={['to left', '#e3671e ,#6e56cd']}>
              it all begins with a Buzz
            </LinearGradient>
          </p>
        </div>
      </div>

      <div className="bg-white">
        <div id="textani" className="justify-self-center" >
          <p> <br/></p>
          <p className="text-9xl font-extrabold text-center mt-32" >
            <LinearGradient gradient={['to left', '#f87171 ,#a30000']}>
              meet the <br/>Buzz Band
            </LinearGradient>
          </p>
        </div>

        <div className="w-full h-[75vh] overflow-hidden relative">
          <Canvas>
            <ambientLight/>
            <PerspectiveCamera makeDefault position={[4,4,4]} />
            <Lights/>
            <OrbitControls enableZoom={false} autoRotate={true}/>
            <group position={[0,-0.5,0]}>
            <Suspense fallback={null}>
              <BuzzBand scale={[0.05,0.05,0.05]}/>
            </Suspense>
            </group>
          </Canvas>
        </div>

        <div  className=" py-24 px-8 max-md:hidden justify-items-center">
          <div  className="w-full relative flex justify-center flex-row gap-8">
            <div id="instructions" className="w-3/12 relative items-center flex flex-col h-full gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-xl">
              <TbCircleNumber1 size={50} color="#f87171"/>
              <p className={`text-4xl tracking-tight text-black font-extrabold`}>preferences</p>
              <p>Complete your profile and describe your ideal partner! Your selection is programmed into the Buzz Band.</p>
            </div>

            <div id="instructions" className="w-3/12 relative h-full items-center flex flex-col gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-xl">
              <TbCircleNumber2 size={50} color="#f87171"/>
              <p className={`text-4xl tracking-tight text-black font-extrabold`}>wear</p>
              <p>Wear your Buzz Band and move around to the places you love!</p>
            </div>

            <div id="instructions" className="w-3/12 relative items-center flex flex-col h-full gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-xl">
              <TbCircleNumber3 size={50} color="#f87171"/>
              <p className={`text-4xl tracking-tight text-black font-extrabold`}>match</p>
              <p>You Buzz Band will buzz when you find a match within a 6 feet radius. All matches are based on an AI matching algorithm!</p>
            </div>
          </div>
          <button className="bg-blue-500 rounded-xl px-5 text-white"> join the waitlist </button>
        </div>

        <div id="textani2" className="justify-self-center" >
          <p><br/></p>
          <p className="text-9xl font-extrabold text-center mt-32" >
            <LinearGradient gradient={['to bottom', '#f87171 ,#34207d']}>
              but that's <br/> not all
            </LinearGradient>
          </p>
        </div>

        <div  className="justify-self-center" >
          <p><br/></p>
          <p className="text-5xl font-extrabold text-center mt-32" >
            <LinearGradient gradient={['to left', '#6b4fdc ,#34207d']}>
              as a Buzz Member...<br/> you can...
            </LinearGradient>
          </p>
        </div>

        <div id="textani3" className="justify-self-center" >
          <p><br/></p>
          <p className="text-9xl font-extrabold text-center mt-32" >
            <LinearGradient gradient={['to left', '#6b4fdc ,#34207d']}>
              WIN BIG
            </LinearGradient>
          </p>
        </div>

        <div  className="justify-self-center" >
          <p><br/></p>
          <p className="text-5xl font-extrabold text-center mt-32" >
            <LinearGradient gradient={['to left', '#6b4fdc ,#34207d']}>
              through our giveaways
            </LinearGradient>
          </p>
        </div>

      </div>
      <div className="bg-transparent" style={{height:"40vh", width:"100%"}}>
      </div>
        <div id="gclass-holder" className="z-0" style={{ width:"100%", height:"100vh"}}>
          <div id="gclass" style={{height:"100vh", width:"100%", transform:"" ,clipPath:"polygon(37.5% 20%, 62.5% 20%, 62.5% 80%, 37.5% 80%)"}}>
            <video style={{position:"relative",  objectFit:"cover"}} width="100%" height="100%" className="pointer-events-none" autoPlay muted loop>
              <source src="/gclass.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div  className="bg-transparent" style={{height:"200vh", width:"100%"}}>
        </div>
        <div id="clear-box" className="bg-transparent" style={{height:"100vh", width:"100%"}}>
        </div>
        <div className="bg-white">
        <div id="textani4" className="justify-self-center" >
          <p><br/></p>
          <p className="text-9xl font-extrabold text-center mt-32" >
            <LinearGradient gradient={['to left', '#6b4fdc ,#34207d']}>
              and SAVE BIG
            </LinearGradient>
          </p>
        </div>

        <div  className="justify-self-center" >
          <p><br/></p>
          <p className="text-5xl font-extrabold text-center mt-32" >
            <LinearGradient gradient={['to bottom', '#34207d ,#f87171']}>
              through our partner discounts
            </LinearGradient>
          </p>
        </div>

        <div className="mt-32 flex flex-row justify-center gap-5" style={{height:"20vh"}}>
          <img className="flex w-1/6" style={{objectFit:"contain"}} src="/lyft.png"/>
          <img className="flex w-1/6" style={{objectFit:"contain"}} src="/pandora.png"/>
          <img className="flex w-1/6" style={{objectFit:"contain"}} src="/apple.png"/>
          <img className="flex w-1/6" style={{objectFit:"contain"}} src="/netflix.png"/>
          <img className="flex w-1/6" style={{objectFit:"contain"}} src="/amazon.png"/>
        </div>

        <Plans/>  
        </div>

            
    </div>
    
  );
}
