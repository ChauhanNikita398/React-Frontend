import React from 'react'
import Logo from '../assets/logo2.png'
import {Nav, NavLink, NavMenu, NavBtn, NavBtnLink} from "./NavbarElements"

function Navbar() {
    return (
        <Nav id="id1">            
            <img src={Logo} alt="Logo" 
            style={{"height":"70px", "align":'left'}} ></img>
            
            
            <NavMenu>
                <NavLink to="/" activestyles="true">Home</NavLink>
                <NavLink to="/" activestyles="true">About</NavLink>
                <NavLink to="/" activestyles="true">Products</NavLink>
                <NavLink to="/" activestyles="true">Services</NavLink>
                <NavLink to="/" activestyles="true">Portfolio</NavLink>
                <NavBtn><NavBtnLink to="/">Contact US</NavBtnLink></NavBtn>
            </NavMenu>
        
        </Nav>
    )
}

export default Navbar
