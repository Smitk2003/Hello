import {
    Link
  } from 'react-router-dom';
import './App.css';
import { IconName , FaHome, FaQrcode, FaPhotoVideo} from "react-icons/fa";

const Header = () => {
return (

<>

<header>
        <div className="logo">
            <div className="main-logo">
                <a href="spa.css">
                    <img src={require('./image/logo.webp')}height={80}/>
                </a>
            </div>
                <nav className=" navbar">

                    <ul className="main_menu">
                
                        <li><Link to='/' className="tex" href="#">Home </Link></li>
                        <li><Link to='/BookOnline' className="tex" href="#">Book Online </Link></li>
                        <li><Link to='/Gallary' className="tex" href="#">Gallary </Link></li>
                        <li><Link to='/OurServices' className="tex" href="#">Our Service</Link></li>
                        <li><Link to='/Facilities' className="tex" href="#">Facilities</Link></li>
                        <li><Link to='/AboutUs' className="tex" href="#">About Us</Link></li>
                        <li><Link to='/ContactUs' className="tex" href="#">Contact Us</Link></li>


                        </ul>

                </nav>
        </div>
    </header>

</>
)

}
export default Header;