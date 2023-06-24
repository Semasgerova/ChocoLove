import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { LinkContainer } from "react-router-bootstrap";
import { ThemeContext } from "../context/ThemeContext";
import UserButton from "./UserButton";
import { LangContext } from "../context/LangContext";
import Dropdown from "react-bootstrap/Dropdown";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import AdminButton from "./AdminButton";

const Header = () => {
  const [mode, setMode] = useContext(ThemeContext);
  const [lang, setLang] = useContext(LangContext);
  const { totalItems } = useCart();
  const { totalWishlistItems } = useWishlist();
  useEffect(() => {
    if (localStorage.getItem("mode") === null) {
      localStorage.setItem("mode", "dark");
    }
    if (localStorage.getItem("lang") === null) {
      localStorage.setItem("lang", "en");
    }
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
    top: 0,
    behavior: "smooth"
    });
    };


  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 120) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div className="header">
      <Navbar
        key="lg"
        expand="lg"
        fixed="top"
        className={colorChange ? "navbar colorChange py-3" : "navbar py-3"}
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="brand">
              <img src="https://github.com/Semasgerova/images/blob/main/ChocoLove-logos_whitee%20.png?raw=true" alt="" />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
            className="offcanvas"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                ChocoLove
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="canvas">
              <Nav className="mx-auto">
                <LinkContainer to="/">
                  <Nav.Link className="link" onClick={scrollToTop}>
                    {lang === "az" ? "Ana Səhifə" : "Home"}
                    <span>+</span>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                  <Nav.Link className="link" onClick={scrollToTop}>
                    {lang === "az" ? "Haqqımızda" : "About us"}
                    <span>+</span>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/shop">
                  <Nav.Link className="link" onClick={scrollToTop}>
                    {lang === "az" ? "Məhsullar" : "Products"}
                    <span>+</span>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/blog">
                  <Nav.Link className="link" onClick={scrollToTop}>
                    {lang === "az" ? "Bloq" : "Blog"}
                    <span>+</span>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="contact">
                  <Nav.Link className="link" onClick={scrollToTop}>
                    {lang === "az" ? "Əlaqə" : "Contact"}
                    <span>+</span>
                  </Nav.Link>
                </LinkContainer>
              </Nav>
              <div className="icons">
                <div className="d-flex justify-content-between align-items-center">
                  <LinkContainer to="/cart">
                    <div className="icon py-1" onClick={scrollToTop}>
                      <i className="fa-solid fa-bag-shopping"></i>({totalItems})
                    </div>
                  </LinkContainer>
                  <LinkContainer to="/whislist">
                    <div className="icon py-1" onClick={scrollToTop}>
                      <i className="fa-regular fa-heart"></i>({totalWishlistItems})
                    </div>
                  </LinkContainer>
                  <LinkContainer to="/search">
                    <div className="icon py-1" onClick={scrollToTop}>
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                  </LinkContainer>
                 
                  <div className="icon">
                    <UserButton />
                  </div>
                  <Dropdown className="d-lg-flex d-none">
                    <Dropdown.Toggle id="dropdown-basic">
                      <i className="fa-solid fa-bars-staggered"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <Button
                          className="btn"
                          onClick={() => {
                            mode === "light"
                              ? setMode("dark")
                              : setMode("light");
                            mode === "light"
                              ? localStorage.setItem("mode", "dark")
                              : localStorage.setItem("mode", "light");
                          }}
                        >
                          {mode === "light" ? (
                            <i className="fa-regular fa-moon"></i>
                          ) : (
                            <i className="fa-regular fa-sun"></i>
                          )}
                        </Button>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Button
                          className="btn"
                          onClick={() => {
                            lang === "az" ? setLang("en") : setLang("az");
                            lang === "az"
                              ? localStorage.setItem("lang", "en")
                              : localStorage.setItem("lang", "az");
                          }}
                        >
                          {lang === "az" ? "EN" : "AZ"}
                        </Button>
                      </Dropdown.Item>
                          <AdminButton/>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Button
                          className="btn d-lg-none d-flex px-0"
                          onClick={() => {
                            mode === "light"
                              ? setMode("dark")
                              : setMode("light");
                            mode === "light"
                              ? localStorage.setItem("mode", "dark")
                              : localStorage.setItem("mode", "light");
                          }}
                        >
                          {mode === "light" ? (
                            <i className="fa-regular fa-moon"></i>
                          ) : (
                            <i className="fa-regular fa-sun"></i>
                          )}
                        </Button>
                        <Button
                          className="btn d-lg-none d-flex px-0"
                          onClick={() => {
                            lang === "az" ? setLang("en") : setLang("az");
                            lang === "az"
                              ? localStorage.setItem("lang", "en")
                              : localStorage.setItem("lang", "az");
                          }}
                        >
                          {lang === "az" ? "EN" : "AZ"}
                        </Button>
                </div>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
