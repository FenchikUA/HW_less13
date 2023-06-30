import React from 'react'
import styled from 'styled-components';
import { Container } from './Container';

const Wrapper = styled.main`
padding: 10px;

@media(min-width: 760px) {
  padding: 20px;
}
`;

const Main = ({children}) => {
  return (
    <Wrapper>
    <Container>{children}</Container>
    </Wrapper>
  )
}


export default Main
