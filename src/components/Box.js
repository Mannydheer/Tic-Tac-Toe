import React from 'react';
import styled from 'styled-components';



const Box = ({state, clickMe, box, setTurn, turn}) => {
const [player, setPlayer] = React.useState('-');


const [color, setColor] = React.useState(false);
const backgroundColor = color ? 'purple' : 'pink';

const handlePlayer = () => {

    if (turn) {
        let letter = state[box].x
        setPlayer(letter)
        clickMe({box,letter})
        setColor(!color)
    }
    else {
        let letter = state[box].o
        setPlayer(letter)
        clickMe({box,letter})
        setColor(color)

    }
}

// const handleBackground = (e) => {

//     if (e.target.style.filter === 'grayscale(100%)') {
//         e.target.style.filter = 'grayscale(100%)';
//     } else {
//         e.target.style.filter = 'grayscale(100%)';

//     }
 

// }
return (
    <Btn 
    // onMouseEnter={handleBackground}
    style={{backgroundColor}}
    onClick={() => {
    handlePlayer();
    setTurn(!turn)
    }}>

        {player}

    
    </Btn>
)

}



export default Box;

const Btn = styled.button`
font-size: 3em;
width: 100px;
height: 100px;
padding: 0;
margin: 0;
border-radius: 25px;

&:hover {
    cursor: pointer;
    background-color: green;

} 




`
