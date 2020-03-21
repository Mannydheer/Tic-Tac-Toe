import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import GameBox from './components/GameBox';
import BoardProvider from './components/Board';
import styled from 'styled-components';

ReactDOM.render(

<BoardProvider>
<App></App>
</BoardProvider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();





const FullGame = styled.div`

display: flex;
justify-content: center;
align-items: center;
text-align: center;
`
