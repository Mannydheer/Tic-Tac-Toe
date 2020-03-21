import React from 'react';
import styled from 'styled-components';
import Box from './Box';
import { Board } from './Board';



const GameBox = () => {

    const {state,
    actions: {x, o}} = React.useContext(Board);

    let boxValues = Object.keys(state)
    return ( 
        <FlexBack>
            <Vs>{x} VS {o}</Vs>
          
            <BoardStyling>

            {boxValues.map(box => {
               return (
            <Box key={box} box={box}></Box>
        )
            })}
            </BoardStyling>
           

        </FlexBack>

    )
}

export default GameBox;


const BoardStyling = styled.div`
padding: 0;
margin: 0;
width:600px;

@media only screen and (max-width: 450px) {
    
    width: 300px;
    height: 200px;
    margin-left: 10px;
       
    }
`

const FlexBack = styled.div`


`
const Vs = styled.div`
font-size: 4em;
font-family: 'Abril Fatface', cursive;

@media only screen and (max-width: 450px) {
    font-size: 3em;
    padding: 0;
    margin-left: 20px;

        
}



`




