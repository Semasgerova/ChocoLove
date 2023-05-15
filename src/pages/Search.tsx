import { LinkContainer } from "react-router-bootstrap";
import { useContext, useState } from "react";
import { Card, NavLink, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { ProductContext } from "../context/ProductContext";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";

const Search = () => {
    const [products] = useContext(ProductContext);
    const [query,setQuery] = useState();
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
  const handleAddToCart =(item:any)=>{
    addItem(item);
    notify();
 }
  return (
    <div className="search">
      <div className="main d-flex flex-column justify-content-center align-items-center h-100">
        <h1>Search</h1>
        <p className="py-3">
          <LinkContainer to="/">
            <span>Home</span>
          </LinkContainer>{" "}
          // Search
        </p>
      </div>
      <div className="bottom">
        <img src="http://crems.like-themes.com/wp-content/themes/crems/assets/images/grunge-dark-temp.png" alt="" />
        <div className="box d-flex flex-column justify-content-center align-items-center p-5">
      <InputGroup className="mb-3 w-50">
        <Form.Control
          placeholder="Search Our Store"
          aria-label="Search Our Store"
          aria-describedby="basic-addon2"
          onChange={(e:any)=>setQuery(e.target.value)}
        />
        <Button variant="outline-secondary" id="button-addon2">
        <i className="fa-solid fa-magnifying-glass"></i>
        </Button>
      </InputGroup>
      <Row>
                {products.slice(27,33).filter((fd:any)=>(fd.title.toLocaleLowerCase().includes(query))).map((item:any) => (
                   <Col sm={12} md={6} lg={4} key={item.id} id={item.id} className="txt text-center" >
                   <div className="box"> 
                     <div className="square"></div>
                     <div className="img"><LinkContainer to={`/shop/${item.id}`}><img src={item.image} alt="" /></LinkContainer></div>
                    
                     <div className="button"><Button className="btn p-0 mt-4" onClick={handleAddToCart}>ADD TO CART <i className="fa-solid fa-arrow-right"></i></Button>
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
                           /></div>
                     
                   </div>
                   <h4>{item.title}</h4>
                   <p>{item.price}$</p>
   
                 </Col>
                ))}
              </Row>
      </div>
      </div>
    </div>
  );
};

export default Search;
