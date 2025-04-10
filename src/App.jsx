import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Model from "./components/Model";
import { useGSAP } from "@gsap/react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Lenis from 'lenis'
import Section1 from "./components/Section1";


gsap.registerPlugin(ScrollTrigger);

function App() {

    const hero1Ref = useRef();
    const hero2Ref = useRef();
    const hero3Ref = useRef();
    const hero4Ref = useRef();
    const hero5Ref = useRef();

    const navbarRef = useRef();

    const [containerAnimation, setContainerAnimation] = useState();

  useEffect(()=>{
    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update);
    
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    
    gsap.ticker.lagSmoothing(0);
    

  },[])
 

  return (
    <>
      <Welcome />
      <Navbar navbarRef={navbarRef} />
      <Model 
      className="h-screen w-screen fixed top-0 left-0" 
      containerAnimation={containerAnimation}
      hero1Ref={hero1Ref}
      hero2Ref={hero2Ref}
      hero3Ref={hero3Ref}
      hero4Ref={hero4Ref}
      hero5Ref={hero5Ref}
      />
      <div className="h-auto w-full absolute top-0 left-0 font-karantina">
        <Hero 
        setContainerAnimation={setContainerAnimation}
        hero1Ref={hero1Ref}
        hero2Ref={hero2Ref}
        hero3Ref={hero3Ref}
        hero4Ref={hero4Ref}
        hero5Ref={hero5Ref}
        />
        
        <Section1 navbarRef={navbarRef}/>

      </div>
    </>
  );
}

export default App;
