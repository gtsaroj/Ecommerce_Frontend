import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import "./Navbar.scss"
import Cart from '../Cart/Cart';



const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (

        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <KeyboardArrowDownIcon />
                        <img src='/client/ecommerce-site/public/photos/payment.jpg' />
                    </div>
                    <div className="item">
                        <KeyboardArrowDownIcon />
                        <span>USD</span>
                    </div>
                    <div className="item">
                        <Link className="link" to='/Product:id'>Men</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to='/Product:id'>Women</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to='/Product:id'>Children</Link>
                    </div>
                </div>
                <div className="center">
                    <div className="item">
                        <h1>SAROJ ONLINE BUSINESS</h1>
                    </div>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className="link" to='/home'>Home</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to='/home'>About</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to='/home'>Contact</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to='/home'>Stores</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon />
                        <Person2OutlinedIcon />
                        <FavoriteBorderRoundedIcon />

                        <div className="cartIcon" onClick={() => setOpen(!open)}>
                            <ShoppingCartRoundedIcon />
                            <span>0</span>
                        </div>
                    </div>


                </div>
            </div>
            {open && <Cart />}
        </div>

    )
}

export default Navbar
