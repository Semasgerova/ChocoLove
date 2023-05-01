import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation, Mousewheel, Keyboard} from "swiper";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { LinkContainer } from "react-router-bootstrap";

const Home = () => {
  const [productItem] = useContext(ProductContext)

  return (
    <div className="home">
      <div className="swiper">
        <Swiper
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
            <div className="text text-center d-flex flex-column justify-content-center align-items-center">
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
              <LinkContainer to="/about">
                <Button className="btn d-flex justify-content-center align-items-center">
                   READ MORE <i className="fa-solid fa-arrow-right"></i>
                </Button>
              </LinkContainer>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swp">
            <img
              src="http://crems.like-themes.com/wp-content/uploads/2019/06/slider-overlay-02.jpg"
              alt=""
            />
            <div className="text text-center d-flex flex-column justify-content-center align-items-center">
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
              <LinkContainer to="/about">
                <Button className="btn d-flex justify-content-center align-items-center">
                   READ MORE <i className="fa-solid fa-arrow-right"></i>
                </Button>
              </LinkContainer>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swp">
            <img
              src="http://crems.like-themes.com/wp-content/uploads/2019/06/slider-overlay-03.jpg"
              alt=""
            />
            <div className="text text-center d-flex flex-column justify-content-center align-items-center">
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
              <LinkContainer to="/about">
                <Button className="btn d-flex justify-content-center align-items-center">
                   READ MORE <i className="fa-solid fa-arrow-right"></i>
                </Button>
              </LinkContainer>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swp">
            <img
              src="http://crems.like-themes.com/wp-content/uploads/2019/06/slider-overlay-04.jpg"
              alt=""
            />
            <div className="text text-center d-flex flex-column justify-content-center align-items-center">
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
              <LinkContainer to="/about">
                <Button className="btn d-flex justify-content-center align-items-center">
                   READ MORE <i className="fa-solid fa-arrow-right"></i>
                </Button>
              </LinkContainer>
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
      <div className="store">
      <div className="top-img"><img src="http://crems.like-themes.com/wp-content/uploads/2020/07/grunge-dark-temp.png" alt="" /></div>
        <div className="text text-center py-5">
          <p>ONLINE STORE</p>
          <h1>Discover Sweet Delicious</h1>
        </div>
        <div className="cards">
          <Row className="m-0 g-5">
             {productItem.slice(0,4).map((item:any)=>{
              return <Col sm={12} md={6} lg={3} className="txt text-center">
                <div className="box"> 
                  <div className="square"></div>
                  <div className="img"><img src={item.image} alt="" /></div>
                  <div className="button"><Button className="btn p-0 mt-4">GO TO SHOP <i className="fa-solid fa-arrow-right"></i></Button></div>
                </div>
                <h4>{item.title}</h4>
                <p>{item.price}$</p>

              </Col>
             })}
          </Row>
        </div>
        <div className="button py-5 d-flex justify-content-center align-items-center">
        <Button className="btn p-0 mt-4">ONLINE STORE <i className="fa-solid fa-arrow-right"></i></Button>
        </div>
      </div>
      <div className="video d-flex justify-content-center align-items-center">
        <Container className="container d-flex justify-content-center align-items-center">
        <div className="box d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-center">Watch our video</h1>
          <Button className="btn"><i className="fa-solid fa-play"></i></Button>
         
        </div>
        <div className="square"></div>
        </Container>
      </div>
      <div className="chef">
        <Row className="m-0">
          <Col lg={6} className="img p-0 cocoa">
            <img src="http://crems.like-themes.com/wp-content/uploads/2019/06/sign-bg.jpg" alt="" />
          </Col>
          <Col md={12} lg={6} className="img">
            <img src="http://crems.like-themes.com/wp-content/uploads/2020/07/cocoa-02.png" alt="" />
            <div className="text">
              <p>OUR MISSION</p>
              <h1>“Making chocolates is an art that we have perfected over the years to make our customers happy”</h1>
              <h5>Orlando Detmers</h5>
              <h6>PASTRY CHEF</h6>
            </div>
          </Col>
        </Row>
       <div className="image"> <img src="http://crems.like-themes.com/wp-content/uploads/2020/07/sign-person.png" alt="" /></div>
      </div>
      <div className="testimonials">
        <div className="head text-center py-5">
          <p>TESTIMONIALS</p>
          <h1>What our Buyers Say</h1>
        </div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="box py-5 d-flex flex-column align-items-center">
            <div className="icon text-center"><i className="fa-solid fa-quote-left"></i></div>
            <p>Morbi viverra volutpat ex, id pellentesque felis volutpat eu. Duis et tellus imperdiet, lacinia risus id, tincidunt ipsum. Integer euismod elit vel nibh commodo, at consequat nisl rhoncus. Etiam mattis.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="box py-5 d-flex flex-column align-items-center">
            <div className="icon text-center"><i className="fa-solid fa-quote-left"></i></div>
            <p>Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Morbi viverra volutpat ex, id pellentesque felis volutpat eu..</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="box py-5 d-flex flex-column align-items-center">
            <div className="icon text-center"><i className="fa-solid fa-quote-left"></i></div>
            <p>Maecenas ultricies felis sit amet libero scelerisque, ut eleifend leo mattis. Aliquam porta facilisis metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam id.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="box py-5 d-flex flex-column align-items-center">
            <div className="icon text-center"><i className="fa-solid fa-quote-left"></i></div>
            <p>Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum. Donec placerat, orci.</p>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
};

export default Home;
