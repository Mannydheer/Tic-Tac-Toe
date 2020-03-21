import React from 'react';
import './App.css';
import GameBox from './components/GameBox';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';




function App() {

  return (

    <Router>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route path="/game">
    <FullBoard>
      <Title>TIC-TAC-ALIEN</Title>
      <Game>
        <GameBox></GameBox>
      </Game>
    </FullBoard>
    </Route>
  </Router>
    
  );
}

export default App;

const FullBoard = styled.div`
text-align: center;
`
const Game = styled.div`
display: flex;
justify-content: center;


@media only screen and (max-width: 450px) {
    margin-top: 60px;
        
}
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



@media only screen and (max-width: 450px) {
    font-size: 3em;
 
    padding: 0;
    margin: 0;
    
        
}
`

