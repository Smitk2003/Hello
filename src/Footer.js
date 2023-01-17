import './App.css';
import {
    Link
  } from 'react-router-dom';
import {FaInstagram, FaWhatsapp, FaGoogle} from "react-icons/fa";

const Footer = () => {
return (

<>
       
        
        <div className="fnltxt">

            CONTACT US

        </div>
        <div className='footer'>
                <div className='ltxt2'>     
                <div className='l1'>Address
                <p id="l11">306, 3rd Floor Time Square Grand </p>
                <p id="l12">Sindhu Bhavan Road,Thaltej</p>
                <p id="l13">Ahmedabad -380069 </p>
                
                </div>
                <div className='l2'>Contact
                <p id="l21">+91 9714007800</p>
                <p id="l22">+91 9714006700</p>
                
                </div>
                <div className='l3'>Opening Hours
                <p id="l31">Mon - Fri  10:00 am – 9:00 pm</p>
                <p id="l32">Saturday   10:00 am – 9:00 pm</p>
                <p id="l33">Sunday     10:00 am – 9:00 pm</p>
                
                </div>
       
                </div>
                <ui  className='licon'>
                        <li><Link to='/https://www.instagram.com/thegalaxyspa/?hl=en' href="#" className='lic'>  <FaInstagram/> </Link></li>
                        <li className='itxt'>...</li>
                        <li><Link to='/https://api.whatsapp.com/send/?phone=919714007800&text&type=phone_number&app_absent=0' href="#" className='lic'>  <FaWhatsapp/> </Link></li>
                </ui>
        </div>

</>
)

}
export default Footer;