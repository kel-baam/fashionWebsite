
import firstGirl from '../images/favouritePic1.png'
import secondGirl from '../images/favouritePic2.png'

import favourite from '../images/favourite.png'

const Favourite = ()=>{
    return(
        <div id='favourite'>
        <div className='title'>
          <img alt="title" src={favourite}></img>
        </div>
        <div className='pictures'>
          <div className='first'>
            <img className="model" alt="model" src={firstGirl}></img>
            <p>Trending on instagram</p>
          </div>
          <div className='second'>
            <img className="model" alt="model" src={secondGirl}></img>
            <p>All Under $40</p>
          </div>
        </div>
      </div>
    )
}


export default Favourite;