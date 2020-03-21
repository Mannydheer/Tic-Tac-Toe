import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Alert from '@material-ui/lab/Alert';
import { Alert} from '@material-ui/lab';

import styled from 'styled-components';

const useStyles = makeStyles(theme => ({

  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(5),
    },
    
  },
}));

export default function SimpleAlerts({turn, draw, alert, x , o}) {
  const classes = useStyles();
  console.log(draw, 'draw')
  console.log(turn, 'turn')
  console.log(alert, 'alert')


  return (

    
    <AlertMessage className={classes.root}>
        {turn === true && draw === undefined ? <Alert style={{backgroundImage: 'linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%)', fontSize:'1em'}}>
        {o}  is the Winner
      </Alert> : turn === false && draw === undefined ? <Alert style={{backgroundImage: 'linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%)', fontSize:'1em'}}>
        {x}  is the Winner
      </Alert> : <div></div>}
      {draw === true && alert === false ? <Alert style={{backgroundImage: 'linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%)', fontSize:'1em'}}>
        Draw
      </Alert> : <div></div>}  


    </AlertMessage>
  );
}

const AlertMessage = styled.div`


@media only screen and (max-width: 450px) {
    
 
    padding: 0;
    margin: 0;
    
        
}

`

