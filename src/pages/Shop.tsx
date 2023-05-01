import { useContext } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
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
        <Row className='m-0'>
          <Col lg={4}></Col>
          <Col lg={8} md={12}>
            <Row>
                {productItem.slice(4,23).map((item:any)=>{
                  
                return  <Col sm={12} md={6} lg={4} className="txt text-center">
                <div className="box"> 
                  <div className="square"></div>
                  <div className="img"><LinkContainer to={`/shop/${item.id}`}><img src={item.image} alt="" /></LinkContainer></div>
                  <LinkContainer to='/shop'>
                  <div className="button"><Button className="btn p-0 mt-4">GO TO SHOP <i className="fa-solid fa-arrow-right"></i></Button></div>
                  </LinkContainer>
                </div>
                <h4>{item.title}</h4>
                <p>{item.price}$</p>

              </Col>
                })}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Shop