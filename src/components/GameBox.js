import React from 'react';
import styled from 'styled-components';
import Box from './Box';
const GameBox = ({state, clickMe, setTurn, turn}) => {

    let boxValues = Object.keys(state)
    return ( 
        <React.Fragment>
            <BoardStyling>
            {boxValues.map(box => {
               return (
                <Box box={box} state={state} clickMe={clickMe} setTurn={setTurn} turn={turn}></Box>
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

width: 300px;


`


