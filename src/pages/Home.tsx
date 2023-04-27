import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Button, Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home">
      <div className="swiper">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="swp">
            <img
              src="http://crems.like-themes.com/wp-content/uploads/2019/06/slider-overlay-01.jpg"
              alt=""
            />
            <div className="text text-center">
              <div className="txt">
                <h1>
                  Author's Delicious Sweets <br />
                  <span>and Chocolate</span>
                </h1>
                <p>
                  Nulla lacinia bibendum auctor. Mauris uma tellus, fermentum at
                  mauris nec, aliquet <br /> volutpat leo. Nullam eget ultrices
                  magna. Etiam neque orci, convallis.
                </p>
              </div>
              <Button className="btn">
                READ MORE <i className="fa-solid fa-arrow-right"></i>
              </Button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swp">
            <img
              src="http://crems.like-themes.com/wp-content/uploads/2019/06/slider-overlay-02.jpg"
              alt=""
            />
            <div className="text text-center">
              <div className="txt">
                <h1>
                  Author's Delicious Sweets <br />
                  <span>and Chocolate</span>
                </h1>
                <p>
                  Nulla lacinia bibendum auctor. Mauris uma tellus, fermentum at
                  mauris nec, aliquet <br /> volutpat leo. Nullam eget ultrices
                  magna. Etiam neque orci, convallis.
                </p>
              </div>
              <Button className="btn">
                READ MORE <i className="fa-solid fa-arrow-right"></i>
              </Button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swp">
            <img
              src="http://crems.like-themes.com/wp-content/uploads/2019/06/slider-overlay-03.jpg"
              alt=""
            />
            <div className="text text-center">
              <div className="txt">
                <h1>
                  Author's Delicious Sweets <br />
                  <span>and Chocolate</span>
                </h1>
                <p>
                  Nulla lacinia bibendum auctor. Mauris uma tellus, fermentum at
                  mauris nec, aliquet <br /> volutpat leo. Nullam eget ultrices
                  magna. Etiam neque orci, convallis.
                </p>
              </div>
              <Button className="btn">
                READ MORE <i className="fa-solid fa-arrow-right"></i>
              </Button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swp">
            <img
              src="http://crems.like-themes.com/wp-content/uploads/2019/06/slider-overlay-04.jpg"
              alt=""
            />
            <div className="text text-center">
              <div className="txt">
                <h1>
                  Author's Delicious Sweets <br />
                  <span>and Chocolate</span>
                </h1>
                <p>
                  Nulla lacinia bibendum auctor. Mauris uma tellus, fermentum at
                  mauris nec, aliquet <br /> volutpat leo. Nullam eget ultrices
                  magna. Etiam neque orci, convallis.
                </p>
              </div>
              <Button className="btn">
                READ MORE <i className="fa-solid fa-arrow-right"></i>
              </Button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="aboutSec">
        <div className="img top-img"><img src="http://crems.like-themes.com/wp-content/uploads/2020/07/grunge-dark-temp.png" alt="" /></div>
        <Container className="py-5">
        <Row className="m-0 justify-content-between g-5">
           <Col md={4} sm={12}>
            <h3>Our patisserie produces <span>unique sweets</span> for lovers of yummy</h3>
            <p>Curabitur tortor ante, vestibulum vel lacus id, semper malesuada sem. Sed sit amet tortor augue. Integer magna neque</p>
            <h5><i className="fa-regular fa-file-lines"></i> Download Price</h5>
            <Button className="btn p-0 mt-4">READ MORE <i className="fa-solid fa-arrow-right"></i></Button>
           </Col>
           <Col md={4} sm={12}>
            <ul className="p-0">
              <li className="d-flex align-items-center">
                <div className="icon me-4"><i className="fa-brands fa-pagelines"></i></div>
                <div className="text">
                  <h5>Natural Organic Product</h5>
                  <p className="m-0">Vivamus vel magna non mi gravida ultr sed ut turpis.</p>
                </div>
              </li>
              <li className="d-flex align-items-center my-4">
                <div className="icon me-3"><i className="fa-solid fa-gift"></i></div>
                <div className="text">
                  <h5>Packaging Design</h5>
                  <p className="m-0">Praesent sit amet fringilla eros. Nunc pulv dui tellus.</p>
                </div>
              </li>
              <li className="d-flex align-items-center">
                <div className="icon me-4"><i className="fa-solid fa-cubes-stacked"></i></div>
                <div className="text">
                  <h5>Best Quality Cocoa</h5>
                  <p className="m-0">Cras in laoreet metus, vitae efficitur libero. Nam sit amet orci.</p>
                </div>
              </li>
            </ul>
           </Col>
        </Row>
        </Container>
        <div className="img bottom-img"><img src="http://crems.like-themes.com/wp-content/uploads/2020/07/grunge-dark-rev-temp.png" alt="" /></div>
      </div>
      <div className="parallax d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h1>Made with love <br /> <span>unique sweets</span> for gourmet</h1>
        </div>
        <div className="square"></div>
      </div>
      <div className="box"></div>
    </div>
  );
};

export default Home;
