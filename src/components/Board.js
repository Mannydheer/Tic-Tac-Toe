import React from 'react';
import styled from 'styled-components';
import GameBox from './GameBox';
import SimpleAlerts from '../Alert';



export const Board = React.createContext();


const InitialData = {
    box0: {},
    box1: {},
    box2: {},
    box3: {},
    box4: {},
    box5: {},
    box6: {},
    box7: {},
    box8: {},
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
    const [turn, setTurn] = React.useState(true)
    const [alert, setAlert] = React.useState(false)
    const [visible, setVisible] = React.useState(false)
    const visibility = visible ? 'visible' : 'hidden';



    React.useEffect(() => {

        if (state.box0.selected === 'O' && state.box1.selected === 'O' && state.box2.selected === 'O' || state.box0.selected === 'X' && state.box1.selected === 'X' && state.box2.selected === 'X') {
            handleWinner(turn, setVisible, visible, setAlert);
        }
        else if (state.box3.selected === 'O' && state.box4.selected === 'O' && state.box5.selected === 'O' || state.box3.selected === 'X' && state.box4.selected === 'X' && state.box5.selected === 'X') {
            handleWinner(turn, setVisible, visible, setAlert);
        }
        else if (state.box6.selected === 'O' && state.box7.selected === 'O' && state.box8.selected === 'O' || state.box6.selected === 'X' && state.box7.selected === 'X' && state.box8.selected === 'X') {
            handleWinner(turn, setVisible, visible, setAlert);
        }
        //horizontal
        else if (state.box0.selected === 'O' && state.box3.selected === 'O' && state.box6.selected === 'O' || state.box0.selected === 'X' && state.box3.selected === 'X' && state.box6.selected === 'X') {
            handleWinner(turn, setVisible, visible, setAlert);
        }
        else if (state.box1.selected === 'O' && state.box4.selected === 'O' && state.box7.selected === 'O' || state.box1.selected === 'X' && state.box4.selected === 'X' && state.box7.selected === 'X') {
            handleWinner(turn, setVisible, visible, setAlert);
        }
        else if (state.box2.selected === 'O' && state.box5.selected === 'O' && state.box8.selected === 'O' || state.box2.selected === 'X' && state.box5.selected === 'X' && state.box8.selected === 'X') {
            handleWinner(turn, setVisible, visible, setAlert);
        }
        //diagonal
        else if (state.box0.selected === 'O' && state.box4.selected === 'O' && state.box8.selected === 'O' || state.box0.selected === 'X' && state.box4.selected === 'X' && state.box8.selected === 'X') {
            handleWinner(turn, setVisible, visible, setAlert);
        }
        else if (state.box2.selected === 'O' && state.box4.selected === 'O' && state.box6.selected === 'O' || state.box2.selected === 'X' && state.box4.selected === 'X' && state.box6.selected === 'X') {
            handleWinner(turn, setVisible, visible, setAlert);
        }
        else {
            let isClickedArray = Object.keys(state)
            let bool = isClickedArray.every(element => state[element].isClicked === true)
            if (bool) {
                window.alert('DRAW')
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
    window.location.reload();
}

    return (



        <Board.Provider value={
            {
                state,
                actions: {
                    setTurn,
                    clickMe,
                    turn

                }
            }
        }>
            {children}

        
       <div>
         
                {alert ? <div><SimpleAlerts turn={turn}></SimpleAlerts></div> : <div> </div>}
           
           

            <RestartButton
                    style={{ visibility }}
                    onClick={() => {
                        handleRestart();
                    }}>
                    RESTART
            </RestartButton>
        </div>


        </Board.Provider>

    )
}

export default BoardProvider;








const RestartButton = styled.div`
background-image: linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%);
border-radius: 25px;
font-size: 3em;
color: white;
position: absolute;
bottom: 20%;
right: 44%;
font-family: 'Abril Fatface', cursive;


&:hover {
    cursor: pointer;
}
`


