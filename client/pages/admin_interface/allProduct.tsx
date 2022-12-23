//@ts-nocheck
import React, { useState, useEffect } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Navbar from "../user_interface/Navbar";
import Footer from "../user_interface/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faEye,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Router from "next/router";
import Link from "next/link";
import { setDefaultResultOrder } from "dns";
import axios from "axios";


export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://localhost:4000/product/getall");
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}; 


export default function allProduct({ data }) {
  // const [allProducts, setAllProducts] = useState(data);
  const router = useRouter();

  const [stock, setStock] = useState([]);
  const [searched, setSearched] = useState(""); 

  const [user,setUser] =useState("") 
  console.log(("user",user));
  
  

  
  useEffect(()=>{
    if (typeof window !== 'undefined') {
      
      setUser(localStorage.getItem('USER_ID') ) 
    }  
  },[])   

  const del=(id)=>{  
    console.log("oui");
     
    console.log("oui");
    axios.delete(`http://localhost:4000/product/${id}`) 
    
    .then(res=> console.log(" product deleted")
    ) 
    .catch(err => console.log(err)) 
    window.location.reload(false)
  }
  

//   // add to the user cart the products that he picked 
//   const addToCart=(e)=>{ 
//     axios.put(`http://localhost:4000/users/addCart/${user}`,e) 
//     .then(res => console.log("added to cart ")) 
//     .catch(err =>{ console.log(err)
//     })
//   }  

//   const addToFavorite=(e)=>{ 
//     axios.put(`http://localhost:4000/users/addFavorite/${user}`,e) 
//     .then(res => console.log("added to cart ")) 
//     .catch(err =>{ console.log(err)
//     })
//   } 



  

  



  // filtre function
  let GetFiltredDatabyPrice = (min, max) => {
    axios
      .post("http://localhost:4000/product/price", {
        min: min,
        max: max,
      })
      .then((result) => {
        setStock(result.data);
      });
  };

  let GetFiltredDatabyColor = (our_color) => {
    axios
      .post("http://localhost:4000/product/color", {
        color: our_color,
      })
      .then((result) => {
        setStock(result.data);
      });
  };

  // searched Functions
  useEffect(() => {
    setStock(data);
  }, [searched !== ""]);

  
  const handleSearch = () => {
    if (searched === "") {
      setStock(data);
    }
    setStock((data) => {
      return data.filter((element) => {
        return element.productName
          .toLowerCase()
          .includes(searched.toLowerCase());
      });
    });
  };

  console.log("testdata", stock);

  // const filterByPrice: any = (min: any, max: any) => {
  //   const filtred = stock.filter((e) => e.price > min && e.price < max);
  //   setStock(filtred);
  // };

  // const filterByColor: any = (our_color) => {
  //   const filtred = stock.filter((e) => e.color === our_color);
  //   setStock(filtred);
  // }; 




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
                  {stock.map((e) => {
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
                            href={ {
                              pathname :"/admin_interface/edit/id" ,
                            } }
                           
                            className="btn btn-sm text-dark p-0"
                          >
                           
                            EDIT
                          </Link> 
                          {/* <a className="btn border" onClick={()=>{addToFavorite(e)}}>
                          <FontAwesomeIcon icon={faHeart}  />
                           <span className="badge">0</span>
                          </a> */}
                          <a  className="btn btn-sm text-dark p-0" onClick={()=>{ del(e._id)}} >
                            {/* <FontAwesomeIcon icon={faShoppingCart} /> */}
                           DELETE
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
