import React from 'react';
import styled from 'styled-components';
import SimpleAlerts from '../Alert';
import { useHistory } from 'react-router-dom';




export const Board = React.createContext();
let o = '👾';
let x = null;

const InitialData = {
    box0: { x, o },
    box1: { x, o },
    box2: { x, o },
    box3: { x, o },
    box4: { x, o },
    box5: { x, o },
    box6: { x, o },
    box7: { x, o },
    box8: { x, o },
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'change-click-me': {
            state[action.box].selected = action.letter;
            state[action.box].isClicked = true;
            return {
                ...state,
            }
        }
    }
}

const BoardProvider = ({ children }) => {


    //useState('Z') is the initial value of x... also the initial State. 
    const [state, dispatch] = React.useReducer(reducer, { ...InitialData })
    const [turn, setTurn] = React.useState(true);
    const [alert, setAlert] = React.useState(false);
    const [draw, setDraw] = React.useState(false);
    const [visible, setVisible] = React.useState(false);
    const [character, setCharacter] = React.useState(null)
    const visibility = visible ? 'visible' : 'hidden';
    console.log(state);
    let x = character;
    console.log(x, ' X INSIDE BOARD')
    React.useEffect(() => {

        if (state.box0.selected === o && state.box1.selected === o && state.box2.selected === o || state.box0.selected === x && state.box1.selected === x && state.box2.selected === x) {
            handleWinner(turn, setVisible, visible, setAlert);
        }
        else if (state.box3.selected === o && state.box4.selected === o && state.box5.selected === o || state.box3.selected === x && state.box4.selected === x && state.box5.selected === x) {
            handleWinner(turn, setVisible, visible, setAlert);
        }
        else if (state.box6.selected === o && state.box7.selected === o && state.box8.selected === o || state.box6.selected === x && state.box7.selected === x && state.box8.selected === x) {
            handleWinner(turn, setVisible, visible, setAlert);
        }
        //horizontal
        else if (state.box0.selected === o && state.box3.selected === o && state.box6.selected === o || state.box0.selected === x && state.box3.selected === x && state.box6.selected === x) {
            handleWinner(turn, setVisible, visible, setAlert);
        }
        else if (state.box1.selected === o && state.box4.selected === o && state.box7.selected === o || state.box1.selected === x && state.box4.selected === x && state.box7.selected === x) {
            handleWinner(turn, setVisible, visible, setAlert);
        }
        else if (state.box2.selected === o && state.box5.selected === o && state.box8.selected === o || state.box2.selected === x && state.box5.selected === x && state.box8.selected === x) {
            handleWinner(turn, setVisible, visible, setAlert);
        }
        //diagonal
        else if (state.box0.selected === o && state.box4.selected === o && state.box8.selected === o || state.box0.selected === x && state.box4.selected === x && state.box8.selected === x) {
            handleWinner(turn, setVisible, visible, setAlert);
        }
        else if (state.box2.selected === o && state.box4.selected === o && state.box6.selected === o || state.box2.selected === x && state.box4.selected === x && state.box6.selected === x) {
            handleWinner(turn, setVisible, visible, setAlert);
        }
        else {
            let isClickedArray = Object.keys(state)
            let bool = isClickedArray.every(element => state[element].isClicked === true)
            if (bool) {
                setDraw(true)
                setVisible(true)
            }
        }
    }, [state])

    const clickMe = (box) => {
        dispatch({
            type: 'change-click-me',
            ...box
        })
    }

    //handlers.
    const handleCharacter = (e) => {
        e.preventDefault();
        let selectedCharacter = e.target.innerHTML
        setCharacter(selectedCharacter);
    }

    const handleWinner = () => {
        if (turn) {
            setVisible(true)
            setAlert(true)

        } else {
            setVisible(true)
            setAlert(true)
        }
    }
    const handleRestart = () => {
        window.location.pathname = '/'
    }

    //render
    return (
        <Board.Provider value={
            {
                state,
                actions: {
                    setTurn,
                    clickMe,
                    handleRestart,
                    handleCharacter,
                    turn,
                    x,
                    o,
                    alert
                }
            }
        }>
            {children}

            <Reset>
                {alert ? <div><SimpleAlerts x={x} o={o} turn={turn} alert={alert}></SimpleAlerts></div> : <div> </div>}
                {draw ? <div><SimpleAlerts x={x} o={o} draw={draw} alert={alert}></SimpleAlerts></div> : <div> </div>}
                <RestartDiv>
                    <RestartButton
                        onClick={() => {
                            handleRestart();
                        }}>
                        RESTART
            </RestartButton>
                </RestartDiv>
            </Reset>
        </Board.Provider>

    )
}

export default BoardProvider;


//STYLING.
const RestartButton = styled.button`
border-radius: 25px;
font-size: 2em;
color: pink;
font-family: 'Abril Fatface', cursive;

 
transition: all 0.2s ease;
margin: auto;

&:hover {
    cursor: pointer;
    background-color: pink;
    color: white;
}
`
const RestartDiv = styled.div`

display:flex;
justify-content: center;

`

const Reset = styled.div`
@media only screen and (max-width: 450px) {

margin-top: 120px;
       
}

`


