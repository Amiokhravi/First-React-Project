import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className="login-body">
            <section className="Login-container">
                <div className="p-box" id="container">
                    <div className="form-container sign-in-container">
                        <form action="#" className="login-form">
                            <h1 className="login-h text-info ">Log In</h1>
                            <div className="social-container">
                                <a href="#" className="social login-a">
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a href="#" className="social login-a">
                                    <i className="bi bi-google"></i>
                                </a>
                                <a href="#" className="social login-a">
                                    <i className="bi bi-linkedin"></i>
                                </a>
                            </div>
                            <span className="login-span">or use your account</span>
                            <input type="email" placeholder="Email" className="login-input"/>
                            <input
                                type="password"
                                placeholder="Password"
                                className="login-input"
                            />
                            <a href="#" className="login-a">
                                Forgot your password?
                            </a>
                            <button className="login-btn">Log In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-right">
                                <h1 className="login-h">Hello,MyFriend</h1>
                                <p className="login-p">
                                    Enter your personal details and start journey with us
                                </p>
                                <Link to="/Signup" className="signup-link">
                                    <button className="login-btn" id="signUp">
                                        Sign Up
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;
