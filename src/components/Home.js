import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Board } from './Board';

const handleStart = () => {
    window.alert('CHOOSE A CHARACTER');
}

const Home = () => {
    let gorilla = '🦍';
    let unicorn = '🦄';
    let dragon =  '🐉';
    let monkey = '🐵';
   

    const {
        actions: {x, o, handleCharacter} } = React.useContext(Board);

    const [selectedC, setSelectedC] = React.useState(null);
    const [start, setStart] = React.useState(false);


  return (
    <Wrapper>
        <Selected><Character>{selectedC}</Character></Selected>
      <Title>TIC-TAC-UNICORN</Title>
      
      
      <div>Choose A Character</div>
<Characters>
      <Btn onClick={(e) => {handleCharacter(e); setStart(true); setSelectedC(gorilla)}}>{gorilla}</Btn>
      <Btn onClick={(e) => {handleCharacter(e); setStart(true); setSelectedC(unicorn)}}>{unicorn}</Btn>
      <Btn onClick={(e) => {handleCharacter(e); setStart(true); setSelectedC(dragon)}}>{dragon}</Btn>
      <Btn onClick={(e) => {handleCharacter(e); setStart(true); setSelectedC(monkey)}}>{monkey}</Btn>
</Characters>
{start ? <Start><Link to="/game"> 🔥 Start Game 🔥 </Link></Start> : <span></span> }


    </Wrapper>
  );
};



const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  place-content: center;
  text-align: center;



`;

const Selected = styled.div`
   font-size: 48px;
   font-family: 'Abril Fatface', cursive;
   color: white;
   display: flex;
   @media only screen and (max-width: 450px) {
    font-size: 24px;
    text-align: center;
}

`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 32px;

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
display: flex;

`
const Character = styled.div`
font-size: 4em;
padding-left: 100px;

@media only screen and (max-width: 450px) {
  padding-left: 1.8em;

    
}





`
export default Home;
