import React from 'react';

import hm from '../images/h&m.png';
import levi from '../images/levi.png'
import amazon from '../images/amazon.png'
import shopify from '../images/shopify.png'
import costa from '../images/lacoste.png'
import obey from '../images/obey.png'

const Brands = ()=>{
    return ( 
        <div className='brands'>
        <img style={{width:'55px'}} src={hm} alt="brand-img" className='brand-img'></img>
        <img style={{width:'60px'}} src={obey} alt="brand-img" className='brand-img'></img>

        <img src={shopify} alt="brand-img" className='brand-img'></img>
        <img style={{width:'90px'}} src={costa} alt="brand-img" className='brand-img'></img>
        <img style={{width:'60px'}} src={levi} alt="brand-img"  className='brand-img'></img>
        <img style={{width:'60px'}} src={amazon} alt="brand-img"  className='brand-img'></img>



       </div>
    )
}


export default Brands;
