import Container from 'react-bootstrap/esm/Container';
import '../Servicepage/Servicepage.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import googleimg from '../images/google.png';
import huaweiimg from '../images/huawei.png';
import amazonimg from '../images/amazon.png';
import spotifyimg from '../images/spotify.png';

import hubspot from '../images/hubspot.png';
import microsoft from '../images/microsoft.png';
import airbnb from '../images/airbnb.png';
import slack from '../images/slack.png';
import dropbox from '../images/dropbox.png';

import allergan from '../images/allergan.png';
import ripple from '../images/ripple.png';
import walmart from '../images/walmart.png';
import cvshealth from '../images/cvshealth.png';

import syngenta from '../images/syngenta.png';
import trustpilot from '../images/trustpilot.png';
import horizon from '../images/horizon.png';

import blugoogle from '../images/Blue-images/google-blu.png';
import bluhuawei from '../images/Blue-images/huawei-blu.png';
import bluamazon from '../images/Blue-images/amazon-blu.png';
import bluspotify from '../images/Blue-images/spotify-blu.png';

import bluhubspot from '../images/Blue-images/hubspot-blu.png';
import blumicrosoft from '../images/Blue-images/microsoft-blu.png';
import bluairbnb from '../images/Blue-images/airbnb-blu.png';
import bluslack from '../images/Blue-images/slack-blu.png';
import bludropbox from '../images/Blue-images/dropbox-blu.png';

import bluallergan from '../images/Blue-images/allergan-blu.png';
import bluripple from '../images/Blue-images/ripple-blu.png';
import bluwalmart from '../images/Blue-images/walmart-blu.png';
import blucvshealth from '../images/Blue-images/cvshealth-blu.png';

import blusyngenta from '../images/Blue-images/syngenta-blu.png';
import blutrustpilot from '../images/Blue-images/trustpilot-blu.png';
import bluhorizon from '../images/Blue-images/horizon-blu.png';

function Service(){
     return(
      <>    
    <Container fluid className='Clientcontainer'>
    <h1 className='d-flex justify-content-center'>Services</h1><br></br><br></br>
        <div className='service-div'>
    <h1>Customer Relationship Management (CRM)</h1>
    <p className='Service-para'>    Services that help businesses implement and optimize CRM systems to manage customer interactions, 
      improve customer service, and increase customer satisfaction.
      This may involve CRM software implementation, customization, integration with other digital platforms,
      and training for staff.
      These are just a few examples of services
      related to achieving digital peak performance and experiences. 
      Depending on specific business needs and objectives, there are many other specialized services available 
      in the digital space.</p>
      </div>
        <Row className='d-flex justify-content-center Clientrow'>
            <Col xs={5} md={3} lg={2} className='clientcol'> <img src={googleimg} className='old' alt=''/> <img src={blugoogle} className='blue' alt=''/></Col>
            <Col xs={5} md={3} lg={2} className='clientcol'> <img src={amazonimg} className='old' alt=''/> <img src={bluamazon} className='blue' alt=''/></Col>
            <Col xs={5} md={3} lg={2} className='clientcol huawei'> <img src={huaweiimg} className='old' alt=''/> <img src={bluhuawei} className='blue' alt=''/></Col>
            <Col xs={5} md={3} lg={2} className='clientcol spotify'> <img src={spotifyimg} className='old' alt=''/> <img src={bluspotify} className='blue' alt=''/></Col>
        </Row>

        <Row className='d-flex justify-content-center Clientrow'>
            <Col  xs={5} md={3} lg={2} className='clientcol hubspot'> <img src={hubspot} className='old' alt=''/> <img src={bluhubspot} className='blue' alt=''/> </Col>
            <Col  xs={5} md={3} lg={2} className='clientcol microsoft'> <img src={microsoft} className='old' alt=''/> <img src={blumicrosoft} className='blue' alt=''/></Col>
            <Col  xs={5} md={3} lg={2} className='clientcol airbnb'> <img src={airbnb} className='old' alt=''/> <img src={bluairbnb} className='blue' alt=''/></Col>
            <Col xs={5}  md={3} lg={2} className='clientcol slack'> <img src={slack} className='old' alt=''/> <img src={bluslack} className='blue' alt=''/></Col>
            <Col  xs={5} md={3} lg={2} className='clientcol dropbox'> <img src={dropbox} className='old' alt=''/> <img src={bludropbox} className='blue' alt=''/></Col>
        </Row>

        <Row className='d-flex justify-content-center Clientrow'>
            <Col  xs={5} md={3} lg={2} className='clientcol allergan'> <img src={allergan} className='old' alt=''/> <img src={bluallergan} className='blue' alt=''/></Col>
            <Col  xs={5} md={3} lg={2} className='clientcol ripple'> <img src={ripple} className='old' alt=''/> <img src={bluripple} className='blue' alt=''/></Col>
            <Col  xs={5} md={3} lg={2} className='clientcol'> <img src={walmart} className='old' alt=''/> <img src={bluwalmart} className='blue' alt=''/></Col>
            <Col  xs={5} md={3} lg={2} className='clientcol cvs'> <img src={cvshealth} className='old' alt=''/> <img src={blucvshealth} className='blue' alt=''/></Col>
        </Row>
        
        <Row className='d-flex justify-content-center Clientrow'>
            <Col  xs={5} md={3} lg={2} className='clientcol'> <img src={syngenta} className='old' alt=''/> <img src={blusyngenta} className='blue' alt=''/></Col>
            <Col  xs={5} md={3} lg={2} className='clientcol'> <img src={trustpilot} className='old' alt=''/> <img src={blutrustpilot} className='blue' alt=''/></Col>
            <Col  xs={5} md={3} lg={2} className='clientcol'> <img src={horizon} className='old' alt=''/> <img src={bluhorizon} className='blue' alt=''/></Col>
        </Row><br></br>
        <div >
        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='wave-img custom-svg' style={{width:'100%'}}><path fill="#EBE6FF" fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,202.7C384,192,480,160,576,165.3C672,171,768,213,864,218.7C960,224,1056,192,1152,192C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> 
        </div>
    </Container>
    </>
    );
}

export default Service;