import React from 'react';


const HandleCombinations = ({state}) => {


    const handleWinner = (turn, setVisible) => {
        if (turn) {
            setVisible(true)
            SimpleAlerts();
    
            window.alert('O IS THE WINNER')
    
        } else {
    
            setVisible(true)
            SimpleAlerts();
    
            window.alert('X IS THE WINNER')
            
            
        }
    
    }
React.useEffect(() => {
    //instead of box0.isSelected... try loop.
    //loops through each box and check for combinations. 
    //player that plays the winning move is the winner. 

    //vertical

    if (state.box0.selected === 'O' && state.box1.selected === 'O' && state.box2.selected === 'O' || state.box0.selected === 'X' && state.box1.selected === 'X' && state.box2.selected === 'X' ) {
      handleWinner(turn, setVisible, visible);
    }
    else if (state.box3.selected === 'O' && state.box4.selected === 'O' && state.box5.selected === 'O' || state.box3.selected === 'X' && state.box4.selected === 'X' && state.box5.selected === 'X' ) {
        handleWinner(turn, setVisible, visible);
    }
    else if (state.box6.selected === 'O' && state.box7.selected === 'O' && state.box8.selected === 'O' || state.box6.selected === 'X' && state.box7.selected === 'X' && state.box8.selected === 'X' ) {
        handleWinner(turn, setVisible, visible);
    }
    //horizontal
    else if (state.box0.selected === 'O' && state.box3.selected === 'O' && state.box6.selected === 'O' || state.box0.selected === 'X' && state.box3.selected === 'X' && state.box6.selected === 'X' ) {
        handleWinner(turn, setVisible, visible);
    }
    else if (state.box1.selected === 'O' && state.box4.selected === 'O' && state.box7.selected === 'O' || state.box1.selected === 'X' && state.box4.selected === 'X' && state.box7.selected === 'X' ) {
        handleWinner(turn, setVisible, visible);
    }
    else if (state.box2.selected === 'O' && state.box5.selected === 'O' && state.box8.selected === 'O' || state.box2.selected === 'X' && state.box5.selected === 'X' && state.box8.selected === 'X' ) {
        handleWinner(turn, setVisible, visible);
    }
    //diagonal
    else if (state.box0.selected === 'O' && state.box4.selected === 'O' && state.box8.selected === 'O' || state.box0.selected === 'X' && state.box4.selected === 'X' && state.box8.selected === 'X' ) {
        handleWinner(turn, setVisible, visible);
    }
    else if (state.box2.selected === 'O' && state.box4.selected === 'O' && state.box6.selected === 'O' || state.box2.selected === 'X' && state.box4.selected === 'X' && state.box6.selected === 'X' ) {
        handleWinner(turn, setVisible, visible);
    }
    else {
        let isClickedArray = Object.keys(state)
        let bool = isClickedArray.every(element => state[element].isClicked === true)
        if (bool) {
            window.alert('DRAW')
            setVisible(true)
        }
    }
},[state])

}

export default HandleCombinations;