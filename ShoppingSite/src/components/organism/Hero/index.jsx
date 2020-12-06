import { Box, createStyles, makeStyles, Theme, Typography} from '@material-ui/core';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import HeroImage1 from '../../../assets/img/svg/hero1.svg';
import HeroImage2 from '../../../assets/img/svg/hero2.svg';
import HeroImage3 from '../../../assets/img/svg/hero3.svg';
import HeroImage4 from '../../../assets/img/svg/hero4.svg';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: '10% 10%',
      display: 'flex',
      flexDirection: 'column',
      height: '80%',
    },
    title: {
      fontFamily: 'BrandonTextWeb-Bold',
      textAlign: 'left',
      marginBottom: theme.spacing(3),
      maxWidth: '90%',
    },
    subtitle: {
      textAlign: 'left',
      color: theme.palette.text.secondary,
      marginBottom: theme.spacing(10),
      maxWidth: '90%',
    },
    image: {
      width: '80%',
      height: '40%',
    },
  }),
);

const Hero = ( props )=>{
    const {title, subtitle}=props;
    const classes=useStyles(props);
    return(
        <Box className={classes.root}>
            <Typography variant='h2' className={classes.title}>
                {title}
            </Typography>
            <Typography variant='h5' className={classes.subtitle}>
                {subtitle}    
            </Typography>
            <Carousel autoPlay infiniteLoop>
                <div>
                    <img src={HeroImage1} className={classes.image} alt=""/>
                </div>
                <div>
                    <img src={HeroImage2} className={classes.image} alt=""/>
                </div>
                <div>
                    <img src={HeroImage3} className={classes.image} alt=""/>
                </div>
                <div>
                    <img src={HeroImage4} className={classes.image} alt=""/>
                </div>
            </Carousel>
        </Box>
    );

}


export default Hero;