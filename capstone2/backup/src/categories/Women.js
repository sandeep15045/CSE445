import React from "react";
import "../Home.css";
import Product from "../Product";
import img1 from "./women1.jpg";
import img2 from "./women2.jpg";

import SimpleImageSlider from "react-simple-image-slider";


function Women() {
  return (
    <div className="home">
      <div className="home__container">
     
        
        <h1 className="tags1">women empowerment</h1>
        <div className="home__row">
          <Product
            id="12321341"
            title="Women Education and learnings"
            price={500}
           
            image={img1}
        />
          <Product
            id="49538094"
            title="Teaching for Self dependencies"
            price={300}
           
            image={img2}
        />
       
        </div>

       
        
      </div>
    </div>
  );
}

export default Women;
