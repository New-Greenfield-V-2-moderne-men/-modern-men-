//@ts-nocheck
import React, { useState } from "react";
import Router from "next/router";
import axios from "axios";
import Navbar from "../user_interface/Navbar";
import Footer from "../user_interface/Footer";

export default function addProduct() {
  // state for the values of the input
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  // const [imageUrl, setImageUrl] = useState("");

  // state to get the url of picture from cloudinary
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  // state to handlle the response of uploading image
  const [submitUpload, setSubmitUpload] = useState(false);

  // function to update picture with cloudinary
  let uplodImage = async () => {
    const form = new FormData();
    form.append("file", file); // file is a varaible contain the picture
    form.append("upload_preset", "ahmedmejdoub");
    await axios
      .post("https://api.cloudinary.com/v1_1/ddvyi3jpk/upload", form) // send the form to cloudinary
      .then((result) => {
        console.log(result.data.secure_url); // get the url of the image
        setUrl(result.data.secure_url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let addProduct = () => {
    axios
      .post("http://localhost:4000/product/add", {
        productName: productName,
        description: description,
        category: category,
        price: price,
        imageUrl: url,
        color: color,
      })

      .then(() => {
        Router.push("./allProduct");
        console.log("added");
      });
  };

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
              Add Product
            </h1>
            <div className="d-inline-flex">
              <p className="m-0">Add </p>
            </div>
          </div>
        </div>
        {/* Page Header End */}
        {/* Contact Start */}
        <div className="container-fluid pt-5">
          <div className="text-center mb-4">
            <h2 className="section-title px-5">Add a New Product</h2>
          </div>

          <div className="row px-xl-5">
            <div className="col-lg-7 mb-5">
              <div className="contact-form">
                <div id="success" />

                <div className="control-group">
                  <textarea
                    type="text"
                    className="form-control"
                    rows={2}
                    placeholder="Product Name"
                    data-validation-required-message="Please enter the Product Name"
                    onChange={(e) => {
                      setProductName(e.target.value);
                    }}
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <textarea
                    className="form-control"
                    rows={2}
                    placeholder="Description"
                    data-validation-required-message="Please enter Description"
                    defaultValue={""}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <textarea
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Category"
                    data-validation-required-message="Please enter a category"
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                  />

                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <textarea
                    className="form-control"
                    rows={2}
                    placeholder="Price"
                    data-validation-required-message="Please enter your price"
                    defaultValue={""}
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                  <textarea
                    className="form-control"
                    rows={2}
                    placeholder="Color"
                    data-validation-required-message="Please enter your Color"
                    defaultValue={""}
                    onChange={(e) => {
                      setColor(e.target.value);
                    }}
                  />
                  <textarea
                    className="form-control"
                    rows={2}
                    placeholder="Picture"
                    data-validation-required-message="Please enter your Picture"
                    defaultValue={""}
                  />{" "}
                  <input
                    onChange={(e) => setFile(e.target.files[0])}
                    type="file"
                    name=""
                    id=""
                  />
                  <button onClick={uplodImage} className="upload">
                    <span
                      onClick={() => {
                        setSubmitUpload(true);
                      }}
                    >
                      Upload Image
                    </span>
                  </button>
                  <div>
                    {submitUpload && url ? (
                      <div className="response">
                        <strong>Success!</strong> You have Upload The Picture{" "}
                      </div>
                    ) : (
                      <div>
                        <strong>No picture !!</strong>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <button
                    className="btn btn-primary py-2 px-4"
                    id="sendMessageButton"
                  >
                    <span onClick={addProduct}>Submit</span>
                  </button>
                </div>
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
