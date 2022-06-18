import React from "react";

function Footer() {
    return (
        <footer className="main-footer">
            <div className="container d-flex justify-content-around  align-items-center">
                <div className="list-1 d-flex ">
                    <ul className="d-flex flex-column">
                        <li>About</li>
                        <li>Press</li>
                        <li>Terms & Privacy</li>
                        <li>DMCA</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div
                    className="social-icons text-center justify-content-center  align-items-center d-flex flex-column ">
                    <div className="icons-container mb-4 mt-3">
                        <i className="bi bi-instagram rounded-circle p-3"></i>
                        <i className="bi bi-linkedin ms-5 rounded-circle p-3"></i>
                        <i className="bi bi-facebook ms-5 rounded-circle p-3"></i>
                    </div>
                    <div className="donate-box"><i className="bi bi-clipboard-heart"> Donate</i></div>
                </div>
                <div className="list-2 d-flex">
                    <ul className="d-flex flex-column">
                        <li>FAQ</li>
                        <li>Food API</li>
                        <li>Newsletter</li>
                        <li>Food Chatbot</li>
                        <li>Chrome Extension</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
