import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../Css/Secondsection.css';
import webimg from '../images/pcmbl.png';
import googleimg from '../images/googleads.png';
import settingimg from '../images/setting2.png';
import socialimg from '../images/socialmedia.png';
import naviimg from '../images/navigation.png';

function Section2(){
    return(
        <>
        <div>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='wave-img'><path fill="#F2ECFF" fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,202.7C384,192,480,160,576,165.3C672,171,768,213,864,218.7C960,224,1056,192,1152,192C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> 
         </div>
         <Container fluid className="Servicecontainer">
            <div className="circleright"></div>
         <div className="servicediv">
            <h1 className='d-flex justify-content-center'>Digital Marketing Services</h1><br></br><br></br>
                <div className="d-flex justify-content-center">
                    <Row className="Sec-2-sec-row">
                    <Col xs={12} md={4} lg={3}className="Servicecol">
                    <Card className="Servicecard">
                        <svg viewBox="80 50 50 80" xmlns="http://www.w3.org/2000/svg" className="svgimg">
                            <path fill="#F1F8FF" d="M22.4,13.7C9.8,34.7,-32.8,39.2,-41.6,20.3C-50.3,1.5,-25.2,-40.5,-3.8,-42.7C17.5,-45,35,-7.3,22.4,13.7Z" transform="translate(100 100)" />
                            </svg>
                    <Card.Img variant="top" src={webimg} className="cardimg" style={{position:'absolute'}} />
                    <Card.Body>
                        <Card.Title>Web Design</Card.Title>
                        <Card.Text className="crdtext">
                       A visually appearing & user friendly website can enhance company's presence increase brand awareness and drive more traffic
                        </Card.Text>
                        <Button variant="primary" className="cardbtn">Learn More</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col xs={12} md={4} lg={3} className="Servicecol">
                        <Card className="Servicecard">
                        <svg viewBox="80 50 50 80" xmlns="http://www.w3.org/2000/svg" className="svgimg">
                            <path fill="#ECF8F5" d="M22.4,13.7C9.8,34.7,-32.8,39.2,-41.6,20.3C-50.3,1.5,-25.2,-40.5,-3.8,-42.7C17.5,-45,35,-7.3,22.4,13.7Z" transform="translate(100 100)" />
                            </svg>
                    <Card.Img variant="top" src={googleimg} className="cardimg" />
                    <Card.Body>
                        <Card.Title>Google Ads</Card.Title>
                        <Card.Text className="crdtext">
                        Google Ads is a powerful and highly effective online advertising platform.It allows users to create and display targeted ads across
                        </Card.Text>
                        <Button style={{backgroundColor:'#3AB094'}} className="cardbtn">Learn More</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col xs={12} md={4} lg={3} className="Servicecol">
                    <Card className="Servicecard">
                    <svg viewBox="80 50 50 80" xmlns="http://www.w3.org/2000/svg" className="svgimg">
                            <path fill="#FFF2EB" d="M22.4,13.7C9.8,34.7,-32.8,39.2,-41.6,20.3C-50.3,1.5,-25.2,-40.5,-3.8,-42.7C17.5,-45,35,-7.3,22.4,13.7Z" transform="translate(100 100)" />
                            </svg>
                    <Card.Img variant="top" src={settingimg} className="cardimg" />
                    <Card.Body>
                        <Card.Title>SEO</Card.Title>
                        <Card.Text className="crdtext">
                        Search engine optimization is the practice of optimizing websites to improve their ranking in search engine results pages 
                        </Card.Text>
                        <Button style={{backgroundColor:'#FE7831'}} className="cardbtn">Learn More</Button>
                    </Card.Body>
                    </Card>
                    </Col></Row>
                    </div><br></br>
                    <div className="d-flex justify-content-center">
                <Row className="Sec-2-sec-row">
                <Col xs={12} md={4} lg={3} className="Servicecol">
                        <Card className="Servicecard">
                        <svg viewBox="80 50 50 80" xmlns="http://www.w3.org/2000/svg" className="svgimg">
                            <path fill="#FEF1F2" d="M22.4,13.7C9.8,34.7,-32.8,39.2,-41.6,20.3C-50.3,1.5,-25.2,-40.5,-3.8,-42.7C17.5,-45,35,-7.3,22.4,13.7Z" transform="translate(100 100)" />
                            </svg>
                        <Card.Img variant="top" src={socialimg} className="cardimg"/>
                        <Card.Body>
                            <Card.Title>Social Media</Card.Title>
                            <Card.Text className="crdtext">
                            Social media marketing involves leaveraging social media platforms to promote products or services and engage with audiences
                            </Card.Text>
                            <Button style={{backgroundColor:'#F06C7A'}} className="cardbtn">Learn More</Button>
                        </Card.Body>
                        </Card>
                        </Col>
                    <Col xs={12} md={4} lg={3} className="Servicecol">
                    <Card className="Servicecard">
                    <svg viewBox="80 50 50 80" xmlns="http://www.w3.org/2000/svg" className="svgimg">
                            <path fill="#F1EEFF" d="M22.4,13.7C9.8,34.7,-32.8,39.2,-41.6,20.3C-50.3,1.5,-25.2,-40.5,-3.8,-42.7C17.5,-45,35,-7.3,22.4,13.7Z" transform="translate(100 100)" />
                            </svg>
                    <Card.Img variant="top" src={naviimg} className="cardimg" />
                    <Card.Body>
                        <Card.Title>PPC</Card.Title>
                        <Card.Text className="crdtext">
                        Type of advertising model where advertisers pay each time their ad is clicked on.These ads can appear on search engine results 
                        </Card.Text>
                        <Button style={{backgroundColor:'#793CFB'}}className="cardbtn">Learn More</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </div>
            </div>
            <div className="circleleft"></div>
            
        </Container>
        </>
    );
}
export default Section2;