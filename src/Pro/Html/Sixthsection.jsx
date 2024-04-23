import Container from 'react-bootstrap/esm/Container'
import '../Css/Sixthsection.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/esm/Col'
import strimg from '../images/star.png'
import { RxQuote } from "react-icons/rx";
import Siximg1 from '../images/Sixthsection/six1.png'
import Siximg2 from '../images/Sixthsection/six2.png'
import Siximg3 from '../images/Sixthsection/six3.png'

function Sixth(){
    return (
        <Container fluid className='container6'>
            <Row className='hedrow'> <h1> <b>What Our Clients Say </b></h1> </Row>
            <Row className='reviewrow'>
                <Col lg={3} md={8} className='reviewcol'>
                    <RxQuote  size={40} className='quote' style={{color: '#206CFF'}} />
                    <div className='linediv' style={{backgroundColor: '#206CFF'}}></div>
                    <div className='reviewdiv'>
                        <div className='stardiv'><img src={strimg} alt=''/></div>
                        <p className='para'>Digital Peaks work played an important roll in the client's growth
                            as a company.Power Digital led an excellent project management process with responsive
                            communication via in-person and virtual meetings and emails </p>
                        <Row className='last-rw'>
                        <Col lg={3}><div className='smallimg' style={{backgroundColor:"#FE7831"}} ><img src={Siximg2} alt='' /></div> </Col>
                            <Col className='nameplace'><Row><h3 className='Sec-6-name'><b>Jenny Wilson</b></h3></Row>
                                <Row className='nameplace2'>Houston, USA</Row>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg={3} md={8} className='reviewcol' >
                    <RxQuote  size={40} className='quote' style={{color: '#3AB094'}}/>
                    <div className='linediv' style={{backgroundColor: '#3AB094'}}></div>
                    <div className='reviewdiv'>
                        <div className='stardiv'><img src={strimg} alt=''/></div>
                        <p className='para'>Thanks to Digital Peak's efforts.The team's comprehensive marketting plans have 
                        led to great results.Digital pealhas completed the deliverables beyond my expectation. 
                        As a result, the target CPA and project metrics </p>
                        <Row className='last-rw'>
                            <Col lg={3}><div className='smallimg' style={{backgroundColor:"#6A727D"}}><img src={Siximg1} alt='' /></div> </Col>
                            <Col className='nameplace'><Row><h3 className='Sec-6-name'><b>Robert Fox </b></h3></Row>
                                <Row className='nameplace2'>San Diego, USA</Row>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg={3} md={8} className='reviewcol'>
                <RxQuote  size={40} className='quote' style={{color: '#F06C7a'}}/>
                <div className='linediv' style={{backgroundColor: '#F06C7a'}}></div>
                    <div className='reviewdiv'>
                        <div className='stardiv'><img src={strimg} alt=''/></div>
                        <p className='para'>The company was able to enhance our digital visibility and platform performance,
                        thanks to the expertise of Digital Peak Marketting.The team was highly communicative, and 
                        internal stackholders were particularly impressed</p>
                        <Row className='last-rw'>
                        <Col lg={3}><div className='smallimg' style={{backgroundColor:"#F06C7A"}}><img src={Siximg3} alt='' /></div> </Col>
                            <Col className='nameplace'><Row><h3 className='Sec-6-name'><b>Kristin Watson</b></h3></Row>
                                <Row className='nameplace2'>Los Angeles, USA</Row>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <div>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='Seventhsvg'><path fill="white" fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,202.7C384,192,480,160,576,165.3C672,171,768,213,864,218.7C960,224,1056,192,1152,192C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> 
         </div>
        </Container>
    )
}
export default Sixth