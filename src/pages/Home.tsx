import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation, Mousewheel, Keyboard } from "swiper";
import { Button, Col, Container, Modal, ModalBody, Row } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { LinkContainer } from "react-router-bootstrap";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import { LangContext } from "../context/LangContext";

const Home = () => {
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
              src="https://raw.githubusercontent.com/Semasgerova/images/main/slider-overlay-01.jpg"
              alt=""
            />
            <div className="text text-center d-flex flex-column justify-content-center align-items-center">
              <div className="txt">
                {lang === "az" ? (
                  <>
                    <h1>
                      Müəllifin Dadlı Şirniyyatları <br />
                      <span>və Şokoladları</span>
                    </h1>
                    <p>
                      Həqiqətən unikal şirniyyatlar yaradan ənənəvi əl ilə
                      daldırma üsulları.
                      <br />
                      Biz əl istehsalı şokoladlar, truffle, karamellər və s.
                    </p>
                  </>
                ) : (
                  <>
                    <h1>
                      Author's Delicious Sweets <br />
                      <span>and Chocolate</span>
                      <p>
                        Traditional hand-dipping techniques that create truly
                        unique confections.
                        <br />
                        We offer handmade chocolates, truffles, caramels and
                        more.
                      </p>
                    </h1>
                  </>
                )}
              </div>
              <LinkContainer to="/about">
                <Button className="btn d-flex justify-content-center align-items-center">
                  {lang==="az"?"DAHA ÇOX OXU":"READ MORE"}<i className="fa-solid fa-arrow-right"></i>
                </Button>
              </LinkContainer>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swp">
            <img
              src="https://raw.githubusercontent.com/Semasgerova/images/main/slider-overlay-02.jpg"
              alt=""
            />
            <div className="text text-center d-flex flex-column justify-content-center align-items-center">
              <div className="txt">
              {lang === "az" ? (
                  <>
                    <h1>
                      Müəllifin Dadlı Şirniyyatları <br />
                      <span>və Şokoladları</span>
                    </h1>
                    <p>
                      Həqiqətən unikal şirniyyatlar yaradan ənənəvi əl ilə
                      daldırma üsulları.
                      <br />
                      Biz əl istehsalı şokoladlar, truffle, karamellər və s.
                    </p>
                  </>
                ) : (
                  <>
                    <h1>
                      Author's Delicious Sweets <br />
                      <span>and Chocolate</span>
                      <p>
                        Traditional hand-dipping techniques that create truly
                        unique confections.
                        <br />
                        We offer handmade chocolates, truffles, caramels and
                        more.
                      </p>
                    </h1>
                  </>
                )}
              </div>
              <LinkContainer to="/about">
                <Button className="btn d-flex justify-content-center align-items-center">
                {lang==="az"?"DAHA ÇOX OXU":"READ MORE"}<i className="fa-solid fa-arrow-right"></i>
                </Button>
              </LinkContainer>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swp">
            <img
              src="https://raw.githubusercontent.com/Semasgerova/images/main/slider-overlay-03.jpg"
              alt=""
            />
            <div className="text text-center d-flex flex-column justify-content-center align-items-center">
              <div className="txt">
              {lang === "az" ? (
                  <>
                    <h1>
                      Müəllifin Dadlı Şirniyyatları <br />
                      <span>və Şokoladları</span>
                    </h1>
                    <p>
                      Həqiqətən unikal şirniyyatlar yaradan ənənəvi əl ilə
                      daldırma üsulları.
                      <br />
                      Biz əl istehsalı şokoladlar, truffle, karamellər və s.
                    </p>
                  </>
                ) : (
                  <>
                    <h1>
                      Author's Delicious Sweets <br />
                      <span>and Chocolate</span>
                      <p>
                        Traditional hand-dipping techniques that create truly
                        unique confections.
                        <br />
                        We offer handmade chocolates, truffles, caramels and
                        more.
                      </p>
                    </h1>
                  </>
                )}
              </div>
              <LinkContainer to="/about">
                <Button className="btn d-flex justify-content-center align-items-center">
                {lang==="az"?"DAHA ÇOX OXU":"READ MORE"}<i className="fa-solid fa-arrow-right"></i>
                </Button>
              </LinkContainer>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swp">
            <img
              src="https://raw.githubusercontent.com/Semasgerova/images/main/slider-overlay-04.jpg"
              alt=""
            />
            <div className="text text-center d-flex flex-column justify-content-center align-items-center">
              <div className="txt">
              {lang === "az" ? (
                  <>
                    <h1>
                      Müəllifin Dadlı Şirniyyatları <br />
                      <span>və Şokoladları</span>
                    </h1>
                    <p>
                      Həqiqətən unikal şirniyyatlar yaradan ənənəvi əl ilə
                      daldırma üsulları.
                      <br />
                      Biz əl istehsalı şokoladlar, truffle, karamellər və s.
                    </p>
                  </>
                ) : (
                  <>
                    <h1>
                      Author's Delicious Sweets <br />
                      <span>and Chocolate</span>
                      <p>
                        Traditional hand-dipping techniques that create truly
                        unique confections.
                        <br />
                        We offer handmade chocolates, truffles, caramels and
                        more.
                      </p>
                    </h1>
                  </>
                )}
              </div>
              <LinkContainer to="/about">
                <Button className="btn d-flex justify-content-center align-items-center">
                {lang==="az"?"DAHA ÇOX OXU":"READ MORE"}<i className="fa-solid fa-arrow-right"></i>
                </Button>
              </LinkContainer>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="aboutSec">
        <div className="img top-img">
          <img
            src="https://raw.githubusercontent.com/Semasgerova/images/main/grunge-dark-temp.png"
            alt=""
          />
        </div>
        <Container className="py-5">
          <Row className="m-0 justify-content-between g-5">
            <Col md={4} sm={12} data-aos="zoom-in-down">
              {lang==="az"?
              <>
                 <h3>Bizim şirniyyat sevənlər üçün dadlı <span>unikal şirniyyatlar</span> istehsal edir</h3>
                 <h5>
                   <i className="fa-regular fa-file-lines"></i> Yükləmə qiyməti
                 </h5>
                 <LinkContainer to="/about">
                <Button className="btn p-0 mt-4">
                  DAHA ÇOX OXU <i className="fa-solid fa-arrow-right"></i>
                </Button>
              </LinkContainer>
              </>:
              <>
               <h3>
                Our patisserie produces <span>unique sweets</span> for lovers of
                yummy
              </h3>
              <p>
                Curabitur tortor ante, vestibulum vel lacus id, semper malesuada
                sem. Sed sit amet tortor augue. Integer magna neque
              </p>
              <h5>
                <i className="fa-regular fa-file-lines"></i> Download Price
              </h5>
              <LinkContainer to="/about">
                <Button className="btn p-0 mt-4">
                  READ MORE <i className="fa-solid fa-arrow-right"></i>
                </Button>
              </LinkContainer>
              </>
              }
            </Col>
            <Col md={4} sm={12} data-aos="zoom-in-down">
              <ul className="p-0">
                <li className="d-flex align-items-center">
                  <div className="icon me-4">
                    <i className="fa-brands fa-pagelines"></i>
                  </div>
                  <div className="text">
                    {lang==="az"?
                    <>
                    <h5>Təbii Üzvi Məhsul</h5>
                    <p className="m-0">
                       Canlı və ya güclü bir şəkildə heç bir çəkisi yoxdur.
                    </p>
                    </>
                    :
                    <>
                       <h5>Natural Organic Product</h5>
                    <p className="m-0">
                      Vivamus vel magna non mi gravida ultr sed ut turpis.
                    </p>
                    </>
                    }
                    
                   
                  </div>
                </li>
                <li className="d-flex align-items-center my-4">
                  <div className="icon me-3">
                    <i className="fa-solid fa-gift"></i>
                  </div>
                  <div className="text">
                  {lang==="az"?
                    <>
                    <h5>Qablaşdırma Dizaynı</h5>
                    <p className="m-0">
                    Bu, çox vacib ekoloji bir şeydir.
                    </p>
                    </>
                    :
                    <>
                       <h5>Packaging Design</h5>
                    <p className="m-0">
                      Praesent sit amet fringilla eros. Nunc pulv dui tellus.
                    </p>
                    </>
                    }
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="icon me-4">
                    <i className="fa-solid fa-cubes-stacked"></i>
                  </div>
                  <div className="text">
                  {lang==="az"?
                    <>
                    <h5>Ən keyfiyyətli kakao</h5>
                    <p className="m-0">
                    Sabah laoreet qorxusunda həyat azad olur.
                    </p>
                    </>
                    :
                    <>
                    <h5>Best Quality Cocoa</h5>
                    <p className="m-0">
                      Cras in laoreet metus, vitae efficitur libero. Nam sit
                      amet orci.
                    </p>
                    </>
                    }
                   
                  </div>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className="img bottom-img">
          <img
            src="https://raw.githubusercontent.com/Semasgerova/images/main/grunge-dark-rev-temp.png"
            alt=""
          />
        </div>
      </div>
      <div className="parallax d-flex justify-content-center align-items-center">
        <div className="text-center" data-aos="zoom-in-down">
          {lang==="az"?
          <h1>Qurman üçün <span>unikal şirniyyatlar</span> <br /> sevgi ilə hazırlanmışdır</h1>
          :
           <h1>
           Made with love <br /> <span>unique sweets</span> for gourmet
         </h1>
          }
         
        </div>
        <div className="square"></div>
      </div>
      <div className="store">
        <div className="top-img">
          <img
            src="http://crems.like-themes.com/wp-content/uploads/2020/07/grunge-dark-temp.png"
            alt=""
          />
        </div>
        <div className="text text-center pt-5" data-aos="fade-up">
          {lang==="az"?
             <>
               <p>ONLİNE MAĞAZA</p>
             <h1>Sweet Delicious-u kəşf edin</h1>
             </>
          :
          <>
               <p>ONLINE STORE</p>
             <h1>Discover Sweet Delicious</h1>
             </>
          }
         
        </div>
        <div className="cards py-5">
          <Container>
            <Row className="m-0 g-5 d-lg-flex d-none">
              {lang === "az"
                ? productItem.homeShopAz?.map((item: any) => {
                    return (
                      <Col
                        sm={12}
                        md={6}
                        lg={3}
                        className="boxes text-center"
                        key={item.id}
                      >
                        <div className="box">
                          <div className="square"></div>
                          <div className="img">
                            <img src={item.image} alt="" />
                          </div>
                          <LinkContainer to="/shop">
                            <div className="button">
                              <Button className="btn p-0 mt-4" onClick={scrollToTop}>
                                MAĞAZAYA KEÇİN
                                <i className="fa-solid fa-arrow-right"></i>
                              </Button>
                            </div>
                          </LinkContainer>
                        </div>
                        <h4>{item.title}</h4>
                        <p>{item.price}$</p>
                      </Col>
                    );
                  })
                : productItem.homeShop?.map((item: any) => {
                    return (
                      <Col
                        sm={12}
                        md={6}
                        lg={3}
                        className="boxes text-center"
                        key={item.id}
                      >
                        <div className="box">
                          <div className="square"></div>
                          <div className="img">
                            <img src={item.image} alt="" />
                          </div>
                          <LinkContainer to="/shop">
                            <div className="button">
                              <Button className="btn p-0 mt-4" onClick={scrollToTop}>
                                GO TO SHOP
                                <i className="fa-solid fa-arrow-right"></i>
                              </Button>
                            </div>
                          </LinkContainer>
                        </div>
                        <h4>{item.title}</h4>
                        <p>{item.price}$</p>
                      </Col>
                    );
                  })}
            </Row>
            <Swiper className="mySwiper d-lg-none">
              {productItem.homeShop?.map((item: any) => {
                return (
                  <SwiperSlide key={item.id}>
                    <div className="box">
                      <div className="square"></div>
                      <div className="img">
                        <img src={item.image} alt="" />
                      </div>
                      <LinkContainer to="/shop">
                        <div className="button">
                          <Button className="btn p-0 mt-4" onClick={scrollToTop}>
                            GO TO SHOP
                            <i className="fa-solid fa-arrow-right"></i>
                          </Button>
                        </div>
                      </LinkContainer>
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.price}$</p>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Container>
        </div>
        <LinkContainer to="/shop">
          <div className="button d-flex justify-content-center align-items-center">
            <Button className="btn p-0 mt-4" onClick={scrollToTop}>
              {lang==="az"?"ONLİNE MAĞAZA":"ONLINE STORE"}<i className="fa-solid fa-arrow-right"></i>
            </Button>
          </div>
        </LinkContainer>
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
      <div className="countUp pb-5">
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
      <div className="chef">
        <Row className="m-0">
          <Col lg={6} className="img p-0 cocoa">
            <img
              src="https://raw.githubusercontent.com/Semasgerova/images/main/sign-bg.jpg"
              alt=""
            />
          </Col>
          <Col md={12} lg={6} className="img p-0">
            <img
              src="https://raw.githubusercontent.com/Semasgerova/images/main/cocoa-02.png"
              alt=""
            />
            {lang==="az"?
            <div className="text">
              <p>BİZİM MİSSİYAMIZ</p>
              <h1>
              “Şokolad hazırlamaq bizim müştərilərimizi xoşbəxt etmək üçün illər ərzində təkmilləşdirdiyimiz bir sənətdir”
              </h1>
              <h5>Orlando Detmers</h5>
              <h6>Şef</h6>
            </div>
            :
            <div className="text">
            <p>OUR MISSION</p>
            <h1>
              “Making chocolates is an art that we have perfected over the
              years to make our customers happy”
            </h1>
            <h5>Orlando Detmers</h5>
            <h6>PASTRY CHEF</h6>
          </div>
            }
            
          </Col>
        </Row>
        <div className="image" data-aos="fade-right">
          <img
            src="https://raw.githubusercontent.com/Semasgerova/images/main/sign-person.png"
            alt=""
          />
        </div>
      </div>
      <div className="gallery d-flex flex-column justify-content-center align-items-center py-5">
        {lang==="az"?
          <div className="head text-center" data-aos="fade-up">
          <p>QALEREYA</p>
          <h1>
          “Bizim xəmir aşpazlarımız şirniyyatları yalnız <br /> yaradıcılıq və sevgi ilə hazırlayırlar”
          </h1>
        </div>
        :
        <div className="head text-center" data-aos="fade-up">
        <p>GALLERY</p>
        <h1>
          “Our pastry chefs create sweets only <br /> with creativity and
          love”
        </h1>
      </div>
        }
      
        <div className="boxes py-5" >
          <Container>
            <Row className="g-5 m-0">
              {productItem.homeGallery?.map((item: any) => {
                return (
                  <Col sm={12} md={6} lg={3} key={item.id}>
                    <div className="box">
                      <div className="img">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="square"></div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
        <LinkContainer to="/about">
          <Button className="btn d-flex justify-content-center align-items-center">
            {lang==="az"?"DAHA ÇOX OXU":"READ MORE"}<i className="fa-solid fa-arrow-right"></i>
          </Button>
        </LinkContainer>
      </div>
      <div className="testimonials py-5">
        {lang==="az"? <div className="head text-center py-5" data-aos="fade-up">
          <p>RƏYLƏR</p>
          <h1>Alıcılarımızın Dedikləri</h1>
        </div>: <div className="head text-center py-5" data-aos="fade-up">
          <p>TESTIMONIALS</p>
          <h1>What our Buyers Say</h1>
        </div>}
       
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
              <div className="icon text-center">
                <i className="fa-solid fa-quote-left"></i>
              </div>
              {lang==="az"
              ?
              <p>
             “Onlar göyün kiçik parçaları kimidirlər! Kremli Cubze ya hamar südlü şokolad və ya tünd şokoladla örtülmüşdür. Hər birində xoşbəxtlik haqqında şirin bir ifadə var. Bu şokoladı yeyərkən gülümsəməməyə cəsarət edirəm. Bu mümkün deyil!"
              </p>
              :
              <p>
              “They are like little pieces of heaven! The creamy Cubze are covered with either smooth milk chocolate or dark chocolate. Each one contains a sweet little statement about happiness. While eating this chocolate I dare you to not smile. It’s impossible!”
              </p>
              }
              
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box py-5 d-flex flex-column align-items-center">
              <div className="icon text-center">
                <i className="fa-solid fa-quote-left"></i>
              </div>
              {lang==="az"
              ?
              <p>
             “Mən sizin şokoladlarınızdakı “xoşbəxtlik”ləri sevirəm. Onlarla çox əyləndim və hər biri ilə günüm yaxşılaşdı. Mən həmişə yeni şokolad yerləri axtarışındayam və sizin yerinizdə dayandığım üçün çox xoşbəxtəm”.
              </p>
              :
              <p>
               “I love the ‘happy’ fortunes in your chocolates. I had a lot of fun with them and my day was improved with each one. I am always on the lookout for new chocolate places and I am very happy I stopped in to your place.”      
              </p>
              }
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box py-5 d-flex flex-column align-items-center">
              <div className="icon text-center">
                <i className="fa-solid fa-quote-left"></i>
              </div>
              {lang==="az"
              ?
              <p>
            “Mən bu mağazanı SEVİRƏM! ... Bu, Cubze'nin doğulduğu yerdir! D.e.l.i.c.i.o.u.s. Əl ilə bükülmüş və xoşbəxtlik haqqında ruhlandırıcı mesajı ehtiva edən kub şəklində truffle porsiyonları! Əgər Çin peçenye taleyini bilmək üçün səbirsizliklə gözləyirsinizsə, bu, çox daha yaxşıdır.
              </p>
              :
              <p>
              “I LOVE this store! … This the birthplace of Cubze! D.e.l.i.c.i.o.u.s. cubed servings of truffle that are hand wrapped and include an inspirational message about happiness! If you look forward to knowing your Chinese cookie fortune, this is so much better.”
              </p>
              }
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box py-5 d-flex flex-column align-items-center">
              <div className="icon text-center">
                <i className="fa-solid fa-quote-left"></i>
              </div>
              {lang==="az"
              ?
              <p>
           “Mən Xoşbəxt Şokoladçını sevirəm – hər dəfə ərazidə olanda nəvəmi ora aparıram. Onlarda ən yaxşı şokolad var və Cubze əladır.
              </p>
              :
              <p>
              “I love the Happy Chocolatier – I take my Grandson there every time I am in the area. They have the best chocolate and the Cubze are great.”
              </p>
              }
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
