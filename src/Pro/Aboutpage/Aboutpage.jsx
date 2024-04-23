import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import seoimg from '../images/SEO-img.png';
import '../Aboutpage/Aboutpage.css'

function Aboutpag(){
    return (
        <Container className="aboutpage" >
            <Row className="about-row">
                <h1 className="about-head">About Us</h1>
                <Col lg={7} className="about-col">
                    <div>
                    <h2> Digital Marketting </h2> 
                    <p className="about-para">Digital marketing involves many of the same principles as 
                        traditional marketing and is often considered an additional way for
                         companies to approach consumers and understand their behavior. 
                         Companies often combine traditional and digital marketing techniques in their strategies.
                          But digital marketing also comes with its own set of challenges. Digital marketing 
                        started to become popular with the widespread adoption of the internet in the 1990s.
                        At Digital Peak, we specialize in guiding businesses like yours through the ever-changing 
                        landscape of digital marketing. With the digital realm continuously evolving, 
                        it's crucial to have a partner who understands the terrain and can lead you to the peak of online success.</p>
                    </div>
                    <div>
                        <h2>Cutting-Edge SEO</h2>
                            <p className="about-para">Achieving top rankings on search engine results pages (SERPs)
                             is essential for visibility and organic traffic. Our team of SEO experts employs the
                              latest techniques and best practices to optimize your website, enhance its search engine visibility, 
                              and attract qualified leads.We understand that every business is unique, which is why we craft custom digital marketing strategies tailored to your specific goals, target audience, and industry. Whether you're looking to boost brand awareness, 
                        drive more traffic to your website, or increase sales and conversions, we've got you covered</p>
                    </div>
                    <div>   
                    <h2>Website Marketting</h2>
                    <p className="about-para">Companies often use their own website as the centerpiece of their
                     digital marketing activities. The most effective websites represent the brand and
                      its products and services in a clear and memorable way. 
                    A website today must be fast-loading, mobile-friendly, and easy to navigate.
                    Email marketing is still one of the most effective digital marketing channels, 
                    though many people associate it with spam and treat such messages accordingly.
                     Many digital marketers use their other digital marketing channels to collect names for their email lists. 
                    Then, through email marketing, they try to turn those leads into customers.</p>
                    </div>
                    
                </Col>
                <Col lg={4} className="about-col">
                <div className="seo-img">
                    <img src={seoimg} alt='/' />
                </div>
                </Col>
            </Row>
        </Container>
    );
}
export default Aboutpag