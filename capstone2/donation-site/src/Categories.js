import React from 'react';
import Navbar from './Navbar';
// import './Cards.css';
import CardItem2 from './carditem2';
import planet from './assets/planet.jfif';
import children from './assets/children.jfif';
import women from './assets/women.jfif';
import senior from './assets/senior.jfif';
import animal from './assets/animal.jfif';


import Footer from './Footer';
// import './Cards.css';


function Categories() {
    return (
        <div>
            <div className="Head" >
            <h1 className="tags1">Categories</h1>
            </div>
            <div className='cards'>
            <div className='cards__container'>
            <div className='cards__wrapper'>
            <ul className='cards__items'>    
            <CardItem2
             src={planet}
             text='Enivronmental Organisations '
             path=""
            />
            <CardItem2
            src={children}
            text='Child Welfare'
            path=""
            />
          
            <CardItem2
            src={women}
            text='Women Health and Safety'
            path="/women"
            />
            <CardItem2
            src={senior}
            text='Senior Citizen'
            path=""
            />
            <CardItem2
            src={animal}
            text='Animal Welfare'
            path=""
            />
            <CardItem2
            src={animal}
            text='Donation for Disasters'
            path=""
            />
            
            </ul>
            </div>
           </div>
           </div>
           
        </div>
    )
}

export default Categories
