//@ts-nocheck

import React, { useEffect, useState } from "react";
import Navbar from "../user_interface/Navbar";
import Footer from "../user_interface/Footer";
import axios from "axios";

export default function Profile() {
  const [data, setData] = useState([]);

  // state for the Picture
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  // state to handlle the response
  const [submit, setSubmit] = useState("");

  // state to get the input
  const [username, setUsername] = useState("");
  const [bioinput, setBioinput] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  const id = localStorage.getItem("USER_ID");
  const email = localStorage.getItem("USER_EMAIL");
  const phone = localStorage.getItem("USER_PHONE");
  const bio = localStorage.getItem("USER_BIO");
  const indexOfAt = email.indexOf("@");
  const name = email.substring(0, indexOfAt);
  console.log("name is", name);
  console.log("phone is", phone);
  console.log("bio is", bio);

  // function of cloudinary :
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

  // function to update user

  const updateUser = (id) => {
    axios
      .put(`http://localhost:4000/profil/${id}`, {
        name: username,
        bio: bioinput,
        phone: PhoneNumber,
      })
      .then(() => {
        console.log("yeeyyy updated");
        // window.location.reload();
      });
  };

  return (
    <>
      <Navbar />

      <div class="container-profile">
        <div class="row-profile">
          <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                class="rounded-circle mt-5"
                width="150px"
                src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png"
              />
              <h4 class="font-weight-bold"> Name :{name}</h4>
              <span class="text-black-50">Email: {email}</span>
              <h5>Bio: {bio}</h5>
              <p></p>
              <br />
              <span> Phone Number :{phone} </span>
            </div>
          </div>
          <div class="col-md-5 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Profile Settings</h4>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <h5> Name:</h5>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Update username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <h5> Bio:</h5>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Choose a bio "
                    onChange={(e) => setBioinput(e.target.value)}
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <h5> Phone Number :</h5>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Phone number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

                <div>
                  <div class="col-md-6"></div>
                  <h5> Photo:</h5>
                  <input
                    className="form-control"
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
              </div>
              <button onClick={uplodImage} className="upload-profile">
                <span
                  onClick={() => {
                    setSubmit(true);
                  }}
                >
                  Upload Image
                </span>
              </button>
              <div></div>
              <div class="mt-5 text-center">
                <button
                  type="button"
                  class="btn btn-success"
                  onClick={() => updateUser(id)}
                >
                  Save Changes
                </button>
                <div>
                  {submit && url ? (
                    <div class="response-profile">
                      <strong>Success!</strong> You have add a Picture
                    </div>
                  ) : null}{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
