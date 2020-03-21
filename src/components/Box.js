import React from 'react';
import styled from 'styled-components';



const Box = ({state, clickMe, box, setTurn, turn}) => {

let clicker = state[box].isClicked;
const [player, setPlayer] = React.useState(' ');

const [thecolor, setColor] = React.useState(false);
const color = thecolor ? 'purple' : 'pink';

const handlePlayer = () => {
    if (turn) {
        let letter = 'X';
        setPlayer(letter)
        clickMe({box,letter})
        setColor(!thecolor)
    }
    else {
        let letter = 'O';
        setPlayer(letter)
        clickMe({box,letter})
        setColor(thecolor)  
    }
    
}

const handleDoubleClicks = () => {
if (clicker === undefined) {
    handlePlayer();
    setTurn(!turn)
}
}

return (
<Btn 
    style={{color}}
    onClick={() => {
    handleDoubleClicks();
    }}>
<Player>{player}</Player>
</Btn>
)

}

export default Box;

const Btn = styled.button`
font-size: 3em;
width: 200px;
height: 100px;
padding: 0;
margin: 0;
border: none;
vertical-align: top;
background: none;
box-shadow: 2px 10px 20px 7px rgba(237,199,237,1);
border-radius: 25px;

@media only screen and (max-width: 450px) {
    font-size: 5em;
 
    padding: 0;
    margin: 0;
    width: 100px;
        
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


