import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


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
              path='/jaipur'
              
            />
            <CardItem
              src="https://lh5.googleusercontent.com/p/AF1QipNohMO4EdPGVcFvVa_Iuueq82rwAqqt_5jyoXv1=w408-h544-k-no"
              text='Nabatara NGO'
              label='Kolkata'
              path='/kolkata'
            />
             <CardItem
              src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2017/07/22/594781-cow-shelter.jpg"
              text='Cow Shelter and old age home '
              label='Mathura'
              path='/mathura'
            />
            <CardItem
              src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/04/26/Pictures/_92672142-493d-11e8-8699-4e17514b3033.jpg"
              text='Pet Adoption and Rescue Center'
              label='Ahemdabad'
              path='/products'
            />
          </ul>
          
        
        </div>
      </div>
    </div>
  );
}

export default Cards;
