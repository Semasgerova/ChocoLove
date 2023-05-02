import { useContext } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { ProductContext } from '../context/ProductContext'

const Shop = () => {
  const [productItem] = useContext(ProductContext)

  return (
    <div className="shop">
      <div className="main d-flex flex-column justify-content-center align-items-center h-100">
        <h1>All Products</h1>
        <p className='py-3'><LinkContainer to='/'><span>Home</span></LinkContainer> // Products</p>
      </div>
      <div className="bottom py-5">
      <img src="http://crems.like-themes.com/wp-content/themes/crems/assets/images/grunge-dark-temp.png" alt="" />
       <Container>
       <Row className='m-0'>
          <Col lg={4}>
            <h1>Product categories</h1>
            <ul className='p-0'>
              <li>Bakery</li>
              <li>Chocolate</li>
              <li>Confecioner</li>
              <li>
                Craft Bakery
                <ul>
                  <li>Belgian Waffles</li>
                  <li>Chocolate</li>
                  <li>Craft Cakes</li>
                  <li>Craft Tea</li>
                  <li>Dark Chocolate</li>
                  <li>Fruit Waffles</li>
                  <li>Ice-Cream</li>
                  <li>Sweet Donuts</li>
                  <li>Sweet Pies</li>
                  <li>Truffles Gifts</li>
                </ul>
              </li>
              <li>Craft Food</li>
              <li>Delicious Sweets</li>
              <li>Deserts</li>
              <li>Ice-Cream</li>
              <li>Pastry</li>
            </ul>
          </Col>
          <Col lg={8} md={12}>
            <Row className='g-5 m-0'>
                {productItem.slice(27,33).map((item:any)=>{
                return  <Col sm={12} md={6} lg={4} className="txt text-center" key={item.id}>
                <div className="box"> 
                  <div className="square"></div>
                  <div className="img"><LinkContainer to={`/shop/${item.id}`}><img src={item.image} alt="" /></LinkContainer></div>
                 
                  <div className="button"><Button className="btn p-0 mt-4">ADD TO CART <i className="fa-solid fa-arrow-right"></i></Button></div>
                  
                </div>
                <h4>{item.title}</h4>
                <p>{item.price}$</p>

              </Col>
                })}
            </Row>
          </Col>
        </Row>
       </Container>
      </div>
    </div>
  )
}

export default Shop