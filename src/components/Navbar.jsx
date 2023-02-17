import React, {useContext} from 'react'
import Logo from "../img/blogstone1.png"
import { Link, useNavigate } from "react-router-dom"
import UserContext from '../common/UserContext'

const Navbar = () => {
    const { currentUser, logout } = useContext(UserContext);
    // const navigate = useNavigate();

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
                
                <span class="link">{currentUser?.username}</span>
                {currentUser ? <span className="link" onClick={logout}>Log Out</span> : <Link className="link" to="/login">Login</Link>}
                {currentUser ? <span className="write">
                                <Link className="link" to="/write">Write</Link>
                                </span>
                : <Link className="link" to="/register">Sign up</Link>}
            </div>
        </div>
    </div>
  )
}

export default Navbar