import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import sandeep from './assets/sandeep.jpeg';
import kuldeep from './assets/kuldeep.jpg';
import krish from './assets/krish.jfif';
function Team() {
  return (
    <div className='cards'>
      <h1>Our working Team</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
         
          <ul className='cards__items'>
            <CardItem
              src={kuldeep}
              text='Kuldeep'
              label='CSE'
              
            />
            <CardItem
              src={krish}
              text='Krishna '
              label='CSE'
             
            />
            <CardItem
              src={sandeep}
              text='Sandeep'
              label='CSE'
             
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Team;
