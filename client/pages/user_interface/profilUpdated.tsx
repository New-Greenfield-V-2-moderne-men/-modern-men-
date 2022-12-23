//@ts-nocheck

import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { useState ,useEffect} from "react";
export default  function profilUpdated(){
const [name,SetName]=useState("")
const [email,SetEmail]=useState("");
const [bio,SetBio]=useState("");
const [phone,SetPhone]=useState("")
const [data,setData]=useState([]);
const[dataupdated,setDataUpdated]=useState([])
const [input,setInput]=useState(false);
const [file, setFile] = useState(null);
useEffect(()=>{
  if (typeof window !== 'undefined') {

  const id = localStorage.getItem('USER_ID') 

  
 axios.get(`http://localhost:4000/users/profil/${id}`) 
  .then((res)=>{setDataUpdated(res.data)
  }) 
  .catch(err => console.log(err))
  }
},[setDataUpdated])
// console.log(updat);

const update =async()=>{


    if (typeof window !== "undefined") {
        const id = localStorage.getItem("USER_ID");
        console.log(id);
        
     await axios.put(`http://localhost:4000/users/profil/${id}`)
    .then((result=> setData(result.data)
    )).catch(err=>console.log(err)
    )
   }

}
// console.log(data,'hhhhh');
// console.log(dataupdated,'rrrrrr');

let uplodImage = async () => {
  const form = new FormData();
  form.append("file", file); // file is a varaible contain the picture
  form.append("upload_preset", "achrefbg");
  await axios
    .post("https://api.cloudinary.com/v1_1/da1mkpgfd/upload", form) // send the form to cloudinary
    .then((result) => {
      console.log(result); 
      setUrl(result.data.secure_url);// get the url of the image
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
          onChange={(e)=>{setFile(e.target.file)}}
        />
           <button onClick={()=>{uplodImage}}>Image Uploded</button>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="profile-head">
        <p>Name</p>
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
    onClick={()=>{
        update()
        
    }}
      />
    </div>
  </div>
  <div className="row">
    <div className="col-md-4">
     
    </div>
    <div className="col-md-8">
      <div className="tab-content profile-tab" id="myTabContent">
        {input ?(
          <div className="div">
          {dataupdated.map((element)=>{ 
          
            return(
              <div className="div">
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
            <p>{element.name}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p>Email</p>
          </div>
          <div className="col-md-6">
            <p>{element.email}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p>Phone:</p>
          </div>
          <div className="col-md-6">
            <p>{element.phone}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p>Bio:</p>
          </div>
          <div className="col-md-6">
            <p>{element.bio}</p>
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
            )
          })}
        </div>
        ):(
          <div className="div">
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
              <input
              onChange={(e)=>{SetName(e.target.value)}}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>Email</p>
            </div>
            <div className="col-md-6">
              <input onChange={(e)=>{SetEmail(e.target.value)}}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>Phone:</p>
            </div>
            <div className="col-md-6">
            <input onChange={(e)=>{SetPhone(e.target.value)}}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>Bio:</p>
            </div>
            <div className="col-md-6">
            <input onChange={(e)=>{SetBio(e.target.value)}}/>
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
        )}
       

      </div>
    </div>
  </div>
</form>
<Footer />
</>

  )
}
