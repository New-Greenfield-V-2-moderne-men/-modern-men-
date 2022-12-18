//@ts-nocheck
import React,{useState,useEffect} from "react"; 
import { GetStaticPaths, GetStaticProps } from "next";
import Navbar from "./Navbar";
import Filter from "./Filter";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faEye,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";  
import Router from "next/router"; 
import Link from "next/link";


export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://localhost:4000/product");
  const data = await response.json();
  return {
    props: {
      data
    },
  }; 
};

export default function allProduct({data}) { 
  
  const router = useRouter(); 

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
              {/* Price Start */}
              <Filter />
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
                        />
                        <div className="input-group-append">
                          <span className="input-group-text bg-transparent text-primary">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                          </span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 pb-1"> 
                {data.map((e)=>{ return(
                  <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                      <img
                        className="img-fluid w-100"
                        src= {e.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                      <h6 className="text-truncate mb-3">{e.productName}</h6>
                      <div className="d-flex justify-content-center">
                        <h6> {e.price} dt</h6>
                        <h6 className="text-muted ml-2">
                          <del>60 dt</del>
                        </h6>
                      </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border"> 

                    
                      <Link
                       href={"/user_interface/ProductDetails/id" } as = {`/user_interface/ProductDetails/${e._id}`}
                        className="btn btn-sm text-dark p-0"
                      >
                        <FontAwesomeIcon icon={faEye} />
                        View Detail
                      </Link>
                      <a href="" className="btn btn-sm text-dark p-0">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        Add To Cart
                      </a>
                    </div>
                  </div>)})}
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
