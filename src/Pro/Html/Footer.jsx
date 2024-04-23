import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import '../Css/Footer.css';
import { FaRegCopyright } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Col from "react-bootstrap/esm/Col";

function Footer(){
    return(
        <footer>
        <Container fluid ><hr className="hr-tag"></hr>
            <Row className="footer-row">
                
                <div className="footer-div">
                    <Col lg={4} md={6} xs={9}className="copyright florgt"><FaRegCopyright />  2023 Digital Peak, All Rights Reserved.</Col>
                    <Col lg={3} md={4} xs={5} className="float-icon-div florgt">
                        <div className="footer-icon"><RiInstagramFill size={17} /></div>
                        <div className="footer-icon"><FaTwitter size={17}/></div>
                        <div className="footer-icon"><FaFacebookF size={17}/></div>
                    </Col>
                </div>
            </Row>
        </Container>
        </footer>
    );
}
export default Footer