import React from 'react';
import styled from 'styled-components';
import GameBox from './GameBox';

let x = 'x';
let o = 'o';

const InitialData = {
    box0: { x, o,},
    box1: { x, o,},
    box2: { x, o,},
    box3: { x, o,},
    box4: { x, o,},
    box5: { x, o,},
    box6: { x, o,},
    box7: { x, o,},
    box8: { x, o,},
}
const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case 'change-click-me': {
            state[action.box].selected = action.letter;
            return {
                ...state,
            }
        }
    }
}


const Board = () => {

    //useState('Z') is the initial value of x... also the initial State. 
    const [state, dispatch] = React.useReducer(reducer, InitialData)
    const [turn, setTurn] = React.useState(true)

    console.log(state)

React.useEffect(() => {

    //vertical

    if (state.box0.selected === 'O' && state.box1.selected === 'O' && state.box2.selected === 'O' || state.box0.selected === 'X' && state.box1.selected === 'X' && state.box2.selected === 'X' ) {
        window.alert('YOU WIN')
    }
    if (state.box3.selected === 'O' && state.box4.selected === 'O' && state.box5.selected === 'O' || state.box3.selected === 'X' && state.box4.selected === 'X' && state.box5.selected === 'X' ) {
        window.alert('YOU WIN')
    }
    if (state.box6.selected === 'O' && state.box7.selected === 'O' && state.box8.selected === 'O' || state.box6.selected === 'X' && state.box7.selected === 'X' && state.box8.selected === 'X' ) {
        window.alert('YOU WIN')
    }
    //horizontal
    if (state.box0.selected === 'O' && state.box3.selected === 'O' && state.box6.selected === 'O' || state.box0.selected === 'X' && state.box3.selected === 'X' && state.box6.selected === 'X' ) {
        window.alert('YOU WIN')
    }
    if (state.box1.selected === 'O' && state.box4.selected === 'O' && state.box7.selected === 'O' || state.box1.selected === 'X' && state.box4.selected === 'X' && state.box7.selected === 'X' ) {
        window.alert('YOU WIN')
    }
    if (state.box2.selected === 'O' && state.box5.selected === 'O' && state.box8.selected === 'O' || state.box2.selected === 'X' && state.box5.selected === 'X' && state.box8.selected === 'X' ) {
        window.alert('YOU WIN')
    }

    //diagonal
    if (state.box0.selected === 'O' && state.box4.selected === 'O' && state.box8.selected === 'O' || state.box0.selected === 'X' && state.box4.selected === 'X' && state.box8.selected === 'X' ) {
        window.alert('YOU WIN')
    }
    if (state.box2.selected === 'O' && state.box4.selected === 'O' && state.box6.selected === 'O' || state.box2.selected === 'X' && state.box4.selected === 'X' && state.box6.selected === 'X' ) {
        window.alert('YOU WIN')
    }
},[state])


    const clickMe = (box) => {
        dispatch({
            type: 'change-click-me',
            ...box            
        })
    }


return (

<FullBoard>
    <Size>
    <Title>TIC-TAC-TOE</Title>
        <GameBox state={state} turn={turn} setTurn={setTurn} clickMe={clickMe}></GameBox>
    </Size>

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
font-size: 3em;
background-color: purple;
color: white;
border-radius: 25px; 
`


