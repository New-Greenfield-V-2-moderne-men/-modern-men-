import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div>
      <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
        <div className="row px-xl-5 pt-5">
          <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
            <a href="" className="text-decoration-none">
              <h1 className="mb-4 display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border border-white px-3 mr-1">
                  Modern
                </span>
                Men
              </h1>
            </a>
            <p>
              New Low Prices on our Best-Selling Styles. Shop Men's Wearhouse
              New Arrivals & Collection Today! Find Top Designer Men's Clothing
              in Latest Styles, .
            </p>
            <p className="mb-2">
              <FontAwesomeIcon icon={faMapMarkedAlt} />
              B23, Technopark Elghazela ariana, 2088
            </p>
            <p className="mb-2">
              <FontAwesomeIcon icon={faEnvelope} />
              project@example.com
            </p>
            <p className="mb-0">
              <FontAwesomeIcon icon={faPhoneAlt} />
              +216 20 057 068
            </p>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-md-4 mb-5">
                <h5 className="font-weight-bold text-dark mb-4">Quick Links</h5>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-dark mb-2" href="index.html">
                    <i className="fa fa-angle-right mr-2" />
                    Home
                  </a>
                  <a className="text-dark mb-2" href="shop.html">
                    <i className="fa fa-angle-right mr-2" />
                    All Product
                  </a>

                  <a className="text-dark mb-2" href="cart.html">
                    <i className="fa fa-angle-right mr-2" />
                    Shopping Cart
                  </a>
                  <a className="text-dark mb-2" href="checkout.html">
                    <i className="fa fa-angle-right mr-2" />
                    Contact Us
                  </a>
                  <a className="text-dark" href="contact.html">
                    <i className="fa fa-angle-right mr-2" />
                    About Us
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="font-weight-bold text-dark mb-4">
                  Developed With
                </h5>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-dark mb-2" href="index.html">
                    Type Script
                  </a>
                  <a className="text-dark mb-2" href="index.html">
                    React
                  </a>
                  <a className="text-dark mb-2" href="shop.html">
                    Next js
                  </a>
                  <a className="text-dark mb-2" href="detail.html">
                    Bootstrap
                  </a>

                  <a className="text-dark" href="contact.html">
                    Mongo DB
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="font-weight-bold text-dark mb-4">Newsletter</h5>
                <form action="">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control border-0 py-4"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control border-0 py-4"
                      placeholder="Your Email"
                    />
                  </div>
                  <div>
                    <button
                      className="btn btn-primary btn-block border-0 py-3"
                      type="submit"
                    >
                      Subscribe Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;{/* Footer End */}
    </div>
  );
}
