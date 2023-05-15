import { Button, Col, Container, Row,  Modal, ModalBody, ModalHeader} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CountUp from "react-countup";
import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";

const About = () => {
  const [productItem] = useContext(ProductContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="about">
      <div className="main d-flex flex-column justify-content-center align-items-center h-100">
        <h1>About Us</h1>
        <p className="py-3">
          <LinkContainer to="/">
            <span>Home</span>
          </LinkContainer>{" "}
          // About
        </p>
      </div>
      <div className="sweet py-5">
      <div className="img"><img src="http://crems.like-themes.com/wp-content/themes/crems/assets/images/grunge-dark-temp.png" alt="" /></div>
        <Container>
        <Row>
          <Col sm={12} md={6}>
            <h1>Our patisserie produces <span>unique sweets</span> for lovers of yummy</h1>
            <p>Cras vitae ornare nunc, vitae tempus eros. Donec mi libero, eleifend at laoreet id, convallis nec nunc. Proin consequat mattis nisl ut blandit. Nunc pellentesque bibendum urna., imperdiet lacinia lorem molestie ac.</p>
            <h5>
                <i className="fa-regular fa-file-lines"></i> Download Price
              </h5>
              <Button className="btn p-0 mt-4">
                READ MORE <i className="fa-solid fa-arrow-right"></i>
              </Button>
          </Col>
          <Col sm={12} md={6}>
            <Row>
            <Col sm={12} md={6}>
              <img src="http://crems.like-themes.com/wp-content/uploads/2019/06/gallery-01-e1597251883779.jpg" alt="" />
            </Col>
            <Col sm={12} md={6}>
              <img src="http://crems.like-themes.com/wp-content/uploads/2019/06/gallery-02-1536x1536.jpg" alt="" />
            </Col>
            </Row>
          </Col>
        </Row>
        </Container>
      </div>
      <div className="cards py-5">
        <Container>
         <Row>
        <Col sm={12} md={6} lg={4}>
        <div className="d-flex align-items-center w-75">
            <div className="icon me-4">
              <i className="fa-brands fa-pagelines"></i>
            </div>
            <div className="text">
              <h5>Natural Organic Product</h5>
              <p className="m-0">
                Vivamus vel magna non mi gravida ultr sed ut turpis.
              </p>
            </div>
          </div>
        </Col>
         <Col  sm={12} md={6} lg={4}>
         <div className="d-flex align-items-center w-75">
            <div className="icon me-3">
              <i className="fa-solid fa-gift"></i>
            </div>
            <div className="text">
              <h5>Packaging Design</h5>
              <p className="m-0">
                Praesent sit amet fringilla eros. Nunc pulv dui tellus.
              </p>
            </div>
          </div>
         </Col>
          <Col sm={12} md={6} lg={4}>
          <div className="d-flex align-items-center w-75">
            <div className="icon me-4">
              <i className="fa-solid fa-cubes-stacked"></i>
            </div>
            <div className="text">
              <h5>Best Quality Cocoa</h5>
              <p className="m-0">
                Cras in laoreet metus, vitae efficitur libero. Nam sit amet
                orci.
              </p>
            </div>
          </div>
          </Col>
         </Row>
        </Container>
        <img src="http://crems.like-themes.com/wp-content/uploads/2020/07/grunge-dark-rev-temp.png" alt="" />
      </div>
      <div className="parallax d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h1>
            Made with love <br /> <span>unique sweets</span> for gourmet
          </h1>
        </div>
        <div className="square"></div>
      </div>
      <div className="countUp pb-5">
      <div className="img"><img src="http://crems.like-themes.com/wp-content/themes/crems/assets/images/grunge-dark-temp.png" alt="" /></div>
        <Container>
          <Row className="m-0">
            <Col sm={12} md={6} lg={3}>
              <h1>
                <CountUp end={230} duration={5}></CountUp>
              </h1>
              <p>Pastry Shops</p>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <h1>
                <CountUp end={26} duration={5}></CountUp>
              </h1>
              <p>Candies Collections</p>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <h1>
                <CountUp end={14} duration={5}></CountUp>
              </h1>
              <p>Years of Experience</p>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <h1>
                <CountUp end={80} duration={5}></CountUp>
              </h1>
              <p>Creative Pastry Chefs</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="video d-flex justify-content-center align-items-center">
        <Container className="container d-flex justify-content-center align-items-center">
          <div className="box d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-center">Watch our video</h1>
            <Button
              className="btn d-flex align-items-center justify-content-center"
              onClick={handleShow}
            >
              <i className="fa-solid fa-play"></i>
            </Button>

            <Modal
              show={show}
              onHide={handleClose}
              aria-labelledby="contained-modal-title-vcenter"
              centered
              
            >
              <ModalHeader closeButton></ModalHeader>
              <ModalBody className="modal-body">
                  <video autoPlay muted style={{ width: "100%", height: "100%" }} src="https://assets.mixkit.co/videos/preview/mixkit-cover-a-strawberry-with-chocolate-syrup-on-a-red-background-41115-large.mp4"></video>
              </ModalBody>
            </Modal>
          </div>
          <div className="square"></div>
        </Container>
      </div>
      <div className="team d-flex flex-column justify-content-center align-items-center py-5">
      <div className="head text-center">
          <p>OUR TEAM</p>
          <h1>
          Meet Our Confectioners
          </h1>
        </div>
        <div className="teams py-5">
          <Container>
            <Row className="g-5 box">
              {productItem.slice(39,43).map((item:any)=>{
                return (
                 <Col sm={12} md={6} lg={3}>
                    <div className="img">
                       <LinkContainer to={`/about/${item.id}`}><img src={item.image} alt="" /></LinkContainer>
                    </div>
                 </Col>
                )
              })}
            </Row>
          </Container>
        </div>
        <LinkContainer to="/blog">
          <Button className="btn d-flex justify-content-center align-items-center">
            READ MORE <i className="fa-solid fa-arrow-right"></i>
          </Button>
        </LinkContainer>
      </div>
    </div>
  );
};

export default About;
