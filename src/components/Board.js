import React from 'react';
import styled from 'styled-components';
import GameBox from './GameBox';
import App from '../App';

let x = 'X';
let o = 'O';
let reset = false;

const InitialData = {
    box0: {reset},
    box1: {reset},
    box2: {reset},
    box3: {reset},
    box4: {reset},
    box5: {reset},
    box6: {reset},
    box7: {reset},
    box8: {reset},
    
}
const reducer = (state, action) => {
    switch(action.type) {
        case 'change-click-me': {
            state[action.box].selected = action.letter;
            return {
                ...state,
            }
        }
        case 'restart-game': {   
            let values = Object.keys(state);
            values.forEach(value => {
                state[value].reset = true;
            })         
            return {
                ...state,
                
            }
        }
        case 'reset-box': {
            state[action.boxInfo.box].reset = false;
            return {
                ...state
            }
        }
    }
}

const handleWinner = (turn) => {

    if (turn) {
        window.alert('O IS THE WINNER')
    } else {
        window.alert('X IS THE WINNER')
    }

}

const Board = () => {

    //useState('Z') is the initial value of x... also the initial State. 
    const [state, dispatch] = React.useReducer(reducer, InitialData)
    const [turn, setTurn] = React.useState(true)
    console.log(state)


React.useEffect(() => {
    //instead of box0.isSelected... try loop.
    //loops through each box and check for combinations. 
    //player that plays the winning move is the winner. 

    //vertical

    if (state.box0.selected === 'O' && state.box1.selected === 'O' && state.box2.selected === 'O' || state.box0.selected === 'X' && state.box1.selected === 'X' && state.box2.selected === 'X' ) {
      handleWinner(turn);
    }
    if (state.box3.selected === 'O' && state.box4.selected === 'O' && state.box5.selected === 'O' || state.box3.selected === 'X' && state.box4.selected === 'X' && state.box5.selected === 'X' ) {
        handleWinner(turn);
    }
    if (state.box6.selected === 'O' && state.box7.selected === 'O' && state.box8.selected === 'O' || state.box6.selected === 'X' && state.box7.selected === 'X' && state.box8.selected === 'X' ) {
        handleWinner(turn);
    }
    //horizontal
    if (state.box0.selected === 'O' && state.box3.selected === 'O' && state.box6.selected === 'O' || state.box0.selected === 'X' && state.box3.selected === 'X' && state.box6.selected === 'X' ) {
        handleWinner(turn);
    }
    if (state.box1.selected === 'O' && state.box4.selected === 'O' && state.box7.selected === 'O' || state.box1.selected === 'X' && state.box4.selected === 'X' && state.box7.selected === 'X' ) {
        handleWinner(turn);
    }
    if (state.box2.selected === 'O' && state.box5.selected === 'O' && state.box8.selected === 'O' || state.box2.selected === 'X' && state.box5.selected === 'X' && state.box8.selected === 'X' ) {
        handleWinner(turn);
    }

    //diagonal
    if (state.box0.selected === 'O' && state.box4.selected === 'O' && state.box8.selected === 'O' || state.box0.selected === 'X' && state.box4.selected === 'X' && state.box8.selected === 'X' ) {
        handleWinner(turn);
    }
    if (state.box2.selected === 'O' && state.box4.selected === 'O' && state.box6.selected === 'O' || state.box2.selected === 'X' && state.box4.selected === 'X' && state.box6.selected === 'X' ) {
        handleWinner(turn);
    }
},[state])


    const clickMe = (box) => {
        dispatch({
            type: 'change-click-me',
            ...box            
        })
    }

    const handleRestart = (restart) => {
        dispatch({
            type: 'restart-game',
            restart
        })
     
    }
    const handleReset = (boxInfo) => {
        console.log(boxInfo)
        dispatch({
            type: 'reset-box',
            boxInfo
        })
     
    }


return (

<FullBoard>
    <Size>
    <Title>TIC-TAC-TOE</Title>
        <GameBox handleReset={handleReset} state={state} turn={turn} setTurn={setTurn} clickMe={clickMe}></GameBox>
    </Size>


<button onClick={() => {
    handleRestart(true);
}}>
    RESTART


</button>
</FullBoard>

)
}

export default Board;

const FullBoard = styled.div`

display: flex;
justify-content: center;
align-items: center;
text-align: center;

`


const Size = styled.div`
`

const Title = styled.div`
font-size: 2em;
font-family: 'Abril Fatface', cursive;
margin: 2em;

color: white;
border-radius: 25px; 
padding: 1em;
background-image: linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%);
`


