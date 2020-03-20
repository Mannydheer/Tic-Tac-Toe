import React from 'react';
import styled from 'styled-components';



const Box = ({handleReset, state, clickMe, box, setTurn, turn}) => {
const [player, setPlayer] = React.useState(' ');

console.log(state[box].reset)
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
    style={{color}}
    onClick={() => {
    handlePlayer();
    setTurn(!turn)
    }}>
<div>

    {state[box].reset ? (setPlayer(' '), handleReset({box}), player ) : player}
    
</div>

    
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
    margin 0;
    width: 100px;
       
        
    }




&:hover {
    cursor: pointer;
    background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);
    transition: 1s ease all;
} 




`
