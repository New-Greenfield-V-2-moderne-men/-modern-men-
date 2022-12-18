//@ts-nocheck
import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTruckFast,
  faExchange,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function home() {
  const images = [
    {
      url: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/11/Tshirt-design.jpg?auto=format&q=60&w=2060&h=2060&fit=crop&crop=faces",
    },
    {
      url: "https://media.gucci.com/content/DiaryHeroArticle_Standard_1600x812/1655895611/DiaryHeroArticle_Gucci-Pet-Collection-01_001_Default.jpg",
    },
    {
      url: "https://powerofthepaw.org/wp-content/uploads/2021/02/4-870x400.jpeg",
    },
    {
      url: "https://www.foundanimals.org/wp-content/uploads/2019/01/pet-accessories.jpg",
    },
    {
      url: "https://www.k9ofmine.com/wp-content/uploads/2021/12/dog-modeling-jobs.jpg",
    },
  ];

  return (
    <div>
      <>
        <Navbar />
        {/* Navbar Start */}
        <div className="container-fluid mb-5">
          <div className="row border-top px-xl-5">
            <div className="col-lg-3 d-none d-lg-block"></div>
            <div className="col-lg-9">
              <div
                id="header-carousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <SimpleImageSlider
                      width={1600}
                      height={410}
                      images={images}
                      showBullets={true}
                      showNavs={true}
                    />

                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                      <div className="p-3" style={{ maxWidth: 700 }}>
                        <h4 className="text-light text-uppercase font-weight-medium mb-3">
                          10% Off Your First Order
                        </h4>
                        <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                          Fashionable Clothes
                        </h3>
                        <a href="" className="btn btn-light py-2 px-3">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" style={{ height: 410 }}>
                    <img
                      className="img-fluid"
                      src="img/carousel-2.jpg"
                      alt="Image"
                    />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                      <div className="p-3" style={{ maxWidth: 700 }}>
                        <h4 className="text-light text-uppercase font-weight-medium mb-3">
                          10% Off Your First Order
                        </h4>
                        <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                          Reasonable Price
                        </h3>
                        <a href="" className="btn btn-light py-2 px-3">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Navbar End */}
        {/* Featured Start */}
        <div className="container-fluid pt-5">
          <div className="row px-xl-5 pb-3">
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div
                className="d-flex align-items-center border mb-4"
                style={{ padding: 20 }}
              >
                <h1 className="fa fa-check text-primary m-0 mr-3" />
                <FontAwesomeIcon icon={faCheck} style={{ padding: 20 }} />
                <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div
                className="d-flex align-items-center border mb-4"
                style={{ padding: 20 }}
              >
                <h1 className="fa fa-shipping-fast text-primary m-0 mr-2" />
                <FontAwesomeIcon icon={faTruckFast} style={{ padding: 20 }} />
                <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div
                className="d-flex align-items-center border mb-4"
                style={{ padding: 20 }}
              >
                <h1 className="fas fa-exchange-alt text-primary m-0 mr-3" />
                <FontAwesomeIcon icon={faExchange} style={{ padding: 20 }} />
                <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div
                className="d-flex align-items-center border mb-4"
                style={{ padding: 20 }}
              >
                <h1 className="fa fa-phone-volume text-primary m-0 mr-3" />
                <FontAwesomeIcon icon={faPhoneVolume} style={{ padding: 20 }} />
                <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
              </div>
            </div>
          </div>
        </div>
        {/* Featured End */}
        {/* Categories Start */}
        <div className="container-fluid pt-5">
          <div className="row px-xl-5 pb-3">
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="cat-item d-flex flex-column border mb-4"
                style={{ padding: 40 }}
              >
                <p className="text-right">15 Products</p>
                <a
                  href=""
                  className="cat-img position-relative overflow-hidden mb-3"
                >
                  <img
                    className="img-fluid"
                    src="https://www.classb.com/wordpress/wp-content/uploads/2016/11/Shooting_Clay_idea_SP6024.png"
                    alt=""
                  />
                </a>
                <h5 className="font-weight-semi-bold m-0">T-shirt</h5>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="cat-item d-flex flex-column border mb-4"
                style={{ padding: 30 }}
              >
                <p className="text-right">15 Products</p>
                <a
                  href=""
                  className="cat-img position-relative overflow-hidden mb-3"
                >
                  <img
                    className="img-fluid"
                    src="https://www.classb.com/wordpress/wp-content/uploads/2016/11/Shooting_Clay_idea_SP6024.png"
                    alt=""
                  />
                </a>
                <h5 className="font-weight-semi-bold m-0">Jeans</h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="cat-item d-flex flex-column border mb-4"
                style={{ padding: 30 }}
              >
                <p className="text-right">15 Products</p>
                <a
                  href=""
                  className="cat-img position-relative overflow-hidden mb-3"
                >
                  <img
                    className="img-fluid"
                    src="https://www.classb.com/wordpress/wp-content/uploads/2016/11/Shooting_Clay_idea_SP6024.png"
                    alt=""
                  />
                </a>
                <h5 className="font-weight-semi-bold m-0">Shoes</h5>
              </div>
            </div>
          </div>
        </div>
        {/* Categories End */}
        {/* Offer Start */}
        <div className="container-fluid offer pt-5">
          <div className="row px-xl-5">
            <div className="col-md-6 pb-4">
              <div className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
                <img
                  src="https://i.pinimg.com/originals/74/db/38/74db381d0642cb7efaf11bc8de99a8d8.jpg"
                  alt=""
                />
                <div className="position-relative" style={{ zIndex: 1 }}>
                  <h5 className="text-uppercase text-primary mb-3">
                    10% off the all order
                  </h5>
                  <h1 className="mb-4 font-weight-semi-bold">
                    Spring Collection
                  </h1>
                  <a
                    href=""
                    className="btn btn-outline-primary py-md-2 px-md-3"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 pb-4">
              <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPTBPlY6C4QhR75kVdiHwcJHDZ7ZO2IbRGoQ&usqp=CAU"
                  alt=""
                />
                <div className="position-relative" style={{ zIndex: 1 }}>
                  <h5 className="text-uppercase text-primary mb-3">
                    10% off the all order
                  </h5>
                  <h1 className="mb-4 font-weight-semi-bold">
                    Winter Collection
                  </h1>
                  <a
                    href=""
                    className="btn btn-outline-primary py-md-2 px-md-3"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Offer End */}

        {/* Subscribe Start */}
        <div className="container-fluid bg-secondary my-5">
          <div className="row justify-content-md-center py-5 px-xl-5">
            <div className="col-md-6 col-12 py-5">
              <div className="text-center mb-2 pb-2">
                <h2 className="section-title px-5 mb-3">
                  <span className="bg-secondary px-2">Stay Updated</span>
                </h2>
                <p>
                  Don’t miss any updates of our new offers and features lll.!
                </p>
              </div>
              <form action="">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control border-white p-4"
                    placeholder="Email Goes Here"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary px-4">Subscribe</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Subscribe End */}

        {/* Footer Start */}
        <Footer />
        {/* Back to Top */}
        <a href="#" className="btn btn-primary back-to-top">
          <i className="fa fa-angle-double-up" />
        </a>
        {/* JavaScript Libraries */}
        {/* Contact Javascript File */}
        {/* Template Javascript */}
      </>
    </div>
  );
}
