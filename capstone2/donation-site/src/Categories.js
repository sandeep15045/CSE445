import React from 'react';
import Navbar from './Navbar';
import './Categories.css';
import CardItem from './CardItem';
import planet from './planet.jfif';
import children from './children.jfif';
import women from './women.jfif';
import senior from './senior.jfif';
import animal from './animal.jfif';

import Footer from './Footer';
import './Cards.css';


function Categories() {
    return (
        <div>
            <Navbar/>
            <div className="Head" >
            <h2>Categories</h2>
            </div>
            <div className='cards'>
            <div className='cards__container'>
            <div className='cards__wrapper'>
            <ul className='cards__items'>    
            <CardItem
             src={planet}
             text='Enivronmental Organisations '
            />
            <CardItem
            src={children}
            text='Child Welfare'
            />
            <CardItem
            src={women}
            text='Women Health and Safety'
            />
            <CardItem
            src={senior}
            text='Senior Citizen'
            />
            <CardItem
            src={animal}
            text='Animal Welfare'
            />
            </ul>
            </div>
           </div>
           </div>
           <Footer/>
        </div>
    )
}

export default Categories
