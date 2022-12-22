//@ts-nocheck
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
export default function Signin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [messageError, setMessageError] = useState("");
  const [error, setError] = useState(false);

  const handleSignUp = async () => {
    axios
      .post("http://localhost:4000/users/register", {
        name: name,
        email: email,
        password: password,
        isAdmin: false,
      })
      .then(() => {
        alert("account has been created");
        router.push("/user_interface/home");
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setMessageError(error.response.data.message);
        setError(true);
      });
  };
  return (
    <div>
      {" "}
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name" />
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email" />
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pass">
                    <i className="zmdi zmdi-lock" />
                  </label>
                  <input
                    type="password"
                    name="pass"
                    id="pass"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="re-pass">
                    <i className="zmdi zmdi-lock-outline" />
                  </label>
                </div>
                <div className="form-group">
                  <input
                    type="checkbox"
                    name="agree-term"
                    id="agree-term"
                    className="agree-term"
                  />
                  <label htmlFor="agree-term" className="label-agree-term">
                    <span>
                      <span />
                    </span>
                    I agree all statements in{" "}
                    <a href="#" className="term-service">
                      Terms of service
                    </a>
                  </label>
                </div>
                <div className="form-group form-button"></div>
              </form>
              <button
                name="signup"
                id="signup"
                className="form-submit"
                onClick={() => {
                  handleSignUp();
                }}
              >
                {" "}
                Sign Up
              </button>
              <div>
                {error ? <p style={{ color: "red" }}>{messageError}</p> : null}{" "}
              </div>
            </div>
            <div className="signup-image">
              <figure>
                <img
                  src="https://image.shutterstock.com/image-vector/man-key-near-computer-account-260nw-1499141258.jpg"
                  alt="sing up image"
                />
              </figure>
              <strong
                onClick={() => {
                  router.push("../login_interface/Login");
                }}
                className="signup-image-link"
              >
                I am already member
              </strong>
            </div>
          </div>
        </div>
      </section>
      ;
    </div>
  );
}
