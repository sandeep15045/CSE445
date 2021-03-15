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
function Team() {
  return (
    <div className='cards'>
      <h1>Our working Team</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
         
          <ul className='cards__items'>
            <CardItem
              src={img1}
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

export default Team;
