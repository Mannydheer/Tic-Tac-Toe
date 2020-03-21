import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Alert from '@material-ui/lab/Alert';
import { Alert, AlertTitle } from '@material-ui/lab';

import styled from 'styled-components';

const useStyles = makeStyles(theme => ({

  root: {
    width: '20%',
    '& > * + *': {
      marginTop: theme.spacing(5),
    },
    
  },
}));

export default function SimpleAlerts({turn}) {
  const classes = useStyles();

  return (

    
    <AlertMessage className={classes.root}>
        {turn ? <Alert style={{backgroundImage: 'linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%)', fontSize:'2em'}}>
        O is the Winner
      </Alert> : <Alert style={{backgroundImage: 'linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%)', fontSize:'2em'}}>
        X is the Winner
      </Alert>  }  

    </AlertMessage>
  );
}

const AlertMessage = styled.div`
position: absolute;
bottom: 10%;
right: 41%;

`

