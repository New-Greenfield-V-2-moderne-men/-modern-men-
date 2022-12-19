//@ts-nocheck
import React,{useState,useRef} from "react";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:4000/product");
  const data = await res.json();
  console.log(data);
  
 return { props:{products:data}
}

}

export default function Filter() {
  // console.log(products);
  






 

   


  return (
    <div>
      {" "}
      <div className="border-bottom mb-4 pb-4">
        <h5 className="font-weight-semi-bold mb-4">Filter by price</h5>

        <form>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              defaultChecked="all-price"
              id="price-all"
              value={allprice}
              onChange={()=>handleChange("allprice")}
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
              
            />
            <label className="custom-control-label" htmlFor="price-1">
              0 - 100 dt
            </label>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
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
              type="checkbox"
              className="custom-control-input"
              id="price-3"
              // checked={false}
            />
            <label className="custom-control-label" htmlFor="price-3">
              200 - 300 dt
            </label>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="price-4"
              // checked={false}
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
              checked={false}
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
              type="checkbox"
              className="custom-control-input"
              defaultChecked="All Color"
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
            />
            <label className="custom-control-label" htmlFor="color-1">
              Black
            </label>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
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
              type="checkbox"
              className="custom-control-input"
              id="color-3"
            />
            <label className="custom-control-label" htmlFor="color-3">
              Red
            </label>
          </div>
          <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
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
    </div>
  );
}
