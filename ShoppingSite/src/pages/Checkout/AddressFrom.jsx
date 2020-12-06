import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {address} from '../../services/api';

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


export default function AddressForm() {
  const classes = useStyles();
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [addressline1, setAddress1] = React.useState('');
  const [addressline2, setAddress2] = React.useState('');
  const [city, setCity] = React.useState('');
  const [state, setState] = React.useState('');
  const [zip, setZip] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [{ userdetails }, dispatch] = useStateValue();



  const handleSave = async()=>{
    const data = {
      firstname: firstName,
      lastname:lastName,
      addressline1:addressline1,
      addressline2:addressline2,
      city:city,
      state:state,
      country:country,
      zip:zip,
    }
    dispatch({
      type: "USER_DETAILS",
      item: {
        firstname: firstName,
        lastname:lastName,
        addressline1:addressline1,
        addressline2:addressline2,
        city:city,
        state:state,
        country:country,
        zip:zip,
      }

  })
  
    try {
      const response = await address(data);
      if (response) {
        console.log('success');
        alert("content saved");
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
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            onChange = {(e)=>{setFirstName(e.target.value)}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            onChange = {(e)=>{setLastName(e.target.value)}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            onChange= {(e)=>{setAddress1(e.target.value)}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            onChange = {(e)=>{setAddress2(e.target.value)}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            onChange = {(e)=>{setCity(e.target.value)}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" 
          
          onClick = {(e)=>{setState(e.target.value)}}
          fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            
            onChange= {(e)=>{setZip(e.target.value)}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            onChange = {(e)=>{setCountry(e.target.value)}}
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