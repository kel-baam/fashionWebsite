
import firstModel from '../images/first-model.png'
import secondModel from '../images/second-model.png'
import thirdModel from '../images/third-model.png'
import arrivals from '../images/arrivals.png'


const NewArrivals = ()=>{
    return (
        <div id='new-arrivals'>
            <div className='title'>
                <img alt="title" src={arrivals}></img>
            </div>
            <div className='models'>
                <div className='firstModel'>
                    <img alt="model" src={firstModel}></img>
                    <h2>Hoodies & Sweetshirt</h2>
                </div>
                <div className='secondModel'>
                    <img alt="model" src={secondModel}></img>
                    <h2>Hoodies & Sweetshirt</h2>
                </div>
                <div className='thirdModel'>
                    <img alt="model" src={thirdModel}></img>
                    <h2>Hoodies & Sweetshirt</h2>
                </div>
            </div>
        </div>
    )
}

export default NewArrivals;