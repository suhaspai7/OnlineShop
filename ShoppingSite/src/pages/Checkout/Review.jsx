import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { useStateValue } from '../stateProvider';
import { address } from '../../services/api';









const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();
  const products=[]
const [{ basket,userdetails,paymentdetails }, dispatch] = useStateValue();
console.log(paymentdetails);
let sum=0;
basket.map((element,index)=>{
  const arr = element.title.split(' ');
  const title = arr[0]+arr[1];
  sum=sum+parseInt(element.price);
  products[index] = {name:title,desc:element.title,price:element.price}
})
products[products.length]={ name: 'Shipping', desc: '', price: 'Free' }; 
const name = userdetails[0].firstname + " " + userdetails[0].lastname;
const addresses = userdetails[0].addressline1.split(',');
addresses.push(userdetails[0].addressline2.split(','));
addresses.push(userdetails[0].city,"-"+userdetails[0].zip);
const payments = [
  { name: 'Card type', detail:"Visa" },
  { name: 'Card holder', detail: paymentdetails[0].cardname },
  { name: 'Card number', detail: paymentdetails[0].cardnumber },
  { name: 'Expiry date', detail: paymentdetails[0].expirydate },
];

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            ${sum}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
        <Typography gutterBottom>{name}</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}