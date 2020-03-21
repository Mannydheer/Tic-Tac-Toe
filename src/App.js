import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import BoardProvider from './components/Board';
import GameBox from './components/GameBox';
import styled from 'styled-components';


function App() {


  return (
    <FullBoard>
      <Title>TIC-TAC-TOE</Title>
      <Game>
        <GameBox></GameBox>
      </Game>
    </FullBoard>
  );
}

export default App;



const FullBoard = styled.div`

text-align: center;
`

const Game = styled.div`
display: flex;
justify-content: center
`


const Title = styled.div`
font-size: 2em;
font-family: 'Abril Fatface', cursive;
margin: 2em;
color: white;
border-radius: 25px; 
padding: 1em;

background-image: linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%);
display: flex;
justify-content: center;
`

