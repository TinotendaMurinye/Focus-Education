// EnhancedSplashScreen.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';

// Styled Components
const SplashContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #1a1a1a, #2d2d2d);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ParticlesContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
`;

const Logo = styled.div`
  width: 120px;
  height: 120px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  margin-bottom: 30px;
  position: relative;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateY(20px);

  &::before {
    content: "F";
    font-size: 4em;
    font-weight: bold;
    background: linear-gradient(45deg, #00ff87, #60efff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &::after {
    content: "";
    position: absolute;
    inset: -2px;
    border-radius: 32px;
    background: linear-gradient(45deg, #00ff8780, #60efff80);
    z-index: -1;
    filter: blur(5px);
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 2.5em;
  margin-bottom: 20px;
  opacity: 0;
  transform: translateY(20px);
`;

const Tagline = styled.p`
  color: #ffffff90;
  font-size: 1.2em;
  margin-bottom: 30px;
  opacity: 0;
  transform: translateY(20px);
`;

const LoadingWrapper = styled.div`
  opacity: 0;
  transform: translateY(20px);
`;

const LoadingText = styled.p`
  color: #ffffff90;
  font-size: 1.1em;
  margin-bottom: 15px;
`;

const ProgressBar = styled.div`
  width: 400px;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
`;

const Progress = styled.div`
  width: 0%; // Ensure this starts at 0%
  height: 100%;
  background: linear-gradient(90deg, #00ff87, #60efff);
  border-radius: 2px;
`;

const CirclesContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Circle = styled.div`
  position: absolute;
  background: linear-gradient(45deg, #00ff8730, #60efff30);
  border-radius: 50%;
  filter: blur(20px);
`;

const SplashScreen = ({ onLoadingComplete }) => {
  const particlesRef = useRef(null);
  const progressRef = useRef(null);
  const circlesRef = useRef([]);

  useEffect(() => {
    // Particle initialization
    if (window.particlesJS) {
      window.particlesJS(particlesRef.current.id, {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: '#ffffff' },
          shape: { type: 'circle' },
          opacity: {
            value: 0.5,
            random: true,
            animation: { enable: true, speed: 1, minimumValue: 0.1, sync: false }
          },
          size: {
            value: 3,
            random: true,
            animation: { enable: true, speed: 2, minimumValue: 0.1, sync: false }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.2,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 }
          }
        },
        retina_detect: true
      });
    }

    // Animate circles
    circlesRef.current.forEach((circle, index) => {
      const size = Math.random() * 300 + 100;
      circle.style.width = `${size}px`;
      circle.style.height = `${size}px`;

      gsap.to(circle, {
        x: `random(-50, 50)%`,
        y: `random(-50, 50)%`,
        duration: Math.random() * 4 + 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.5
      });
    });

    // Entrance animations
    const tl = gsap.timeline();

    tl.to('.logo', {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out'
    })
      .to('h1', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.5')
      .to('.tagline', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.5')
      .to('.loading-wrapper', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.5')
      .to(progressRef.current, {
        width: '100%', // Ensure this is 100%
        duration: 15, // Set duration to 15 seconds
        ease: 'power1.inOut',
        onComplete: () => {
          console.log('Loading Complete'); // Debug log
          setTimeout(() => {
            if (onLoadingComplete) {
              onLoadingComplete();
            }
          }, 1000); // Delay before completion
        }
      });

    return () => {
      tl.kill();
      if (window.pJSDom && window.pJSDom[0]) {
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
      }
    };
  }, [onLoadingComplete]);

  return (
    <SplashContainer>
      <ParticlesContainer id="particles-js" ref={particlesRef} />
      <CirclesContainer>
        {[...Array(3)].map((_, index) => (
          <Circle
            key={index}
            ref={el => circlesRef.current[index] = el}
          />
        ))}
      </CirclesContainer>
      <ContentWrapper>
        <Logo className="logo" />
        <Title>Welcome to Focus</Title>
        <Tagline className="tagline">Your personal productivity assistant</Tagline>
        <LoadingWrapper className="loading-wrapper">
          <LoadingText>Loading amazing things...</LoadingText>
          <ProgressBar>
            <Progress ref={progressRef} />
          </ProgressBar>
        </LoadingWrapper>
      </ContentWrapper>
    </SplashContainer>
  );
};

export default SplashScreen;