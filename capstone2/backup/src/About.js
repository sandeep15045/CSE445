import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import banner2 from "./assets/banner2.png"

function About() {
  return (
    <div className='cards'>
      <h1>Our working Centers</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={banner2}
              text="sfgefigjygjhgjhegfjegfjgejyfgejyhfguegfuyegvuygefuygegefgufggfuygfuy"

             
             
              
            />
           
          </ul>
         
        </div>
      </div>
    </div>
  );
}

export default About;
