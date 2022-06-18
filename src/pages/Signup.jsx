import {useState} from "react";
import React from "react";
import {Link} from "react-router-dom";

function Signup() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const postData = (event) => {
        event.preventdefault();
        fetch("https://fakestoreapi.com/products", {
            method: "POST",
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
    };
    return (
        <div className="signUp-body">
            <section>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-5 mt-5 mb-5">
                            <div className="card">
                                <h2 className="card-title text-center signUp-h2">
                                    Register{" "}

                                </h2>
                                <div className="card-body py-md-4">
                                    <form _lpchecked="1">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder="Name"
                                                onChange={(e) =>
                                                    setFormData({...formData, name: e.target.value})
                                                }
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="Email"
                                                onChange={(e) =>
                                                    setFormData({...formData, email: e.target.value})
                                                }
                                            />
                                        </div>

                                        <div className="form-group">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password"
                                                placeholder="Password"
                                                onChange={(e) =>
                                                    setFormData({...formData, password: e.target.value})
                                                }
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="confirm-password"
                                                placeholder="confirm-password"
                                            />
                                        </div>
                                        <div className="d-flex flex-row align-items-center justify-content-between">
                                            <Link to="/Login">You already have an Account</Link>
                                            <button className="btn btn-primary" onClick={postData}>
                                                Create Account
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Signup;
