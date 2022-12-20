//@ts-nocheck
import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  faFacebookF,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [errormessage, setErrormessage] = useState("");
  let [error, setError] = useState(false);
  // console.log("fegeg");
  const handleLogin = async () => {
    try {
      const loginReq = await axios
        .post("http://localhost:4000/users/login", {
          email: email,
          password: password,
        })
        .then((response) => {
          const encodedToken = response.data.token.toString().split(".")[1];
          const decodedToken = atob(encodedToken);
          const payload = JSON.parse(decodedToken);
          localStorage.setItem("IS_ADMIN", payload.isAdmin);
          localStorage.setItem("USER_ID", payload.id);
          localStorage.setItem("USER_NAME", payload.name);
        })
        .then(() => {
          displayComponent();
        });
    } catch (error) {
      console.log(error.response.data.message);
      setErrormessage(error.response.data.message);
      setError(true);
    }
  };

  const displayComponent = () => {
    let GetRole = localStorage.getItem("IS_ADMIN");
    let Parsed_Get_Role = JSON.parse(GetRole);

    console.log("test", Parsed_Get_Role);
    if (Parsed_Get_Role === true) {
      return router.push("/admin_interface/allProduct");
    } else if (Parsed_Get_Role === false) {
      return router.push("/user_interface/home");
    }
  };
  return (
    <div>
      <>
        <section className="sign-in">
          <div className="container">
            <div className="signinz-content">
              <div className="signin-image">
                <figure>
                  <img
                    src="https://pmb.unespadang.ac.id/assets/ilustration-login.23ef2507.svg"
                    alt="sing up image"
                  />
                </figure>
                <a
                  onClick={() => {
                    router.push("../login_interface/Signin");
                  }}
                  className="signup-image-link"
                >
                  Create an account
                </a>
              </div>
              <div className="signin-form">
                <h2 className="form-title">Log in</h2>
                <form method="POST" className="register-form" id="login-form">
                  <div className="form-group">
                    <label htmlFor="your_name">
                      <i className="zmdi zmdi-account material-icons-name" />
                    </label>
                    <input
                      type="text"
                      name="your_email"
                      id="your_name"
                      placeholder="Your_email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="your_pass">
                      <i className="zmdi zmdi-lock" />
                    </label>
                    <input
                      type="password"
                      name="your_pass"
                      id="your_pass"
                      placeholder="Password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="remember-me"
                      id="remember-me"
                      className="agree-term"
                    />
                    <label htmlFor="remember-me" className="label-agree-term">
                      <span>
                        <span />
                      </span>
                      Remember me
                    </label>
                  </div>
                  <div className="form-group form-button"></div>
                </form>
                <button
                  onClick={() => {
                    handleLogin();
                    router.push("../user_interface/home");
                  }}
                  id="signin"
                  className="form-submit"
                >
                  Log In
                </button>{" "}
                <div className="social-login">
                  <span className="social-label">Or login with</span>
                  <ul className="socials">
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faGoogle} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}
