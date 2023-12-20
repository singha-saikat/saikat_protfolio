import React from 'react';
import HeroBgAnimation from '../HeroBgAnimation';
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, SocialMediaIcons, SocialMediaIcon, ResumeButton } from './HeroStyle';
import HeroImg from '../../images/HeroImage.jpg';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import styled, { keyframes } from 'styled-components';


const changeShape = keyframes`
  0% {
    border-radius: 50%;
  }
  50% {
    border-radius: 0;
  }
  100% {
    border-radius: 50%;
  }
`;

const AnimatedImg = styled(Img)`
  animation: ${changeShape} 5s linear infinite;
`;

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer >
          <HeroLeftContainer id="Left">
            <Title>Hi, I am <br /> {Bio.name}</Title>
            <TextLoop>
             A
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <AnimatedImg src={HeroImg} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
}

export default HeroSection;
