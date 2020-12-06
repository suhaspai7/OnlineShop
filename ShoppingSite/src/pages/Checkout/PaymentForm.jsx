import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {payment} from '../../services/api';
import { useStateValue } from '../stateProvider';

import {Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    color:'#131921',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));


export default function PaymentForm() {
  const [cardname,setCardName] = React.useState('');
  const [cardnumber,setCardNumber] = React.useState('');
  const [expirydate,setExpiryDate] = React.useState('');
  const [cvv,setCvv] = React.useState('');

  const [{ paymentdetails }, dispatch] = useStateValue();
  const classes = useStyles();
  
  const handleSave = async()=>{
    const data = {
      cardname: cardname,
      cardnumber:cardnumber,
      expirydate:expirydate,
      cvv:cvv,
    }
    dispatch({
      type: "PAYMENT",
      item: {
      cardname: cardname,
      cardnumber:cardnumber,
      expirydate:expirydate,
      cvv:cvv,
      }

  })
    try {
      const response = await payment(data);
      if (response) {
        console.log('success');
        alert("Contents saved");
      }
      else 
      {
        console.log('fail');
      }
    } catch (error) {
      console.log('address insertion to db failed');
    }


    
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="Name on card" fullWidth autoComplete="cc-name"
          onChange={(e)=>{setCardName(e.target.value)}}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            onChange={(e)=>{setCardNumber(e.target.value)}}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="Expiry date" fullWidth autoComplete="cc-exp" 
          onChange={(e)=>{setExpiryDate(e.target.value)}}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"            
            onChange={(e)=>{setCvv(e.target.value)}}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
        <Grid item xs={12}>
        <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleSave}
        >
          Save
        </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}