import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Board } from './Board';

const Home = () => {
  let gorilla = '🦍';
  let unicorn = '🦄';
  let dragon = '🐉';
  let monkey = '🐵';


  const {
    actions: { x, o, handleCharacter } } = React.useContext(Board);
  const [selectedC, setSelectedC] = React.useState(null);
  const [start, setStart] = React.useState(false);
  return (
    <Wrapper>
      <Selected><Character>{selectedC}</Character></Selected>
      <Title>TIC-TAC-ALIEN</Title>
      <div>Choose A Character</div>
      <Characters>
        <Btn onClick={(e) => { handleCharacter(e); setStart(true); setSelectedC(gorilla) }}>{gorilla}</Btn>
        <Btn onClick={(e) => { handleCharacter(e); setStart(true); setSelectedC(unicorn) }}>{unicorn}</Btn>
        <Btn onClick={(e) => { handleCharacter(e); setStart(true); setSelectedC(dragon) }}>{dragon}</Btn>
        <Btn onClick={(e) => { handleCharacter(e); setStart(true); setSelectedC(monkey) }}>{monkey}</Btn>
      </Characters>
      <Start><Link to="/game"> 🔥 Start Game 🔥 </Link></Start>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  place-content: center;
  text-align: center;
  font-family: 'Abril Fatface', cursive;
`;
const Selected = styled.div`
`;

const Title = styled.h1`
  font-size: 3em;
  margin-bottom: 30px;
  font-family: 'Abril Fatface', cursive;
  @media only screen and (max-width: 450px) {
    font-size: 24px;
}
`;

const Start = styled.span`
  font-size: 48px;
  font-family: 'Abril Fatface', cursive;  
a {
    text-decoration: none;
    color: white;
}
&:hover {
    background-color: pink;
    cursor: pointer;
    border-radius: 25px;
}
@media only screen and (max-width: 450px) {
    font-size: 24px;
}
`;
const Btn = styled.button`
font-size: 4em;
outline: none;
border: none;
background: none;
border-radius: 25px;
padding: 25px;
transition: 0.2s ease all;
&:hover {
    background-color: pink;
    color: purple;
    cursor: pointer;
}
`
const Characters = styled.div`
`
const Character = styled.div`
font-size: 5em;

@media only screen and (max-width: 450px) {
  

    
}





`
export default Home;
