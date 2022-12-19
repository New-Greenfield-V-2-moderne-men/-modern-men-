//@ts-nocheck
import React ,{useState}from "react";
import {
  faFacebookF,
  faLinkedin,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router"; 


export default function Navbar() {
  const router = useRouter();
  const [name,setName] = useState('') 
  console.log(name);
  
  return (
    <div>
      {/* Topbar Start */}
      <div className="container-fluid">
        <div className="row bg-secondary py-2 px-xl-5">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="d-inline-flex align-items-center">
              <a className="text-dark" href="">
                Help
              </a>
              <span className="text-muted px-2">|</span>
              <a className="text-dark" href="">
                Support
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <a className="text-dark px-2" href="">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a className="text-dark px-2" href="">
                <FontAwesomeIcon icon={faTwitter} />
                <i className="fab fa-twitter" />
              </a>
              <a className="text-dark px-2" href="">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a className="text-dark px-2" href="">
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a className="text-dark pl-2" href="">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
        <div className="row align-items-center py-3 px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a href="" className="text-decoration-none">
              <h1 className="m-0 display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border px-3 mr-1">
                  Modern
                </span>
                Men
              </h1>
            </a>
          </div>
          <div className="col-lg-6 col-6 text-left">
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for products" 
                  onChange={(e)=>{setName(e.target.value)}}
                />
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-primary">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-3 col-6 text-right">
            <a href="" className="btn border">
              {/* <i className="fas fa-heart text-primary" /> */}
              <FontAwesomeIcon icon={faHeart} />
              <span className="badge">0</span>
            </a>
            <a href="" className="btn border">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="badge">0</span>
            </a>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      <div className="container-fluid mb-5">
        <div className="row border-top px-xl-5">
          <div className="col-lg-3 d-none d-lg-block"></div>
          <div className="col-lg-9"></div>

          <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
            <a href="" className="text-decoration-none d-block d-lg-none">
              <h1 className="m-0 display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border px-3 mr-1">
                  Modern
                </span>
                Men
              </h1>
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav mr-auto py-0">
                <a
                  className="nav-item nav-link active"
                  onClick={() => {
                    router.push("../user_interface/home");
                  }}
                >
                  Home
                </a>
                <a
                  onClick={() => {
                    router.push("../user_interface/allProduct");
                  }}
                  className="nav-item nav-link"
                >
                  All Product
                </a>

                <a
                  onClick={() => {
                    router.push("../user_interface/Contact");
                  }}
                  className="nav-item nav-link"
                >
                  Contact
                </a>
                <a
                  onClick={() => {
                    router.push("../user_interface/About");
                  }}
                  className="nav-item nav-link"
                >
                  About Us
                </a>
              </div>
              <div className="navbar-nav ml-auto py-0">
                <a
                  onClick={() => {
                    router.push("../login_interface/Login");
                  }}
                  className="nav-item nav-link"
                >
                  Logout
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
