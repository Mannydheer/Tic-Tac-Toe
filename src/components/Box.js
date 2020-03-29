import React from 'react';
import styled from 'styled-components';
import { Board } from './Board';


const Box = ({ box }) => {

    const { state,
        actions: { clickMe, setTurn, turn, x, o, alert } } = React.useContext(Board);

    let clicker = state[box].isClicked;
    const [player, setPlayer] = React.useState(' ');

    const [thecolor, setColor] = React.useState(false);
    const color = thecolor ? 'purple' : 'pink';


    //FUNCTIONS
    const handlePlayer = () => {
        if (turn) {
            let letter = x;
            setPlayer(letter)
            clickMe({ box, letter })
            setColor(!thecolor)
        }
        else {
            let letter = o;
            setPlayer(letter)
            clickMe({ box, letter })
            setColor(thecolor)
        }

    }
    const handleDoubleClicks = () => {
        if (clicker === undefined) {
            handlePlayer();
            setTurn(!turn)
        }
    }
    //render
    return (
        <Btn
            disabled={alert}
            style={{ color }}
            onClick={() => {
                handleDoubleClicks();
            }}>
            <Player>{player}</Player>
        </Btn>
    )

}

export default Box;

const Btn = styled.button`
font-size: 5em;
width: 100px;
height: 100px;
padding: 0;
margin: 0;
border: none;
vertical-align: top;
background: none;
border: solid black 1px;
outline: none;

@media only screen and (max-width: 450px) {
    font-size: 5em;
    padding: 0;
    margin: 0;
    width: 100px;
    height: 100px;
        
}

&:hover {
    cursor: pointer;
    background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);
    transition: 1s ease all;
} 

`

const Player = styled.span`

font-family: 'Abril Fatface', cursive;
`


