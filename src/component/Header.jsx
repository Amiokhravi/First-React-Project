import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <nav className="main-nav d-flex">
            <div className="container d-flex justify-content-around  align-items-center">
                <Link to="/">
                    <div className="brand-icon inline-block"></div>
                </Link>
                <div className="nav-menu inline-block">
                    <div className="nav-menu-child">
                        <ul className="d-flex">
                            <Link className="navigation" to="/">
                                <li>Home</li>
                            </Link>
                            <Link className="navigation" to="/AdvanceSearch">
                                <li className="ms-5">Advance Search</li>
                            </Link>
                            <Link className="navigation" to="/About">
                                <li className="ms-5">About Us</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className="nav-login-Signup d-flex">
                    <Link className="login" to="/Login">
                        <i className="bi bi-person-fill"> Login</i>
                    </Link>
                    <Link className="Signup ms-4" to="/Signup">
                        <i className="bi bi-box-arrow-in-right"> Sign Up</i>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Header;
