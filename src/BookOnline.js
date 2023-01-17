import Header from './Header';
import './App.css';
import Footer from './Footer';

const BookOnline = () => {

    return(
    
    <>
    <Header/>
                
  
        <div className='bookonline'>
            <div id="extra2">Our Services</div>
    
            <div className="ourservices2">
    
                <div className="services2" id="1">
                    <div className="simg2">
                    <img src={require('./image/1.webp')} height={350} />
                    </div>
                    <div className="servicesname2">Jacuzzi Bathtub
                        <hr/>
                        <div className="rate2">1 hr<br/>₹4,500<br/><button className="btn2">Book Now</button></div>
                    </div>
                </div>
    
                <div className="services2" id="2">
                    <div className="simg2">
                    <img src={require('./image/2.webp')}height={350}/>
                    </div>
                    <div className="servicesname2">Couple Jacuzzi
                        <hr/>
                        <div className="rate2">1 hr<br/>₹5,500<br/><button className="btn2">Book Now</button></div>
                    </div>
                </div>
    
                <div className="services2" id="3">
                    <div className="simg2">
                    <img src={require('./image/5.webp')}height={350}/>
                    </div>
                    <div className="servicesname2">Turkish Bath
                        <hr/>
                        <div className="rate2">1 hr<br/>₹7,000<br/><button className="btn2">Book Now</button></div>
                    </div>
                </div>
    
                <div className="services2" id="4">
                    <div className="simg2">
                    <img src={require('./image/4.webp')}height={350}/>
                    </div>
                    <div className="servicesname2">Swimming Pool
                        <hr/>
                        <div className="rate2">1 hr<br/>₹5,000<br/><button className="btn2">Book Now</button></div>
                    </div>
                </div>
    
                <div className="services2" id="5">
                    <div className="simg2">
                    <img src={require('./image/5.webp')}height={350}/>
                    </div>
                    <div className="servicesname2">Thai Hammam
                        <hr/>
                        <div className="rate2">1 hr<br/>₹4,000<br/><button className="btn2">Book Now</button></div>
                    </div>
                </div>
    
                <div className="services2" id="6">
                    <div className="simg2">
                    <img src={require('./image/6.webp')}height={350}/>
                    </div>           
                    <div className="servicesname2">Balinese(soft)
                        <hr/>
                        <div className="rate2">1 hr<br/>₹3,000<br/><button className="btn2">Book Now</button></div>
                    </div>
                </div>
    
                <div className="services2" id="7">
                    <div className="simg2">
                    <img src={require('./image/7.webp')}height={350}/>
                    </div>
                    <div className="servicesname2">Couples Massage
                        <hr/>
                        <div className="rate2">1 hr<br/>₹3,500<br/><button className="btn2">Book Now</button></div>
                    </div>
                </div>
    
                <div className="services2" id="8">
                    <div className="simg2">
                    <img src={require('./image/8.webp')}height={350}/>
                    </div>
                    <div className="servicesname2">Thai Masage
                        <hr/>
                        <div className="rate2">1 hr<br/>₹2,500<br/><button className="btn2">Book Now</button></div>
                    </div>
                </div>
    
                <div className="services2" id="9">
                    <div className="simg2">
                <img src={require('./image/9.webp')}height={350}/>
                </div>
                 <div className="servicesname2">Dry Massage
                        <hr/>
                        <div className="rate2">1 hr<br/>₹2,500<br/><button className="btn2">Book Now</button></div>
                    </div>
                </div>
    
                
    
            </div>
    
            </div>
    
            <br/>
            <Footer/>   
           
            
    
    </>
    
    )
        
    }
    export default BookOnline;

