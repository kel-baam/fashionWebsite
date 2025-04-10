
import { Link } from "react-router-dom";
import SocialIcon from './Socialicon.js';

const Footer =()=>{
    return(
        <footer>
        <div className='first-colum links'>
          <h1>FASHION</h1>
          <p>Complete your style with awesome<br></br>clothes from us.</p>
          <div id="social-icons">
            <SocialIcon        icon="fa-brands fa-facebook-f"   />
            <SocialIcon        icon="fa-brands fa-instagram"         />
            <SocialIcon        icon="fa-brands fa-twitter"           />
            <SocialIcon        icon="fa-brands fa-linkedin-in"       />
          </div>
        </div>
        <div className='second-colum links'>
          <h6>Company</h6>
          <Link style={{textDecoration:'none',color:'#8E8E8E' ,gap:'10px'}} to="">About</Link>
          <Link style={{textDecoration:'none',color:'#8E8E8E'}} to="">Contact us</Link>
          <Link style={{textDecoration:'none',color:'#8E8E8E'}} to="">Support</Link>
          <Link style={{textDecoration:'none',color:'#8E8E8E'}} to="">Careers</Link>

        </div>
        <div className='second-colum links'>
          <h6>Quick Link</h6>
          <Link style={{textDecoration:'none',color:'#8E8E8E'}} to="">Share Location</Link>
          <Link style={{textDecoration:'none',color:'#8E8E8E'}} to="">Orders Tracking</Link>
          <Link style={{textDecoration:'none',color:'#8E8E8E'}} to="">Size Guide</Link>
          <Link style={{textDecoration:'none',color:'#8E8E8E'}} to="">FAQs</Link>

        </div>
        <div className='second-colum links'>
          <h6>Legal</h6>
          <Link style={{textDecoration:'none',color:'#8E8E8E'}} to="">Terms & conditions</Link>
          <Link style={{textDecoration:'none',color:'#8E8E8E'}} to="">Privacy Policy</Link>
        </div>
      </footer>
    )
}
export default Footer;