import React from 'react';
import NavBar from './NavBar';
import girl from '../images/girl.png';
import Brands from './Brands.js'

const Intro = ()=>{
return (
    <div id="container">
       <NavBar></NavBar>
       <div class="intro-card">
        <div className='title'>
            <h1><span className='let'>LET'S</span><br></br>
            <span className='rest'>EXPLORE</span><br></br>
            <span className='unique'>UNIQUE</span><br></br>
            <span className='rest'>CLOTHES.</span></h1>
            <p>Live for Influential and Innovative fashion!</p>
            <button>Shop Now</button>
        </div>
        <div className='card-image'>
            <img src={girl} alt='girl-img'></img>
        </div>
       </div>
     
    </div>
)
}


export default Intro;