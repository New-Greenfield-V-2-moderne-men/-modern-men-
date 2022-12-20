//@ts-nocheck
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
export default function favorite() {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const id = localStorage.getItem("USER_ID");
      axios
        .get(`http://localhost:4000/users/getOne/${id}`)
        .then((res) => {
          setData(res.data.favorite);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const deleteOne = (productId) => {
    if (typeof window !== "undefined") {
      const id = localStorage.getItem("USER_ID");
      axios
        .put(`http://localhost:4000/users/deleteFavorite/${id}`, {
          id: productId,
        })
        .then((res) => {
          console.log("deleted");
        })
        .catch((err) => console.log(err));
    }
    window.location.reload(false);
  };

  return (
    <div>
      <Navbar />
      <center>
        <h2>FAVORITE ❤️</h2>
      </center>
      <div>
        {/* <button
        className="clearAll"
        onClick={() => {
          deleteAll();
          
        }}
      >
        Clear All
      </button> */}

        <div className="prod-info">
          {data ? (
            <div>
              {data.map((element: any) => {
                return (
                  <>
                    <>
                      <div className="container py-3">
                        {/* Card Start */}
                        <div className="card">
                          <div className="row ">
                            <div className="col-md-7 px-3">
                              <div className="card-block px-6">
                                <h1 className="card-title">
                                  name : {element.productName}{" "}
                                </h1>
                                <div className="category">
                                  Category : <span> {element.category}</span>
                                </div>

                                <p className="card-text"></p>
                                <p className="card-text">
                                  description : {element.description}
                                </p>
                                <br />
                                <h5> Price:{element.price} dt</h5>

                                {/* <h6>Quantity :</h6> */}
                                <div className="btn-group">
                                  {/* <button
                                  className="btn"
                                  id="plusBtn"
                                //   onClick={() =>
                                //     setAmount((prev) => prev + 1)
                                //   }
                                >
                                  +
                                </button> */}
                                  <span className="btn" id="amount">
                                    {/* {amount} */}
                                  </span>
                                  {/* <button
                                  className="btn"
                                  id="minusBtn"
                                //   onClick={() => {
                                //     amount > 1 &&
                                //       setAmount((prev) => prev - 1);
                                //   }}
                                >
                                  -
                                </button> */}
                                </div>
                                {/* <h3>
                                Total :
                                 <span>{element.price*amount } dt </span>
                              </h3>  */}
                              </div>

                              {/* <button className="button-buy"> Buy</button> */}

                              <div>
                                <button
                                  className="clear"
                                  onClick={() => {
                                    deleteOne(element._id);
                                  }}
                                >
                                  Delete
                                </button>
                              </div>
                            </div>

                            {/* Carousel start */}
                            <div className="col-md-5">
                              <div
                                id="CarouselTest"
                                className="carousel slide"
                                data-ride="carousel"
                              >
                                <div className="carousel-inner">
                                  <div className="carousel-item active">
                                    <img
                                      className="d-block"
                                      id="img"
                                      src={element.imageUrl}
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* End of carousel */}
                          </div>
                        </div>

                        {/* End of card */}
                      </div>
                    </>
                  </>
                );
              })}
            </div>
          ) : (
            <div> No products</div>
          )}{" "}
        </div>
      </div>
    </div>
  );
}
