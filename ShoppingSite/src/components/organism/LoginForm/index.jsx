import React from 'react';
import{createStyles, makeStyles, Box, Typography, Button, Card  } from '@material-ui/core';
import {login} from '../../../services/api';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useStateValue } from '../../../pages/stateProvider'


import Mobile from '../../../assets/img/svg/mobile.svg';
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.light,
      padding: '10%',
      height: '80%',
    },
    card: {
      boxShadow: '-1px 2px 20px rgba(0, 0, 0, 0.15)',
      borderRadius: theme.spacing(1),
      padding: theme.spacing(5),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    button: {
      background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.info.dark} 103.81%)`,
      borderRadius: theme.spacing(0.5),
      width: '70%',
      height: theme.spacing(7),
      marginBottom: theme.spacing(22),
    },
    imageContainer: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      background: theme.palette.primary.light,
      borderRadius: theme.spacing(4),
    },
    mobileImage: {
      position: 'relative',
      top: '10px',
      left: theme.spacing(2),
    },
    successImage: {
      position: 'relative',
      top: theme.spacing(2),
      left: '14px',
    },
    title: {
      fontFamily: 'BrandonTextWeb-Bold',
      fontSize: theme.spacing(4),
      marginBottom: theme.spacing(7),
      marginTop: theme.spacing(3),
    },
    subtitle: {
      color: theme.palette.text.secondary,
      marginBottom: theme.spacing(4),
      fontSize: theme.spacing(2),
    },
    successText: {
      marginBottom: theme.spacing(40),
    },
    input: {
      background: theme.palette.primary.light,
      boxSizing: 'border-box',
      marginBottom: '20px',
      width: '70%',
      height: theme.spacing(7),
      outline: 'none',
      fontSize: theme.spacing(2),
      fontFamily: 'BrandonTextWeb-Regular',
      paddingLeft: theme.spacing(3),
      paddingTop: '10px',
      paddingBottom: '10px',
      letterSpacing: '0.04em',
      color: theme.palette.text.primary,
      border: '1px solid #b4c7d1',
      borderRadius: '4px',
    },
    footerText: {
      color: theme.palette.text.secondary,
      fontSize: theme.spacing(2),
    },
    endText: {
      textAlign: 'center',
      marginTop: theme.spacing(9),
    },
  }),
);

const UserForm = (props) => {
    const classes=useStyles(props);
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const history = useHistory();
    
    const [{ basket,username }, dispatch] = useStateValue();
    console.log(username); 
    
    const LoginHandler = async ()=>{
      const req={
        email:email,
        password:password
      }
      try {
        const response = await login(req);
        if (response.data==="User authenticated") {
          console.log('success');
          dispatch({
            type: "USER_NAME",
            username:"Hello " +email+"!",
        })
          history.push('/home');
        }
        else 
        {
          console.log('fail');
          alert("Email or password is incorrect")
        }
      } catch (error) {
        console.log('signup failed');
      }
    }

    const LoginForm = () =>{
        return(
        <>
            <Box className={classes.imageContainer}>
                <img src={Mobile} className={classes.mobileImage} alt=""/>
            </Box>
            <Typography variant="h2" className={classes.title}>
                LOGIN
            </Typography>

            <input
            type="text"
            placeholder="Email"
            className={classes.input}
            onChange={(e)=>setEmail(e.target.value)}
            required
           />
            <input
            type="password"
            placeholder="Password"
            className={classes.input}
            onChange={(e)=>setPassword(e.target.value)}
            required
            />
            <Button variant="contained" color="primary" className={classes.button} onClick={LoginHandler}>
              SUBMIT
            </Button>
            <Typography variant="h2" className={classes.footerText}>
             Terms and conditions
            </Typography>
          </> 
        )
    }
    return(
        <Box className={classes.root}>
         <Card className={classes.card}>
        {LoginForm()}
        </Card>   
      <Typography variant="body1" className={classes.endText}>
        Designed and developed with Love
      </Typography>
    </Box>

    );
}
export default UserForm;