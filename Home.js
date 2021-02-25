import React from "react";
import "./Home.css";
import Product from "./Product";
import homepage from "./landing.jpg";
import cow from "./cows.jpg";
import books from "./books.jpg";
import otm from "./otm.jpg";
import medi from "./medi.jpg";
import ram from "./rammandir.jpg";
import Cards from "./Cards";
import Footer from "./Footer";
import video from './video.mp4';
import SimpleImageSlider from "react-simple-image-slider";

import Dog from "./dog.png";
import HeroSection from "./HeroSection";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
      <img className="home__image" src={homepage} />
     
        
        <h1 className="tags1">Donation</h1>
        <div className="home__row">
          <Product
            id="12321341"
            title="Donation for Cows"
            price={300}
           
            image={cow}
        />
          <Product
            id="49538094"
            title="Donation for Books of one needy student"
            price={100}
           
            image={books}
        />
       
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="One time meal for slum childrens"
            price={60}
            
            image={otm}
          />
          <Product
            id="23445930"
            title="Medicines for Slum childrens"
            price={300}
            
            image={medi}
          />
         
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Donation For Ram Mandir"
            price={100}
            
            image={ram}
          />
         
         
        </div>

        <h1 className="tags1">Testinomials</h1>
        <Cards/>

        <Footer/>
      </div>
    </div>
  );
}

export default Home;
