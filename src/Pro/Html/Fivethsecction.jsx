import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../Css/Fivethsection.css';
// import Marketting1 from '../images/Marketting/Marketting-1.png';
// import Marketting2 from '../images/Marketting/Marketting-2.png';
// import Marketting3 from '../images/Marketting/Marketting-3.png';

function Five(){
    return (
        <Container fluid className="Container5">
            <Row className="Fifthrow">
                <Col><div className="Contentrow">
                    <h1>Meet The Creative Team!</h1>
                <p className="Emppara">We can help you by utilizing out expertise in digital marketing to<br></br>
                improve your online presence , increase brand recognition</p>
                </div>
                </Col>
            </Row>
            <Row className="Picrow">
                <Col xs={10} md={4} lg={3} >
                     <div className="piccol pic1"></div>
                     <div className="Empname">
                        <h4>Marvin McKinney</h4>
                        <h6 className="Emppara">Project Manager</h6>
                     </div>
                    </Col>
                <Col xs={10} md={4} lg={3}>
                    <div className="piccol pic2"></div>
                    <div className="Empname">
                        <h4>Leslie Alexander</h4>
                        <h6 className="Emppara">SEO Specialist</h6>
                     </div>
                </Col>
                <Col xs={10} md={4} lg={3}>
                    <div className="piccol pic3"></div>
                    <div className="Empname">
                        <h4>Courtney Henry</h4>
                        <h6 className="Emppara">Web Designer</h6>
                     </div>
                </Col>
            </Row>
        </Container>
    );
}
export default Five;
