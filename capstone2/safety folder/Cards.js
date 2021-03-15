import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img from "./img-1.jpg";
import img1 from "./img-2.jpg";
import img2 from "./img-10.jpg";
import img3 from "./img-11.jpg";
import img4 from "./img-12.jpg";
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
              src="https://lh5.googleusercontent.com/p/AF1QipMwjcFCSHHp0Hm5d1acxu0b5l2dahOvAUY2n7Fq=w408-h271-k-no"
              text='Save the orphans initiative '
              label='Jaipur'
              path='/location'
              
            />
            <CardItem
              src="https://lh5.googleusercontent.com/p/AF1QipNohMO4EdPGVcFvVa_Iuueq82rwAqqt_5jyoXv1=w408-h544-k-no"
              text='Nabatara NGO'
              label='Kolkata'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img2}
              text='Cow Shelter and old age home '
              label='Mathura'
              path='/services'
            />
            <CardItem
              src={img3}
              text='Pet Adoption and Rescue Center'
              label='Ahemdabad'
              path='/products'
            />
            <CardItem
              src={img4}
              text='Clean Beaches Initiative'
              label='Mumbai'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
