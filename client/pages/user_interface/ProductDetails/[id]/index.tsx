//@ts-nocheck
import React,{useEffect,useState} from "react";
import { useRouter } from "next/router"; 
import axios from "axios";
import Navbar from "../../Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "../../Footer"




export default function ProductDetail() {  
  const router =useRouter()
  const [data, setData] = useState([]); 
  console.log(data);
  

  useEffect(() => {
    if (router.isReady) {
      // Code using query)

      
      axios
        .get(`http://localhost:4000/product/${router.query.id}`)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }
  }, [router.isReady]);




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
              Shop Detail
            </h1>
            <div className="d-inline-flex">
              <p className="m-0">Shop Detail</p>
            </div>
          </div>
        </div>
        {/* Page Header End */}
        {/* Shop Detail Start */}
        <div className="container-fluid py-5">
          <div className="row px-xl-5">
            <div className="col-lg-5 pb-5">
              <div
                id="product-carousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner border">
                  <div className="carousel-item active">
                    <img
                      className="w-100 h-100"
                      src= {data.imageUrl}
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 pb-5">
              <h3 className="font-weight-semi-bold">{data.productName}</h3>

              <h3 className="font-weight-semi-bold mb-4">{data.price} DT</h3>
              <p className="mb-4">
             color : {data.color}
              </p>

              <div className="d-flex align-items-center mb-4 pt-2">
                <div
                  className="input-group quantity mr-3"
                  style={{ width: 130 }}
                >
                  <div className="input-group-btn">
                    <button className="btn btn-primary btn-minus">
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control bg-secondary text-center"
                    defaultValue={2}
                  />
                  <div className="input-group-btn">
                    <button className="btn btn-primary btn-plus">
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                </div>
                <button className="btn btn-primary px-3">
                  <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart
                </button>
              </div>
              <div className="d-flex pt-2">
                <b className="text-dark font-weight-medium mb-0 mr-2">
                  Share on:
                </b>
                <div className="d-inline-flex">
                  <a className="text-dark px-2">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a className="text-dark px-2">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a className="text-dark px-2" href="">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a className="text-dark px-2" href="">
                    <i className="fab fa-pinterest" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row px-xl-5">
            <div className="col">
              <div className="nav nav-tabs justify-content-center border-secondary mb-4">
                <a
                  className="nav-item nav-link active"
                  data-toggle="tab"
                  href="#tab-pane-1"
                >
                  Description
                </a>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab-pane-1">
                  <h4 className="mb-3">Product Description</h4>
                  <p>
                 {data.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Shop Detail End */}

        {/* Footer Start */}
        <Footer />
      </>
    </div>
  );
}
