import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import BookOnline from './BookOnline';
import Gallary from './Gallary';
import OurServices from './OurServices';
import Facilities from './Facilities';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';



function App() {
  return (
    <>

<Routes>
  <Route exact path='/' element={<Home/>}></Route>
  <Route exact path='/BookOnline' element={<BookOnline/>}></Route>
  <Route exact path='/Gallary' element={<Gallary/>}></Route>
  <Route exact path='/OurServices' element={<OurServices/>}></Route>
  <Route exact path='/Facilities' element={<Facilities/>}></Route>
  <Route exact path='/AboutUs' element={<AboutUs/>}></Route>
  <Route exact path='/ContactUs' element={<ContactUs/>}></Route>



 
</Routes>
  
  </>
  );
}

export default App;
