import Container from 'react-bootstrap/Container';
import '../Css/hero.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import main from '../images/download.png';
import { HiLightBulb } from "react-icons/hi";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandFacebook } from "react-icons/tb";
import { FaCircle } from "react-icons/fa6";
import { RxSpeakerLoud } from "react-icons/rx";

function Heropage(){
 return(
    <>
    <Container fluid className='herocontainer'>
        <Row className="rowhro">            
            <Col sm='12' lg='6' md='6'>
            <div className='firstdiv'>
            <p className='fsthead'><b>Digital Strategy With Digital Peak</b></p>
            <br></br><br></br>
            <h1 className='secondhead'><b>Drive Results With </b></h1>
            <h1 className='secondhead'><b>Digital Solutions</b></h1><br></br>
            <p style={{color:'#6A727D'}}>We provide creative and technical solutions and business to<br></br> engage with their target audience through digital channels </p>
            <div >
                <Button className='herobtn'style={{backgroundColor:'#793CFB',color:'white'}}>Contact Us</Button>
                <Button className='herobtn'style={{backgroundColor:'#3AB094'}}>View Services</Button>
            </div>
            </div>
            </Col>
            <Col sm='12' lg='6' md='6'>
                <div className='seconddiv'>
                    <HiLightBulb  className='bulb ' size={60}/>
                    <CiTwitter className='twitter ' size={40} />
                    <FaInstagram className='insta icon ' size={30} />
                    <TbBrandFacebook className='fb icon' size={30} />
                    <FaCircle className='circle' size={130} >Digital Marketting</FaCircle>
                    <RxSpeakerLoud className='speaker ' size={50} />
                <img src={main} alt="" />
                </div>
            </Col>
        </Row> 
    </Container>
    </>
 );   
}
export default Heropage;