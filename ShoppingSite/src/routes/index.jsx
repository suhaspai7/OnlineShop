import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Login from '../pages/Login';
import CheckOut from '../pages/Checkout';
import Home from '../pages/Home/Home';
import SignUp from '../pages/SignUp'
import Cart from '../pages/Home/CheckOut';
import Header from '../pages/Home/Header';
import FooterPage from '../pages/Home/Footer';

export const history=createBrowserHistory();

const Routes=()=>{
    return(
        <Router>
            
            <Redirect from='/' to ='/home'/>
            <Switch>
                
                <Route path="/login" component={Login}/>
                <Route path="/checkout" component={CheckOut}/>
                <Route exact path="/home">
                    <Header />
                    <Home />
                </Route>
                <Route path="/signup" component={SignUp}/>
                <Route exact path="/cart">
                <Header />
                    <Cart />
                </Route>
            </Switch>
       </Router>
    



    )
}
export default Routes;
