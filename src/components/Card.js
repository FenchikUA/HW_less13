import styled from 'styled-components'

const Wrapper = styled.div`
background-color: var(--color-base);
cursor: pointer;
overflow: hidden;
`;
const CardImage = styled.img`
width: 100%;
height: 150px;
object-fit: cover;
`;
const CardBody = styled.div``;
const CardTitle = styled.h3``;
const CardList = styled.ul`
list-style: none;
margin: 0;
padding: 10px 0;
`;
const CardItem = styled.li`
& > span {
  font-weight: var(--fw-bolt)
} 
`;

const Card = ({ img, name, info = [], onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <CardImage src={img} alt={name}/>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map(el => (
            <CardItem key={el.title}>
              <span>{el.title}: </span>{el.description}
            </CardItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  )
}

export default Card
