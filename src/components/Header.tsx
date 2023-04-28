import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../photos/logo/ChocoLove-logos_whitee.png"


const Header = () => {
  return (
    <div className="header">
    <Navbar key="lg" expand="lg" className="py-3 navbar" fixed="top">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="brand">
           <img src={logo} alt="" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              ChocoLove
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="canvas">
            <Nav className="mx-auto">
              <LinkContainer to="/">
                <Nav.Link className="link">
                  Home <span>+</span>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link className="link">
                  About us <span>+</span>
                </Nav.Link>
              </LinkContainer>
             
             <LinkContainer to='/shop'>
             <Nav.Link className="link">
                Products <span>+</span>
              </Nav.Link>
             </LinkContainer>
              <LinkContainer to='/blog'>
              <Nav.Link className="link">
                Blog <span>+</span>
              </Nav.Link>
              </LinkContainer>
              <LinkContainer to='contact'>
              <Nav.Link className="link">
                Contact <span>+</span>
              </Nav.Link>
              </LinkContainer>
            </Nav>
            <div className="icons">
                <div className="d-flex justify-content-end">
                <div className="icon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              
              <LinkContainer to='/account'>
              <div className="icon px-4">
                <i className="fa-regular fa-user"></i>
              </div>
              </LinkContainer>
              <LinkContainer to='/cart'>
              <div className="icon">
                <i className="fa-solid fa-bag-shopping"></i>
              </div>
              </LinkContainer>
                </div>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  </div>
  )
}

export default Header