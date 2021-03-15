import React from "react";
import "./Home.css";

import homepage from "./assets/banner.jpg";

import Cards from "./Cards";
import Footer from "./Footer";
import Categories from "./Categories";
import Testinomial from "./testinomials"
import video from './video.mp4';
import ImageGallaryComponent from "./ImageGallaryComponent";
import Categories from "./Categories";
import Testinomial from "./testinomials"
=======
import video from './video.mp4';
import ImageGallaryComponent from "./ImageGallaryComponent";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
      <img className="home__image" src={homepage} />
      
        
          <Categories/>
      <ImageGallaryComponent />
     
=======
      <ImageGallaryComponent />
     
        
        <h1 className="tags1">Testimonials</h1>
           <Testinomial/>

        <Cards/>

        <Footer/>
      </div>
    </div>
  );
}

export default Home;
