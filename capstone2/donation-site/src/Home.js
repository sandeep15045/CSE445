import React from "react";
import "./Home.css";

import homepage from "./assets/banner.jpg";

import Cards from "./Cards";
import Footer from "./Footer";
<<<<<<< HEAD
import Categories from "./Categories";
import Testinomial from "./testinomials"
=======
import video from './video.mp4';
import ImageGallaryComponent from "./ImageGallaryComponent";
>>>>>>> 55f8d8d15712b4f5b9f7c5e6c9c11097b1dcb6cf

function Home() {
  return (
    <div className="home">
      <div className="home__container">
<<<<<<< HEAD
      <img className="home__image" src={homepage} />
      
        
          <Categories/>
=======
      <ImageGallaryComponent />
     
>>>>>>> 55f8d8d15712b4f5b9f7c5e6c9c11097b1dcb6cf
        
        <h1 className="tags1">Testimonials</h1>
           <Testinomial/>

        <Cards/>

        <Footer/>
      </div>
    </div>
  );
}

export default Home;
