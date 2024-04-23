import Container from 'react-bootstrap/esm/Container';
import '../Css/Fourthsection.css'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { FaPinterestP } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { AiFillIeCircle } from "react-icons/ai";
import { FaRankingStar } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa";
import { TbBulbFilled } from "react-icons/tb";

function Section4(){
    return(
        <Container fluid className='Container3'>
            <Row className="justify-content-center Fourthrow">       
                <Col xs={12} md={6} lg={6} className='Fourthcol'>
                    <div className='Fstdiv'>
                    <div className='Emptycircle'><FaPinterestP size={80} className='Hidden'/> </div>
                    <FaPinterestP className='pinterest' size={40}/>
                    <FaYoutubeSquare  size={60} className='media'/>
                    <div className='move'><FaPinterestP size={80} className='Hidden'/> </div>
                    <AiFillIeCircle size={70} className='ethernet'/>
                    </div>
                </Col>
                <Col xs={12} md={6} lg={6} className="justify-content-center Fourthcol">
                <h2 className='head'>Why Should You Choose Us?</h2>
                    <div className='Secdiv'>
                        <div className='Smalldiv'>
                            <div className='xsmalldiv'>
                                <svg viewBox="80 50 50 80" xmlns="http://www.w3.org/2000/svg" className="Svg">
                                  <path fill="#E9F1FF" d="M22.4,13.7C9.8,34.7,-32.8,39.2,-41.6,20.3C-50.3,1.5,-25.2,-40.5,-3.8,-42.7C17.5,-45,35,-7.3,22.4,13.7Z" transform="translate(100 100)" />
                                </svg>
                                <FaRankingStar size={50} className='iconfordiv' style={{color:"#793CFB"}}/>
                            </div>
                            <div className='xsmalldiv2'>
                                <p><b>Leading Digital Marketing Agency</b></p>
                                <p className='secondpara'>As a leading digital marketing agency , we are pride of ourselves on our ability to help our clients achieve their  marketting goals through a range of services,including search engine optimization.PPc advertising</p>
                            </div>
                        </div>
                        <div className='Smalldiv'>
                        <div className='xsmalldiv'>
                        <svg viewBox="80 50 50 80" xmlns="http://www.w3.org/2000/svg" className="Svg">
                                  <path fill="#ECF8F5" d="M22.4,13.7C9.8,34.7,-32.8,39.2,-41.6,20.3C-50.3,1.5,-25.2,-40.5,-3.8,-42.7C17.5,-45,35,-7.3,22.4,13.7Z" transform="translate(100 100)" />
                                </svg>
                            <FaThumbsUp size={50} className='iconfordiv' style={{color:"#3Ab094"}}/>
                            </div>
                            <div className='xsmalldiv2'>
                            <p><b>Highest Success Rates</b></p>
                            <p className='secondpara'>Our client appreciate the personailzed attention and strategic insights we provide , as well as our ability to stay ahead of the latest friends and best practice in digital marketing.They value the transparency
                            </p>
                            </div>
                        </div>
                        <div className='Smalldiv'>
                        <div className='xsmalldiv'>
                        <svg viewBox="80 50 50 80" xmlns="http://www.w3.org/2000/svg" className="Svg">
                                  <path fill="#FFF2EB" d="M22.4,13.7C9.8,34.7,-32.8,39.2,-41.6,20.3C-50.3,1.5,-25.2,-40.5,-3.8,-42.7C17.5,-45,35,-7.3,22.4,13.7Z" transform="translate(100 100)" />
                                </svg>
                            <TbBulbFilled size={50} className='iconfordiv' style={{color:"#FE7831"}}/>
                            </div>
                            <div className='xsmalldiv2' >
                            <p><b>Innovative Marketing Solutions</b></p>
                            <p className='secondpara'>We offer innovative marketing solution tailored to meet our clients specific needs.Our team stays updated with the latest trends in digital marketing to ensure that our clients receive the best possible results
                            </p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            
            <div className='Lastdiv'>
                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='wa' style={{width:'100%'}}><path fill="#793CFB" fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,202.7C384,192,480,160,576,165.3C672,171,768,213,864,218.7C960,224,1056,192,1152,192C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> 
             </div>
             
        </Container>
    );
}

export default Section4;