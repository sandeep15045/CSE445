import React from 'react';
import './testinomials.css';
import CardItem2 from './carditem2';


function Testinomial() {
  return (
    <div className='cards'>
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem2
              src="https://lh5.googleusercontent.com/p/AF1QipMwjcFCSHHp0Hm5d1acxu0b5l2dahOvAUY2n7Fq=w408-h271-k-no"
              text='Save the orphans initiative '
             
              
            />
            <CardItem2
              src="https://lh5.googleusercontent.com/p/AF1QipNohMO4EdPGVcFvVa_Iuueq82rwAqqt_5jyoXv1=w408-h544-k-no"
              text='Nabatara NGO'
              
            />
             <CardItem2
              src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2017/07/22/594781-cow-shelter.jpg"
              text='Cow Shelter and old age home '
              
            />
            <CardItem2
              src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/04/26/Pictures/_92672142-493d-11e8-8699-4e17514b3033.jpg"
              text='Pet Adoption and Rescue Center'
              
            />
          </ul>
          
        
        </div>
      </div>
    </div>
  );
}

export default Testinomial;
