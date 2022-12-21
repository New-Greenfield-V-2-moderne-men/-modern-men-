import React from "react";

export default function test() {
  return <div>test</div>;
}

// const filterByPrice: any = (min: any, max: any) => {
//   const filtred = stock.filter((e) => e.price > min && e.price < max);
//   setStock(filtred);
// };

// const filterByColor: any = (our_color) => {
//   const filtred = stock.filter((e) => e.color === our_color);
//   setStock(filtred);
// };

//  let GetFiltredDatabyCategory = async () => {
//    await axios
//      .get(`http://localhost:4000/product/find/T-Shirt`)
//      .then((result) => {
//        console.log("axios", result.data);
//        setFiltredData(result.data);
//      });
//  };

//  const sendProps: SendProps = async () => {
//    await router.push({
//      pathname: "./Category",
//      query: { filtredData },
//    });
//  };

// const getStaticProps: GetStaticProps = async () => {
//   let response = await fetch(`http://localhost:4000/product/find/T-Shirt`);
//   const data = await response.json();
//   return {
//     props: {
//       data
//     },
//   };
// };

// {
//   "productName": " Newpull",
//   "description": "pull",
//   "category": "T-shirt",
//   "price": 450,
//   "imageUrl": "https://static.bershka.net/4/photos2/2023/V/0/2/p/2813/900/800//02/2813900800_2_4_3.jpg?t=1662043993423",
//   "color": "Black",
//   "size": "M"
// }
