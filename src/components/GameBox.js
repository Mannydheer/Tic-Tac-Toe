import React from 'react';
import styled from 'styled-components';
import Box from './Box';
import { Board } from './Board';


const GameBox = () => {

    const {state} = React.useContext(Board);

    let boxValues = Object.keys(state)
    return ( 
        <React.Fragment>
            <BoardStyling>

            {boxValues.map(box => {
               return (
            <Box key={box} box={box}></Box>
        )
            })}
            </BoardStyling>

        </React.Fragment>

    )
}

export default GameBox;


const BoardStyling = styled.div`
padding: 0;
margin: 0;
width:600px;

@media only screen and (max-width: 450px) {
    padding: 0;
    margin: 0;
    width: 300px;
    margin: 3em;
       
    }
`


