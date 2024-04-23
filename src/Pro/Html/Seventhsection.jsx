import Container from "react-bootstrap/esm/Container";
import '../Css/Seventhsection.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import plogo from '../images/plogo.png';
import { FaPhoneVolume } from "react-icons/fa6";
import { BsFillPrinterFill } from "react-icons/bs";
import { IoMdMailUnread } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

function Section7(){
return(

        <Container fluid className="Seventhcontainer">
         <Row className="Sec-7-row">
            <Col lg={3} md={4} xs={12}>
                <div className="Sec-7-1st-col">
                    <Row>
                        <Col lg={2} md={1} xs={1} className="plogo" ><img src={plogo} alt="/" /> </Col>
                        <Col lg={2} md={2} xs={3}><h1>Digital_Peak</h1></Col>
                    </Row>
                    <Row className="Sec-7-content-row">
                        Our Company offers tailored marketting solutions that are designed
                        to meet the specific needs of our clients.We are committed to ensuring
                        that our clients receive the best possible results 
                    </Row>
                </div>
            </Col>
            <Col lg={2} md={2} xs={6} className="list-col">
                <ul className="lis">
                <li className="lis-head"><h4><b>Navigation</b></h4></li>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </Col>
            <Col lg={2} md={2} xs={6}className="list-col">
            <ul className="lis">
                <li className="lis-head"><h4><b>Quick Links</b></h4></li>
                    <li>Terms and Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Career</li>
                    <li>Refund Policy</li>
                    <li>Live chat</li>
                </ul></Col>
            <Col lg={3} md={4} xs={7} className="list-col">
            <ul className="lis">
                <li className="lis-head"><h4><b>Contact Us</b></h4></li>
                    <li><FaPhoneVolume  size={18} className="last-icon"/>  (603) 555-0123</li>
                    <li><BsFillPrinterFill size={18} className="last-icon"/>  (219) 555-0114</li>
                    <li><IoMdMailUnread size={18} className="last-icon" />  digitalpeak@example.com</li>
                    <li><FaLocationDot size={18} className="last-icon" />  4140 Parker Rd.Allentown <p className="last-list">New Mexico 31134</p></li>
                </ul></Col>
         </Row>
    </Container>
);
}
export default Section7