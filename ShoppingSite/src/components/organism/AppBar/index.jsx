import React from 'react'
import './Header.css'

function NavBar() {

    return (
        <div className="header">

            <h1 className="header__logo">PC House</h1>


            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLine1">Hello Guest</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLine1">Contact us</span>
                </div>
                <div className="header__optionBasket">
                    <i class="fas fa-shopping-cart "></i>
                    <span className="header__optionLineTwo header__basketCount">0</span>
                </div>
            </div>


        </div>
    )
}

export default NavBar;
