import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          My Project Portfolio
        </SectionTitle>
        <SectionText>
          Hi, I'm Zahid Hassan, a Computer Science student at City, University of London. This website is my personal project portfolio, showcasing the web applications and projects I have built using modern technologies. Explore to see my work and skills in action!
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;