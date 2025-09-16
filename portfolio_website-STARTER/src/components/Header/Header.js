import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link 
  href="/" 
  style={{ display: 'flex', alignItems: 'center', color: "white", marginTop: '5px' }}
>
  <DiCssdeck size="3rem" /> 
  <span>Portfolio</span>
</Link>

    </Div1>
    <Div2>
      <li>
        <Link href="#projects" passHref legacyBehavior>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech" passHref legacyBehavior>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about" passHref legacyBehavior>
      
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
      <SocialIcons href="https://google.com">
          <AiFillGithub size="3rem" />
        </SocialIcons>
      </li>
    </Div2>
      
    </Container>
);

export default Header;