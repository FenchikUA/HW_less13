import React from 'react';
import styled  from 'styled-components';

const Wrapper = styled.div`
width: 100%;
padding: 15px 0;
display: grid;
grid-template-columns: 1fr;
gap: 15px;

@media(min-width: 760px) {
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}
`;

const List = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default List;
