import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import { useStateValue } from '../stateProvider';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useHistory } from 'react-router-dom'

function Header() {

    const [{ basket,username }] = useStateValue()
    const [userName,setUserName] = React.useState('Hello Guest!');
    const history = useHistory();
    let cart =(<Link to="/cart">
    <div className="header__optionBasket">
         <i class="fas fa-shopping-cart "></i>
         <ShoppingCartIcon style={{ color: "white",fontSize:40 }}
         ></ShoppingCartIcon>
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
        </div>
        </Link>);
    let logout = (<Link to="/login">
    <div className="header__optionBasket">
         <i class="fas fa-shopping-cart "></i>
            <span className="header__optionLineTwo header__basketCount">Log out</span>
        </div>
        </Link>);


    return (
        <div className="header">

            <h1 className="header__logo">PC House</h1>


            <div className="header__nav">
                <div className="header__option">
                <span className="header__optionLineTwo header__basketCount">{username}</span>
                </div>
                {logout}
                {cart}
            </div>


        </div>
    )
}

export default Header;
