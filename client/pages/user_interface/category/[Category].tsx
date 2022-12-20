//@ts-nocheck
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import Navbar from "../Navbar";
import Footer from "../Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faEye,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

export default function Category(props) {
  const [mydata, setMyData] = useState([]);

  const router = useRouter();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/product/find/${router.query.Category}`)
      .then((response) => {
        console.log("testtt", [response.data]);
        setMyData([response.data]);
      });
    console.log(router.query.Category, "inside the useEffect");
  }, []);
  console.log("final", mydata);
  return (
    <div>
      <>
        {/* <Navbar />
        {/* Page Header Start */}
        <div className="container-fluid bg-secondary mb-5">
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: 300 }}
          >
            <h1 className="font-weight-semi-bold text-uppercase mb-3">
              Our Shop
            </h1>
            <div className="d-inline-flex">
              <p className="m-0">All Products</p>
            </div>
          </div>
        </div>
        {/* Page Header End */}
        {/* Shop Start */}
        <div className="container-fluid pt-5">
          <div className="row px-xl-5">
            {/* Shop Sidebar Start */}
            <div className="col-lg-3 col-md-12">
              {/* Price Start */}{" "}
              <div className="border-bottom mb-4 pb-4">
                <h5 className="font-weight-semi-bold mb-4">Filter by price</h5>

                <form>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="price-all"
                      onClick={() => {
                        GetFiltredDatabyPrice(0, 500);
                      }}
                    />
                    <label className="custom-control-label" htmlFor="price-all">
                      All Price
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="price-1"
                      onClick={() => {
                        GetFiltredDatabyPrice(0, 100);
                      }}
                      required
                    />
                    <label className="custom-control-label" htmlFor="price-1">
                      0 - 100 dt
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      onClick={() => {
                        GetFiltredDatabyPrice(100, 200);
                      }}
                      type="checkbox"
                      className="custom-control-input"
                      id="price-2"
                    />
                    <label className="custom-control-label" htmlFor="price-2">
                      100 - 200 dt
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      onClick={() => {
                        GetFiltredDatabyPrice(200, 300);
                      }}
                      type="checkbox"
                      className="custom-control-input"
                      id="price-3"
                    />
                    <label className="custom-control-label" htmlFor="price-3">
                      200 - 300 dt
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      onClick={() => {
                        GetFiltredDatabyPrice(300, 400);
                      }}
                      type="checkbox"
                      className="custom-control-input"
                      id="price-4"
                    />
                    <label className="custom-control-label" htmlFor="price-4">
                      300 - 400 dt
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="price-5"
                      onClick={() => {
                        GetFiltredDatabyPrice(400, 500);
                      }}
                    />
                    <label className="custom-control-label" htmlFor="price-5">
                      400 - 500 dt
                    </label>
                  </div>
                </form>
              </div>
              {/* Price End */}
              {/* Color Start */}
              <div className="border-bottom mb-4 pb-4">
                <h5 className="font-weight-semi-bold mb-4">Filter by color</h5>
                <form>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      onClick={() => {
                        GetFiltredDatabyPrice(0, 500);
                      }}
                      type="checkbox"
                      className="custom-control-input"
                      id="color-all"
                    />
                    <label className="custom-control-label" htmlFor="price-all">
                      All Color
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="color-1"
                      onClick={() => {
                        GetFiltredDatabyColor("Black");
                      }}
                    />
                    <label className="custom-control-label" htmlFor="color-1">
                      Black
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      onClick={() => {
                        GetFiltredDatabyColor("White");
                      }}
                      type="checkbox"
                      className="custom-control-input"
                      id="color-2"
                    />
                    <label className="custom-control-label" htmlFor="color-2">
                      White
                    </label>
                  </div>

                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      onClick={() => {
                        GetFiltredDatabyColor("Blue");
                      }}
                      type="checkbox"
                      className="custom-control-input"
                      id="color-4"
                    />
                    <label className="custom-control-label" htmlFor="color-4">
                      Blue
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                    <input
                      onClick={() => {
                        GetFiltredDatabyColor("Green");
                      }}
                      type="checkbox"
                      className="custom-control-input"
                      id="color-5"
                    />
                    <label className="custom-control-label" htmlFor="color-5">
                      Green
                    </label>
                  </div>
                </form>
              </div>
              {/* Color End */}
              {/* Size Start */}
              <div className="mb-5">
                <h5 className="font-weight-semi-bold mb-4">Filter by size</h5>
                <form>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      defaultChecked="All Size"
                      id="size-all"
                    />
                    <label className="custom-control-label" htmlFor="size-all">
                      All Size
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="size-1"
                    />
                    <label className="custom-control-label" htmlFor="size-1">
                      XS
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="size-2"
                    />
                    <label className="custom-control-label" htmlFor="size-2">
                      S
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="size-3"
                    />
                    <label className="custom-control-label" htmlFor="size-3">
                      M
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="size-4"
                    />
                    <label className="custom-control-label" htmlFor="size-4">
                      L
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="size-5"
                    />
                    <label className="custom-control-label" htmlFor="size-5">
                      XL
                    </label>
                  </div>
                </form>
              </div>
              {/* Size End */}
            </div>
            {/* Shop Sidebar End */}
            {/* Shop Product Start */}
            <div className="col-lg-9 col-md-12">
              <div className="row pb-3">
                <div className="col-12 pb-1">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <form action="">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search by name"
                          onChange={(e) => {
                            setSearched(e.target.value);
                          }}
                        />
                        <div className="input-group-append">
                          <span
                            className="input-group-text bg-transparent text-primary"
                            onClick={() => {
                              handleSearch();
                            }}
                          >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                          </span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="gridcontainer">
                  {mydata.map((e) => {
                    return (
                      <div className="card product-item border-0 mb-4">
                        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                          <img
                            className="img-fluid w-100"
                            src={e.imageUrl}
                            alt=""
                          />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                          <h6 className="text-truncate mb-3">
                            {e.productName}
                          </h6>
                          <div className="d-flex justify-content-center">
                            <h6> {e.price} dt</h6>
                            <h6 className="text-muted ml-2">
                              <del>{e.price + 20}</del>
                            </h6>
                          </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                          <Link
                            href={"/user_interface/ProductDetails/id"}
                            as={`/user_interface/ProductDetails/${e._id}`}
                            className="btn btn-sm text-dark p-0"
                          >
                            <FontAwesomeIcon icon={faEye} />
                            View Detail
                          </Link>
                          <a
                            className="btn border"
                            onClick={() => {
                              addToFavorite(e);
                            }}
                          >
                            <FontAwesomeIcon icon={faHeart} />
                            <span className="badge">0</span>
                          </a>
                          <a
                            className="btn btn-sm text-dark p-0"
                            onClick={() => {
                              addToCart(e);
                            }}
                          >
                            <FontAwesomeIcon icon={faShoppingCart} />
                            Add To Cart
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* //////////////////////// */}
                <div className="col-12 pb-1">
                  <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center mb-3">
                      <li className="page-item disabled">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">«</span>
                          <span className="sr-only">Previous</span>
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>

                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">»</span>
                          <span className="sr-only">Next</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {/* Shop Product End */}
          </div>
        </div>
        {/* Shop End */}
        {/* Footer Start */}
        <Footer />
      </>
    </div>
  );
}