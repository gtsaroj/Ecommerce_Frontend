import { React } from 'react'
import { Link } from 'react-router-dom'
import "./Menu.scss"

const Menu = () => {
    return (

        <div className="menu">

            <div className="layout">
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
                </div>
                {/* ===================================================================================== */}

                <div className="left">
                    <h3>Categories</h3>
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
            </div>

        </div>

    )
}

export default Menu
