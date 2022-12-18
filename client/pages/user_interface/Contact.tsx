import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div>
      <>
        <Navbar />
        {/* Page Header Start */}
        <div className="container-fluid bg-secondary mb-5">
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: 300 }}
          >
            <h1 className="font-weight-semi-bold text-uppercase mb-3">
              Contact Us
            </h1>
            <div className="d-inline-flex">
              <p className="m-0">Contact Us </p>
            </div>
          </div>
        </div>
        {/* Page Header End */}
        {/* Contact Start */}
        <div className="container-fluid pt-5">
          <div className="text-center mb-4">
            <h2 className="section-title px-5">
              <span className="px-2">Contact For Any Queries</span>
            </h2>
          </div>
          <div className="row px-xl-5">
            <div className="col-lg-7 mb-5">
              <div className="contact-form">
                <div id="success" />
                <form name="sentMessage" id="contactForm">
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      data-validation-required-message="Please enter your name"
                    />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="control-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                      data-validation-required-message="Please enter your email"
                    />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                      data-validation-required-message="Please enter a subject"
                    />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="control-group">
                    <textarea
                      className="form-control"
                      rows={6}
                      id="message"
                      placeholder="Message"
                      data-validation-required-message="Please enter your message"
                      defaultValue={""}
                    />
                    <p className="help-block text-danger" />
                  </div>
                  <div>
                    <button
                      className="btn btn-primary py-2 px-4"
                      type="submit"
                      id="sendMessageButton"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 mb-5">
              <h5 className="font-weight-semi-bold mb-3">Get In Touch</h5>
              <p>
                To better aid in routing your mail quicker, please indicate in
                the address above which one of the following departments you
                would like to contact.
              </p>
              <div className="d-flex flex-column mb-3">
                <h5 className="font-weight-semi-bold mb-3">Store 1</h5>
                <p className="mb-2">
                  <FontAwesomeIcon icon={faMapMarkedAlt} />
                  B23, Technopark Elghazela ariana, 2088
                </p>
                <p className="mb-2">
                  <FontAwesomeIcon icon={faEnvelope} />
                  project@example.com
                </p>
                <p className="mb-2">
                  <FontAwesomeIcon icon={faPhoneAlt} />
                  +216 20 057 068
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Contact End */}
        {/* Footer Start */}
        <Footer />
      </>
    </div>
  );
}
