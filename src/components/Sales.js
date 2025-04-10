
import model from '../images/girl2.png'


const Sales =()=>{
    return (
        <div id="sales">
            <div className="girl-model">
                <img alt="model" src={model}></img>
            </div>
            <div className='announce'>
                <span className='payday'><h2>PAYDAY</h2></span>
                <h2 className='sale'>SALE NOW</h2>
                <p>Spend minimal $100 get 30% off<br/>
                voucher code for your next purchase</p>
                <h3>1 June - 10 June 2021</h3>
                <button>SHOP NOW</button>
            </div>
        </div>
    )
}



export default Sales;