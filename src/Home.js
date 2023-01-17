import Header from './Header';
import './App.css';
import Footer from './Footer';

const Home = () => {

return(

<>
<Header/>
            
<div className="body">
            <div className="img1">
                <div className="img0">
                    <img src={require('./image/0.webp')} width={1519.5}/>
                </div   >    
                    <div className="imgtxt">
                        <p>THE</p>
                        <p>ULTIMATE</p>
                        <p>SPA</p>
                        <p>ESCAPE</p>
                        <span>
                            Whole Body Healing
                        </span>
                    </div>
            </div>

        <p id="extra">Our Services</p>

        <div className="ourservices">

            <div className="services" id="1">
                <div className="simg">
                <img src={require('./image/1.webp')} height={465} />
                </div>
                <div className="servicesname">Jacuzzi Bathtub
                    <hr/>
                    <div className="rate">1 hr<br/>₹4,500<br/><button className="btn1">Book Now</button></div>
                </div>
            </div>

            <div className="services" id="2">
                <div className="simg">
                <img src={require('./image/2.webp')}height={465}/>
                </div>
                <div className="servicesname">Couple Jacuzzi
                    <hr/>
                    <div className="rate">1 hr<br/>₹5,500<br/><button className="btn1">Book Now</button></div>
                </div>
            </div>

            <div className="services" id="3">
                <div className="simg">
                <img src={require('./image/5.webp')}height={465}/>
                </div>
                <div className="servicesname">Turkish Bath
                    <hr/>
                    <div className="rate">1 hr<br/>₹7,000<br/><button className="btn1">Book Now</button></div>
                </div>
            </div>

            <div className="services" id="4">
                <div className="simg">
                <img src={require('./image/4.webp')}height={465}/>
                </div>
                <div className="servicesname">Swimming Pool
                    <hr/>
                    <div className="rate">1 hr<br/>₹5,000<br/><button className="btn1">Book Now</button></div>
                </div>
            </div>

            <div className="services" id="5">
                <div className="simg">
                <img src={require('./image/5.webp')}height={465}/>
                </div>
                <div className="servicesname">Thai Hammam
                    <hr/>
                    <div className="rate">1 hr<br/>₹4,000<br/><button className="btn1">Book Now</button></div>
                </div>
            </div>

            <div className="services" id="6">
                <div className="simg">
                <img src={require('./image/6.webp')}height={465}/>
                </div>           
                <div className="servicesname">Balinese(soft)
                    <hr/>
                    <div className="rate">1 hr<br/>₹3,000<br/><button className="btn1">Book Now</button></div>
                </div>
            </div>

            <div className="services" id="7">
                <div className="simg">
                <img src={require('./image/7.webp')}height={465}/>
                </div>
                <div className="servicesname">Couples Massage
                    <hr/>
                    <div className="rate">1 hr<br/>₹3,500<br/><button className="btn1">Book Now</button></div>
                </div>
            </div>

            <div className="services" id="8">
                <div className="simg">
                <img src={require('./image/8.webp')}height={465}/>
                </div>
                <div className="servicesname">Thai Masage
                    <hr/>
                    <div className="rate">1 hr<br/>₹2,500<br/><button className="btn1">Book Now</button></div>
                </div>
            </div>

            <div className="services" id="9">
                <div className="simg">
            <img src={require('./image/9.webp')}height={465}/>
            </div>
             <div className="servicesname">Dry Massage
                    <hr/>
                    <div className="rate">1 hr<br/>₹2,500<br/><button className="btn1">Book Now</button></div>
                </div>
            </div>

            

        </div>

         <div className='last'>
            <div className='ltxt'>     
                <p id="p1">HOURS OF OPERATION</p>
                <p id="p2">Come Visit Us</p>
                <p id="p3">Open daily from 10:00 am to 9:00pm</p>
                </div>    
            <div className='lastimg'>     
                <img src={require('./image/12.webp')}height={500} width={650}/>
            </div>

        </div>
        <br/>
        <br/>
        <br/>

        
        <Footer/>   
        </div>

</>

)
    
    }
export default Home;