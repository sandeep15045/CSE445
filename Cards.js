import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img from "./img-1.jpg";
import img1 from "./img-2.jpg";
import img2 from "./img-3.jpg";
import img3 from "./img-4.jpg";
import img4 from "./img-5.jpg";
import img5 from "./img-6.jpg";
import img6 from "./img-7.jpg";
function Cards() {
  return (
    <div className='cards'>
      <h1>Our working Centers</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img}
              text='Entertainment for orphanage childrens to make their life interesting'
              label='Kolkata'
              // path='/services'
              
            />
            <CardItem
              src={img1}
              text='Education for Slum Childrens'
              label='Jaipur'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img2}
              text='Shelters for cows which also server milk to poor'
              label='Mathura'
              path='/services'
            />
            <CardItem
              src={img3}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src={img4}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
