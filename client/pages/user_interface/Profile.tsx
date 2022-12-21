//@ts-nocheck

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";




export default function Profile() {
  const [data,setData]=useState([]);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  
useEffect(()=>{
  if (typeof window !== 'undefined') {

  const id = localStorage.getItem('USER_ID') 
  // console.log(id);
  
 axios.get(`http://localhost:4000/users/profil/${id}`) 
  .then((res)=>{setData(res.data)
  }) 
  .catch(err => console.log(err))
  }
},[setData])
  // console.log(data,"hhhhh");
  
    //da1mkpgfd
//https://api.cloudinary.com/v1_1/
  //achrefbg
let uplodImage = async () => {
  const form = new FormData();
  form.append("file", file); // file is a varaible contain the picture
  form.append("upload_preset", "achrefbg");
  await axios
    .post("https://api.cloudinary.com/v1_1/da1mkpgfd/upload", form) // send the form to cloudinary
    .then((result) => {
      console.log(result); // get the url of the image
      setUrl(result.data.secure_url);
    })
    .catch((err) => {
      console.log(err);
    });
};




  return ( 
    <>
  <Navbar />
        {/* Navbar Start */}
        <form method="post">
  <div className="row">
    <div className="col-md-4">
      <div className="profile-img">
        <img
           src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png"
          alt=""
        />
        <div className="file btn btn-lg btn-primary">
          Change Photo
          <input type="file"
           name="file" 
           onChange={()=>{setFile(event.target.file)}}
          />
          <button onClick={uplodImage}>Image Uploded</button>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="profile-head">
        <p>{data.name}</p>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="col-md-2">
      <input
        type="submit"
        className="profile-edit-btn"
        name="btnAddMore"
        defaultValue="Edit Profile"
    
      />
    </div>
  </div>
  <div className="row">
    <div className="col-md-4">
     
    </div>
    <div className="col-md-8">
      <div className="tab-content profile-tab" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div className="row">
            <div className="col-md-6">
              <p>Name</p>
            </div>
            <div className="col-md-6">
              <p>{data.name}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>Email</p>
            </div>
            <div className="col-md-6">
              <p>{data.email}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>Phone:</p>
            </div>
            <div className="col-md-6">
              <p>{data.phone}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>Bio:</p>
            </div>
            <div className="col-md-6">
              <p>{data.bio}</p>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
        </div>
      </div>
    </div>
  </div>
</form>
<Footer />
</>

  )
}
