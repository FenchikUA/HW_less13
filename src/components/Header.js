import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Container } from './Container';
import {IoMoon, IoMoonOutline} from 'react-icons/io5';

const HeaderEl = styled.header`
background-color: var(--color-base);
`;
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 0;
`;
const Title = styled.a.attrs({
  href:'/'
})`
color: var(--color-text);
font-size: 24px;
text-decoration: none;
font-weight: var(--fw-bolt);
`;
const Mode = styled.div`
color: var(--color-text);
font-size: 18px;
text-decoration: none;
font-weight: var(--fw-bolt);
text-transform: capitalize;
cursor: pointer;
`;

const Header = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])
  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is here World?</Title>
          <Mode onClick={toggleTheme}>
            {theme === 'light' ? (
              <IoMoonOutline/>
            ) : (
              <IoMoon/>
            )}
            <span style={{marginLeft: '10px'}}>{theme} Theme</span>
          </Mode>
        </Wrapper>
      </Container>
    </HeaderEl>
  )
}

export default Header
