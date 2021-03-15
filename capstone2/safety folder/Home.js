import React from "react";
import "./Home.css";
import Product from "./Product";
import homepage from "./landing.jpg";
import wti from "./wti.jpg";
import cry from "./cry.png";
import give from "./give.jpg";
import goonj from "./goonj.png";
import trees from "./trees.png";
import Cards from "./Cards";
import Footer from "./Footer";
import SimpleImageSlider from "react-simple-image-slider";


function Home() {
  return (
    <div className="home">
      <div className="home__container">
      <img className="home__image" src={homepage} />
     
        
        <h1 className="tags1">Donate to charities</h1>
        <div className="home__row">
          <Product
            id="12321341"
            title="Wildlife Trust of India"
            price={200}
           
            image={wti}
        />
          <Product
            id="49538094"
            title="CRY foundation"
            price={300}
           
            image={cry}
        />
       
        </div>

        <div className="home__row">
          <Product 
            id="4903850"
            title="Give India Food Foundation"
            price={200}
            
            image={give}
          />
          
          <Product
            id="23445930"
            title="Goonj"
            price={300}
            
            image={goonj}
          />
         
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Donate to team trees"
            price={100}
            
            image={trees}
          />
         
         
        </div>

        <h1 className="tags1">Testimonials</h1>
        <Cards/>

        <Footer/>
      </div>
    </div>
  );
}

export default Home;
