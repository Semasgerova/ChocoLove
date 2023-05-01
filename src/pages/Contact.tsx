import { Button, Col, Row } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { LinkContainer } from "react-router-bootstrap";

const Contact = () => {
  return (
    <div className="contact">
      <div className="main d-flex flex-column justify-content-center align-items-center h-100">
        <h1>Contacts</h1>
        <p className='py-3'><LinkContainer to='/'><span>Home</span></LinkContainer> // Contact</p>
      </div>
      <div className="cards">
        <img src="http://crems.like-themes.com/wp-content/themes/crems/assets/images/grunge-dark-temp.png" alt="" />
        <Row className="m-0 g-5 py-5">
          <Col sm={12} md={6} lg={3}>
            <div className="text text-center border-0">
            <div className="icon"><i className="fa-solid fa-location-dot"></i></div>
            <h3>Location</h3>
            <p>29 Nicolas str,<br /> New York, 987597-50</p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="text text-center">
            <div className="icon"><i className="fa-solid fa-phone-volume"></i></div>
            <h3>Phones</h3>
            <p>0(800) 890-90-609 <br /> 0(800) 890-90-620</p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="text text-center">
            <div className="icon"><i className="fa-solid fa-envelope"></i></div>
            <h3>Email</h3>
            <p>sale@like-themes.com <br /> tech@like-themes.com</p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className="text text-center">
            <div className="icon"><i className="fa-solid fa-rotate"></i></div>
            <h3>Working Hours</h3>
            <p>Wednesday - Sunday <br /> 7:00 AM - 5:00 PM</p>
            </div>
          </Col>
        </Row>
      </div>
      <div className="map">
             <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d387179.18477109616!2d-74.216713!3d40.699579!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1682716945803!5m2!1sen!2sus" width="100%" height="100%"></iframe>
      </div>
      <div className="message d-flex flex-column align-items-center justify-content-center py-5">
        <h1 className="py-5">Send Message</h1>
        <div className="groups d-flex justify-content-between ">
        <InputGroup className="mb-3 group">
        <Form.Control
          placeholder="Your name"
          aria-label="Username"
          aria-describedby="basic-addon1"
          className="input"
        />
      </InputGroup>

      <InputGroup className="mb-3 group">
        <Form.Control
          placeholder="Your email"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          className="input"
        />
      </InputGroup>
        </div>

      <InputGroup className="text">
        <Form.Control as="textarea" aria-label="With textarea" placeholder="Message" className="txt"/>
      </InputGroup>
      <div className="button py-5 d-flex justify-content-center align-items-center">
        <Button className="btn p-0 mt-4">SUBMIT</Button>
        </div>
      </div>
    </div>
  )
}

export default Contact