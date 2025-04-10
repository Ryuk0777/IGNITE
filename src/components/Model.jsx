import React, { useEffect, Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { useDispatch } from 'react-redux';
import { setModelLoaded, setHerosState } from '../redux/animation/animationSlice';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CarModel = ({ containerAnimation, hero1Ref, hero2Ref, hero3Ref, hero4Ref, hero5Ref }) => {
  const { scene } = useGLTF('./model/scene.gltf');
  const modelRef = useRef();
  const dispatch = useDispatch();
  const [modelScale, setModelScale] = useState();
  const [rotation, setRotation] = useState(4.8);

  useEffect(() => {
    const mm = gsap.matchMedia();
    modelRef.current.rotation.y = 4.8;

    mm.add(
      {
        isMobile: '(max-width: 1024px)',
        isDesktop: '(min-width: 1025px)',
      },
      (context) => {
        const { isDesktop, isMobile } = context.conditions;

        if (isDesktop) {
          setModelScale(0.5);
        } else if (isMobile) {
          setModelScale(0.25);
        }
      }
    );
  }, []);

  useEffect(() => {
    if (scene) {
      dispatch(setModelLoaded(true));
    }
  }, [scene, dispatch]);

  useGSAP(() => {
    if (!containerAnimation) return;

    const animation = (rotate, name, value) => {
      setRotation(rotate);
      dispatch(setHerosState({ name, value }));
    };

    const modelAnimation = (heroRef, rotate, prevRotate, stateName) => {
      gsap.to({}, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'left left',
          end: 'right right',
          scrub: 10,
          horizontal: true,
          markers: false,
          containerAnimation: ScrollTrigger.getById('mainScroll')?.animation,
          onEnter: () => animation(rotate, stateName, true),
          onEnterBack: () => animation(prevRotate, stateName, false),
        },
      });
    };

    modelAnimation(hero2Ref, 5.8, 4.8, 'hero2');
    modelAnimation(hero3Ref, 7.8, 5.8, 'hero3');
    modelAnimation(hero4Ref, 8.8, 7.8, 'hero4');
    modelAnimation(hero5Ref, 9.8, 8.8, 'hero5');
  }, [containerAnimation]);

  useEffect(() => {
    gsap.to(modelRef.current.rotation, {
      y: rotation,
      ease: 'power2.inOut',
      duration: 1,
    });
  }, [rotation]);

  return <primitive ref={modelRef} object={scene} scale={modelScale} />;
};

const Model = ({ className, containerAnimation, hero1Ref, hero2Ref, hero3Ref, hero4Ref, hero5Ref }) => {
  return (
    <div className={className}>
      <Canvas className="bg-cyan-100">
        <Suspense fallback={null}>
          <CarModel
            containerAnimation={containerAnimation}
            hero1Ref={hero1Ref}
            hero2Ref={hero2Ref}
            hero3Ref={hero3Ref}
            hero4Ref={hero4Ref}
            hero5Ref={hero5Ref}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Model;
