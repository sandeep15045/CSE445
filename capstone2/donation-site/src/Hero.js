import React from 'react';
import { Link } from 'react-router-dom'
import "./hero.css";

const Hero = ({handleLogout}) => {

    return(
        <section className="hero">
            <nav>
                <h2>Welcome </h2>
                <Link to='/'  >
                <h2 className="home" >
             H 4 U
             (Help for You)</h2>
          </Link>
              {/* <link to="/"> <h2 >H4U</h2></link> */}
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>

    )
}

export default Hero;