import React, {useEffect, Suspense, useRef, useState} from 'react'
import { Canvas} from "@react-three/fiber";
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Html } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gsap from 'gsap';
import { useControls } from 'leva';
import { useSelector, useDispatch } from 'react-redux'
import { setModelLoaded } from '../redux/animation/animationSlice';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP,ScrollTrigger);



const CarModel = ({containerAnimation, hero1Ref, hero2Ref, hero3Ref, hero4Ref, hero5Ref}) => {
  const { scene } = useGLTF("./model/scene.gltf");
    const modelRef = useRef();

    const [modelScale, setModelScale] = useState();

    const dispatch = useDispatch();

    const [rotation, setRotation] = useState(4.8);

    useEffect(()=>{

        const mm = gsap.matchMedia();

        mm.add({
          isMobile: "(max-width: 1024px)",
          isDesktop: "(min-width: 1025px)",
        },
        (context) => {
          const { isDesktop, isMobile} = context.conditions;

          if(isDesktop){
            setModelScale(0.5)
          } else if(isMobile){
            setModelScale(0.25)
          }
        }
      )
    },[])

    useEffect(() => {
      if (scene) {
        dispatch(setModelLoaded(true))
      }
    }, [scene]);


    useGSAP(() => {
    
      if(!containerAnimation) return;
    
      // const t1 = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: hero1Ref.current,
      //     start: 'right left', 
      //     end: "left right",
      //     scrub: false,
      //     horizontal: true, 
      //     markers: true,
      //     containerAnimation: ScrollTrigger.getById('mainScroll')?.animation,
      //     onEnter: () => dispatch(setModelRotation(5.8)),
      //     onEnterBack:() => dispatch(setModelRotation(4.8))
      //   },
      // });


    
      
    const modelAnimation = (heroRef, rotate, prevRotate)=>{
      gsap.to({},{
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'left left', 
          end: "right right",
          scrub: 10,
          horizontal: true, 
          markers: false,
          containerAnimation: ScrollTrigger.getById('mainScroll')?.animation,
          onEnter: ()=> setRotation(rotate),
          onEnterBack: ()=> setRotation(prevRotate),
        },      
      })
    }    

    modelAnimation(hero2Ref, 5.8, 4.8)
    modelAnimation(hero3Ref, 7.8, 5.8)
    modelAnimation(hero4Ref, 8.8, 7.8)
    modelAnimation(hero5Ref, 9.8, 8.8)


    }, [containerAnimation]);

    useEffect(()=>{
        gsap.to(modelRef.current.rotation, {y: rotation, ease: 'power2.inOut', duration:1 })
    }, [rotation])

    

    return (
      <primitive ref={modelRef}  object={scene} scale={modelScale}/>
    )
}


const Model = ({className, containerAnimation, hero1Ref, hero2Ref, hero3Ref, hero4Ref, hero5Ref}) => {


  return (
    <>
        <div className={className}>
        <Canvas className='bg-cyan-100'>
            <Suspense>
                <CarModel containerAnimation={containerAnimation} hero1Ref={hero1Ref} hero2Ref={hero2Ref} hero3Ref={hero3Ref} hero4Ref={hero4Ref} hero5Ref={hero5Ref}/>
            </Suspense>
        </Canvas>
        </div>
    </>
  )
}

export default Model