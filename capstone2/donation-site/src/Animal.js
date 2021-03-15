import React from 'react';
import Navbar from './Navbar';
import './Animal.css'

function Animal() {
    return (
        <div>
            <Navbar/>
            <div className="Head" >
            <h1>Animal Welfare</h1>
            </div>
            <div className="row">
                <div className="column">
                    <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmsvMLWB4bv9UjsyEmL1daUznNc-8uDyLfw&usqp=CAU"/>
                </div>


            </div>
        </div>
    )
}

export default Animal
