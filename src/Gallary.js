import './App.css';
import Header from './Header';
import Footer from './Footer';

const Gallary = () => {

    return (
        <>
        <Header/>
        
        <div class="gimg">
            <div class ="gimg1">
            <img src={require('./image/g1.jpg')} />
            </div>
        </div>

    
       
        <Footer/>
        </>
    )

}

export default Gallary;
