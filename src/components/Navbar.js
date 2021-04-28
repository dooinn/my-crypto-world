import React from 'react'
import { Nav } from '../styles/NavbarElements'
import { Link } from 'react-router-dom'



const Navbar = () => {
    return (
        <Nav>
            <Link to="/">

                <h1 className="logo">My Crypto World</h1>
            </Link>
            <Link to="/" className="mylist-nav">
                <h4>My Coin List</h4>
            </Link>

        </Nav>
    )
}

export default Navbar
