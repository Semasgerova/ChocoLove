import { Button, Col, Container, Row, Modal, ModalBody } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CountUp from "react-countup";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { LangContext } from "../context/LangContext";

const About = () => {
  const [productItem] = useContext(ProductContext);
  const [lang] = useContext(LangContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    AOS.init();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
    top: 0,
    behavior: "smooth"
    });
    };


  return (
    <div className="about">
      <div className="main d-flex flex-column justify-content-center align-items-center h-100">
        {lang==="az"?
        <><h1>Bizim haqqımızda</h1>
        <p className="py-3">
        <LinkContainer to="/">
          <span>Ana Səhifə</span>
        </LinkContainer>
        // Haqqımızda
      </p></>
        :
        <><h1>About Us</h1>
        <p className="py-3">
        <LinkContainer to="/">
          <span>Home</span>
        </LinkContainer>
        // About
      </p></>}
       
      </div>
      <div className="sweet py-5">
        <div className="img">
          <img
            src="http://crems.like-themes.com/wp-content/themes/crems/assets/images/grunge-dark-temp.png"
            alt=""
          />
        </div>
        <Container>
          <Row className="g-5 m-0">
           {lang==="az"?
            <Col sm={12} md={6}>
            <h1>
            Bizim şirniyyat sevənlər üçün dadlı <span>unikal şirniyyatlar</span> istehsal edir
            </h1>
            <p>
            Biz 40 illik tarixə malik yüksək keyfiyyətli şokolad məhsulları istehsal edirik. Bizim şirkət
            geniş çeşiddə orijinal reseptlər təklif edərək, bu sənayedə unikal təcrübə inkişaf etdirmişdir
            şokolad həvəskarlarının və bütün şokolad həvəskarlarının dad üfüqlərini genişləndirən şokolad.
            </p>
            <h5>
              <i className="fa-regular fa-file-lines"></i> Yükləmə Qiyməti
            </h5>
            <Button className="btn p-0 mt-4" onClick={scrollToTop}>
              DAHA ÇOX OXU <i className="fa-solid fa-arrow-right"></i>
            </Button>
          </Col>:
           <Col sm={12} md={6}>
           <h1>
             Our patisserie produces <span>unique sweets</span> for lovers of
             yummy
           </h1>
           <p>
            We are producing fine quality chocolate products, with a history of 40 years. Our company 
            has developed unique expertise in this industry, offering a wide range of original recipes of 
            chocolate that broaden the taste horizons of chocolate enthusiasts and all lover of chocolate.
           </p>
           <h5>
             <i className="fa-regular fa-file-lines"></i> Download Price
           </h5>
           <Button className="btn p-0 mt-4" onClick={scrollToTop}>
             READ MORE <i className="fa-solid fa-arrow-right"></i>
           </Button>
         </Col>
          }
            <Col sm={12} md={6}>
              <Row className="g-5">
                <Col sm={12} md={6}>
                  <img
                    src="http://crems.like-themes.com/wp-content/uploads/2019/06/gallery-01-e1597251883779.jpg"
                    alt=""
                  />
                </Col>
                <Col sm={12} md={6}>
                  <img
                    src="http://crems.like-themes.com/wp-content/uploads/2019/06/gallery-02-1536x1536.jpg"
                    alt=""
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="cards py-5">
        <Container>
          <Row className="g-5 m-0">
            <Col sm={12} md={6} lg={4}>
              <div className="d-flex align-items-center w-75">
                <div className="icon me-4">
                  <i className="fa-brands fa-pagelines"></i>
                </div>
                {lang==="az"?<div className="text">
                  <h5>Təbii Üzvi Məhsul</h5>
                  <p className="m-0">
                  Canlı və ya güclü bir şəkildə heç bir çəkisi yoxdur.
                  </p>
                </div>:<div className="text">
                  <h5>Natural Organic Product</h5>
                  <p className="m-0">
                    Vivamus vel magna non mi gravida ultr sed ut turpis.
                  </p>
                </div>}
              </div>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <div className="d-flex align-items-center w-75">
                <div className="icon me-3">
                  <i className="fa-solid fa-gift"></i>
                </div>
                {lang==="az"?<div className="text">
                  <h5>Qablaşdırma Dizaynı</h5>
                  <p className="m-0">
                  Bu, çox vacib ekoloji bir şeydir.
                  </p>
                </div>:<div className="text">
                  <h5>Packaging Design</h5>
                  <p className="m-0">
                    Praesent sit amet fringilla eros. Nunc pulv dui tellus.
                  </p>
                </div>}
              </div>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <div className="d-flex align-items-center w-75">
                <div className="icon me-4">
                  <i className="fa-solid fa-cubes-stacked"></i>
                </div>
               {lang==="az"? <div className="text">
                  <h5>Ən keyfiyyətli kakao</h5>
                  <p className="m-0">
                  Sabah laoreet qorxusunda həyat azad olur.
                  </p>
                </div>: <div className="text">
                  <h5>Best Quality Cocoa</h5>
                  <p className="m-0">
                    Cras in laoreet metus, vitae efficitur libero. Nam sit amet
                    orci.
                  </p>
                </div>}
              </div>
            </Col>
          </Row>
        </Container>
        <div className="bottom-img">
          <img
            src="http://crems.like-themes.com/wp-content/uploads/2020/07/grunge-dark-rev-temp.png"
            alt=""
          />
        </div>
      </div>
      <div className="parallax d-flex justify-content-center align-items-center">
        <div className="text-center" data-aos="zoom-in">
        {lang==="az"?  <h1>
        Qurman üçün <span>unikal şirniyyatlar</span> <br /> sevgi ilə hazırlanmışdır
          </h1>:  <h1>
            Made with love <br /> <span>unique sweets</span> for gourmet
          </h1>}
        </div>
        <div className="square"></div>
      </div>
      <div className="countUp pb-5">
        <div className="img">
          <img
            src="http://crems.like-themes.com/wp-content/themes/crems/assets/images/grunge-dark-temp.png"
            alt=""
          />
        </div>
        <Container>
          <Row className="m-0">
            <Col sm={12} md={6} lg={3}>
              <h1>
                <CountUp end={230} duration={5}></CountUp>
              </h1>
              {lang==="az"?<p>Xəmir Dükanları</p>:<p>Pastry Shops</p>}
            </Col>
            <Col sm={12} md={6} lg={3}>
              <h1>
                <CountUp end={26} duration={5}></CountUp>
              </h1>
              {lang==="az"?<p>Şirniyyat kolleksiyaları</p>:<p>Candies Collections</p>}
            </Col>
            <Col sm={12} md={6} lg={3}>
              <h1>
                <CountUp end={14} duration={5}></CountUp>
              </h1>
              {lang==="az"?<p>İllərin Təcrübəsi</p>:<p>Years of Experience</p>}
            </Col>
            <Col sm={12} md={6} lg={3}>
              <h1>
                <CountUp end={80} duration={5}></CountUp>
              </h1>
              {lang==="az"?<p>Yaradıcı Xəmir Aşpazları</p>:<p>Creative Pastry Chefs</p>}
            </Col>
          </Row>
        </Container>
      </div>
      <div className="video d-flex justify-content-center align-items-center">
        <Container className="container d-flex justify-content-center align-items-center">
          <div className="box d-flex flex-column justify-content-center align-items-center">
          {lang==="az"?<h1 className="text-center">Videomuzu izləyin</h1>:<h1 className="text-center">Watch our video</h1>}
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
              <ModalBody
                className="modal-body"
                style={{ background: "rgb(15, 14, 15)" }}
              >
                <video
                  autoPlay
                  muted
                  style={{ width: "100%", height: "100%" }}
                  src="https://assets.mixkit.co/videos/preview/mixkit-cover-a-strawberry-with-chocolate-syrup-on-a-red-background-41115-large.mp4"
                ></video>
              </ModalBody>
            </Modal>
          </div>
          <div className="square"></div>
        </Container>
      </div>
      <div className="team d-flex flex-column justify-content-center align-items-center py-5">
        <div className="head text-center" data-aos="fade-up">
          {lang==="az"?<> <p>BİZİM KOMANDA</p>
          <h1>Şirniyyatçılarımızla Tanış Olun</h1></>:<> <p>OUR TEAM</p>
          <h1>Meet Our Confectioners</h1></>}
        </div>
        <div className="teams py-5" data-aos="fade-down">
          <Container>
            <Row className="g-5 box m-0">
              {productItem.chef?.map((item: any) => {
                return (
                  <Col sm={12} md={6} lg={3} key={item.id}>
                    <div className="img">
                      <LinkContainer to={`/about/${item.id}`} onClick={scrollToTop}>
                        <img src={item.image} alt="" />
                      </LinkContainer>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
        <LinkContainer to="/blog">
          <Button className="btn d-flex justify-content-center align-items-center" onClick={scrollToTop}>
            {lang==="az"?"DAHA ÇOX OXU":"READ MORE"} <i className="fa-solid fa-arrow-right"></i>
          </Button>
        </LinkContainer>
      </div>
    </div>
  );
};

export default About;
