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
<<<<<<< HEAD
            <h1 className="tags1">Categories</h1>
=======
            <h1>Categories</h1>
>>>>>>> 55f8d8d15712b4f5b9f7c5e6c9c11097b1dcb6cf
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
<<<<<<< HEAD
            path="/women"
=======

>>>>>>> 55f8d8d15712b4f5b9f7c5e6c9c11097b1dcb6cf
            />
            <CardItem2
            src={senior}
            text='Senior Citizen'
            path=""
            />
<<<<<<< HEAD
            <CardItem2
            src={animal}
            text='Animal Welfare'
            path=""
            />
            <CardItem2
            src={animal}
            text='Donation for Disasters'
            path=""
=======
            
            <CardItem
            src={animal}
            text='Animal Welfare'
            path = "./Animal"
>>>>>>> 55f8d8d15712b4f5b9f7c5e6c9c11097b1dcb6cf
            />
            
            </ul>
            </div>
           </div>
           </div>
           
        </div>
    )
}

export default Categories
