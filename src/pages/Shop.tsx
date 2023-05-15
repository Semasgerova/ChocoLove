import { useContext, useState} from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { ProductContext } from '../context/ProductContext'
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
import { useWishlist } from 'react-use-wishlist';

const Shop = () => {
  const [productItem] = useContext(ProductContext)

  const notify = () =>
    toast.success("Added products", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const { addItem } = useCart();
  const { addWishlistItem } = useWishlist();

  const [data,setData] = useState(productItem);
  const filterCategory = (catItem:any)=>{
      const result = productItem.filter((item:any)=>{
        return item.category === catItem;
      })
      setData(result)
  }
  

  return (
    <div className="shop">
      <div className="main d-flex flex-column justify-content-center align-items-center h-100">
        <h1>All Products</h1>
        <p className='py-3'><LinkContainer to='/'><span>Home</span></LinkContainer> // Products</p>
      </div>
      <div className="bottom py-5">
      <div className="top-img"><img src="http://crems.like-themes.com/wp-content/themes/crems/assets/images/grunge-dark-temp.png" alt="" /></div>
       <Container>
       <Row className='m-0'>
          <Col lg={4} className="d-lg-flex d-none">
           <div  className='category'>
           <h1>Product categories</h1>
            <ul className='p-0 d-flex flex-column'>
              <Button onClick={() => {
                          filterCategory("Bakery");
                        }}>Bakery</Button>
              <Button onClick={() => {
                          filterCategory("Chocolate");
                        }}>Chocolate</Button>
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
           </div>
          </Col>
          <Col lg={8} md={12} className="cards">
            <Container>
            <Row className=' m-0'>
                {data.map((item:any)=>(
                   <Col sm={12} md={6} lg={4} key={item.id} className="txt text-center" >
                   <div className="box"> 
                     <div className="square"></div>
                     <div className="img"><LinkContainer to={`/shop/${item.id}`}><img src={item.image} alt="" /></LinkContainer></div>
                     <div className="button">
                      <Button className="btn p-0 mt-4" onClick={()=>{addItem(item);notify()}}>ADD TO CART <i className="fa-solid fa-arrow-right"></i></Button>
                              <ToastContainer
                             position="bottom-right"
                             autoClose={5000}
                             hideProgressBar={false}
                             newestOnTop={false}
                             closeOnClick
                             rtl={false}
                             pauseOnFocusLoss
                             draggable
                             pauseOnHover
                             theme="dark"
                           />
                           
                        </div>
                        <div className="whisList"><Button className='btn' onClick={() => addWishlistItem(item)}><i className="fa-regular fa-heart"></i></Button></div>             
                   </div>
                   <h4>{item.title}</h4>
                   <p>{item.price}$</p>
   
                 </Col>
                ))}
            </Row>
            </Container>
          </Col>
        </Row>
       </Container>
      </div>
    </div>
  )
}

export default Shop