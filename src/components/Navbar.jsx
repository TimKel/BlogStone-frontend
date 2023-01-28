import React from 'react'
import Logo from "../img/blogstone1.png"
import { Link } from "react-router-dom"

const Navbar = ({logout}) => {
  return (
    <div className="navbar">
        <div className="container">
            <div className="logo">
                <Link className="link" to="/">
                <img src={Logo} alt="" />
                </Link>
            </div>
            <div className="links">
                <Link className="link" to="/?cat=art">
                    <h6>ART</h6>
                </Link>
                <Link className="link" to="/?cat=science">
                    <h6>SCIENCE</h6>
                </Link>
                <Link className="link" to="/?cat=technology">
                    <h6>TECHNOLOGY</h6>
                </Link>
                <Link className="link" to="/?cat=cinema">
                    <h6>CINEMA</h6>
                </Link>
                <Link className="link" to="/?cat=design">
                    <h6>DESIGN</h6>
                </Link>
                <Link className="link" to="/?cat=food">
                    <h6>FOOD</h6>
                </Link>
                <span>John "username"</span>
                <span onClick={logout}>Log Out</span>
                <span className="write">
                    <Link className="link" to="/write">Write</Link>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Navbar