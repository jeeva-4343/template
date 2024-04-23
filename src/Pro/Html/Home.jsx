import React from 'react';
import '../Css/nav.css';
// import Navibar from '../Html/Navbar';
import Heropage from '../Html/hero';
import Section2 from '../Html/Secondsection';
import Client from '../Html/Thirdsection';
import Section3 from '../Html/Fourthsection';
import Five from './Fivethsecction';
import Sixth from './Sixthsection';
import Section7 from './Seventhsection';
import Footer from './Footer';

function Homepage() {
  return(
    <div>
    {/* <Navibar/> */}
    <Heropage/>
    <Section2/>
    <Client/> 
    <Section3/>
    <Five/>
    <Sixth/>
    <Section7/>
    <Footer/>
    </div>
  )
  }
  export default Homepage;
    