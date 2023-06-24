import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { LangContext } from "../context/LangContext";
import logo from "../photos/logo/ChocoLove-logos_whitee.png";

const Footer = () => {
  const [lang,setLang] = useContext(LangContext);
  return (
    <div className="footer">
      <Row className="m-0 g-5">
        <Col sm={12} md={4} className="text">
          <div className="img">
            <img src={logo} alt="" />
          </div>
          {lang==="az"? <p>
          Sevimli şirniyyatlarınızdan bəzilərini hazırlayan şokoladlarımıza baxın.
          </p>: <p>
          See Our Chocolateries Making Some of Your Favorite Confections.
          </p>}
         
          <div className="icons">
            <ul className="p-0">
              <li>
                <i className="fa-brands fa-twitter"></i>
              </li>
              <li>
                <i className="fa-brands fa-facebook-f"></i>
              </li>
              <li>
                <i className="fa-brands fa-instagram"></i>
              </li>
              <li>
                <i className="fa-brands fa-youtube"></i>
              </li>
            </ul>
          </div>
        </Col>
        <Col sm={12} md={4} className="d-md-flex flex-column d-none">
          {lang==="az"?<h1>Araşdırmaq</h1>:<h1>Explore</h1>}
          <ul className="p-0">
            <li className="d-flex align-items-center mt-3">
              <div className="icon me-3">
                <i className="fa-solid fa-phone-volume"></i>
              </div>
              <div className="txt">
                {lang==="az"?<h6>TELEFON:</h6>:<h6>PHONE:</h6>}
                <p className="m-0">+49078-039-23-11</p>
              </div>
            </li>
            <li className="d-flex align-items-center my-3">
              <div className="icon me-3">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="txt">
                {lang==="az"?<h6>YERİMİZ:</h6>:<h6>OUR LOCATION:</h6>}
                <p className="m-0">975 Liberty Ave, Union, NJ 07083, USA</p>
              </div>
            </li>
            <li className="d-flex align-items-center">
              <div className="icon me-3">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="txt">
                <h6>EMAIL:</h6>
                <p className="m-0">crems@like-themes.com</p>
              </div>
            </li>
          </ul>
        </Col>
        <Col sm={12} md={4} className="d-md-flex flex-column d-none">
          {lang==="az"?<h1>Ən Son Mesajlar</h1>:<h1>Latest Posts</h1>}
          <ul className="p-0">
            <li className="d-flex align-items-center mt-3">
              <div className="img me-3">
                <img
                  src="http://crems.like-themes.com/wp-content/uploads/2019/06/blog_01-140x140.jpg"
                  alt=""
                />
              </div>
              {lang==="az"?  <div className="txt">
                <h6>ƏSƏRLƏR YEMƏKLƏRİ</h6>
                <p className="m-0">Şirniyyat sexləri üçün avadanlıqların icarəsi</p>
              </div>:  <div className="txt">
                <h6>CRAFT FOOD</h6>
                <p className="m-0">Rent of Equipment for Pastry Shops</p>
              </div>}
            </li>
            <li className="d-flex align-items-center my-3">
              <div className="img me-3">
                <img
                  src="http://crems.like-themes.com/wp-content/uploads/2019/06/blog_02-140x140.jpg"
                  alt=""
                />
              </div>
              {lang==="az"?  <div className="txt">
                <h6>ƏSƏRLƏR YEMƏKLƏRİ</h6>
                <p className="m-0">Kakao tozunu seçməyin sirləri</p>
              </div>:  <div className="txt">
                <h6>CRAFT FOOD</h6>
                <p className="m-0">Secrets of Choosing Cocoa Powder</p>
              </div>}
            </li>
          </ul>
        </Col>
      </Row>
      <div className="bottom d-flex justify-content-center align-items-center pt-5">
       {lang==="az"? <p className="text-center">
          <span>Bənzər mövzular</span> © Bütün hüquqlar qorunur - 2023 - <span>Alış</span>
        </p>: <p className="text-center">
          <span>Like-themes</span> © All Rights Reserved - 2023 - <span>Purchase</span>
        </p>}
      </div>
    </div>
  );
};

export default Footer;
