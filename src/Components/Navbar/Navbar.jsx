import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import "./Navbar.scss"
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import search from '../Search/search';
import WidgetsIcon from '@mui/icons-material/Widgets';
import Menu from '../Menu/Menu';


const Navbar = () => {

    const products = useSelector(state => state.cart.products)

    const [open, setOpen] = useState(false);

    const [menu, setMenu] = useState(false)



    return (

        <div className="navbar">
            <div className="large-device">
                <div className="left">
                    <div className="item">
                        <KeyboardArrowDownIcon />
                        <img src={require('../photos/flag.png')} />
                    </div>
                    <div className="item">
                        <KeyboardArrowDownIcon />
                        <span>NP</span>
                    </div>
                    <div className="item">
                        <Link className="link" to='/Products/:id'>Men</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to='/Products/:id'>Women</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to='/Product:id'>Children</Link>
                    </div>
                </div>
                <div className="center">
                    <div className="item">
                        <p>SAROJ ONLINE BUSINESS</p>
                    </div>
                </div>
                <div className="right">
                    <div className="item">
                        <Link className="link" to="/" path="/">Home</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/about">About</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to='/contact'>Contact</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/store">Stores</Link>
                    </div>
                    <div className="icons">


                        <Person2OutlinedIcon />
                        <FavoriteBorderRoundedIcon />

                        <div className="cartIcon" onClick={() => setOpen(!open)}>
                            <ShoppingCartRoundedIcon />
                            <span>{products.length || products.length == 0 && ''}</span>
                        </div>
                        <div className="mobile" onClick={() => setMenu(!menu)}>
                            <WidgetsIcon />
                        </div>
                    </div>


                </div>
            </div>
            {open && <Cart />}
            {menu && <Menu />}

        </div>

    )
}

export default Navbar
