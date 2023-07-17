import { LinkContainer } from "react-router-bootstrap";
import { useContext, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { ProductContext } from "../context/ProductContext";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
import { LangContext } from "../context/LangContext";
import { useWishlist } from "react-use-wishlist";

const Search = () => {
  const [products] = useContext(ProductContext);
  const [query, setQuery] = useState();

  const { addWishlistItem } = useWishlist();

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

  const [lang] = useContext(LangContext);

  return (
    <div className="search">
      <div className="main d-flex flex-column justify-content-center align-items-center h-100">
        <h1>{lang==="az"?"Axtarış":"Search"}</h1>
        {lang==="az"?
         <p className="py-3">
         <LinkContainer to="/">
           <span>Ana Səhifə</span>
         </LinkContainer>
         // Axtarış
       </p>
        :
         <p className="py-3">
         <LinkContainer to="/">
           <span>Home</span>
         </LinkContainer>
         // Search
       </p>
        }
      </div>
      <div className="bottom">
        <div className="top-img">
          <img
            src="https://raw.githubusercontent.com/Semasgerova/images/main/grunge-dark-temp.png"
            alt=""
          />
        </div>
        <div className="src d-flex flex-column justify-content-center align-items-center p-5">
          <InputGroup className="mb-3 input">
            <Form.Control
              placeholder="Search Our Store"
              aria-label="Search Our Store"
              aria-describedby="basic-addon2"
              onChange={(e: any) => setQuery(e.target.value)}
            />
            <Button variant="outline-secondary" id="button-addon2">
              <i className="fa-solid fa-magnifying-glass"></i>
            </Button>
          </InputGroup>
          {lang==="az"?
           <Row classname="g-5">
           {products.productsAz
             ?.filter((fd: any) =>
               fd.title.toLocaleLowerCase().includes(query)
             )
             .map((item: any) => (
               <Col
                 col={12}
                 sm={12}
                 md={6}
                 lg={4}
                 key={item.id}
                 id={item.id}
                 className="txt text-center d-flex flex-column justify-content-center align-items-center"
               >
                 <div className="box w-75">
                   <div className="square"></div>
                   <div className="img ">
                     <LinkContainer to={`/shop/${item.id}`}>
                       <img src={item.image} alt="" />
                     </LinkContainer>
                   </div>

                   <div className="button">
                     <Button
                       className="btn p-0 mt-4"
                       onClick={() => {
                         addItem(item);
                         notify();
                       }}
                     >
                       SƏBƏTƏ ƏLAVƏ ET <i className="fa-solid fa-arrow-right"></i>
                     </Button>
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
                   <div className="whisList">
            <Button className="btn" onClick={() => addWishlistItem(item)}>
              <i className="fa-regular fa-heart"></i>
            </Button>
          </div>
                 </div>
                 <h4>{item.title}</h4>
                 <p>{item.price}$</p>
               </Col>
             ))}
         </Row>
          :
          <Row classname="g-5">
          {products.products
            ?.filter((fd: any) =>
              fd.title.toLocaleLowerCase().includes(query)
            )
            .map((item: any) => (
              <Col
                col={12}
                sm={12}
                md={6}
                lg={4}
                key={item.id}
                id={item.id}
                className="txt text-center d-flex flex-column justify-content-center align-items-center"
              >
                <div className="box w-75">
                  <div className="square"></div>
                  <div className="img ">
                    <LinkContainer to={`/shop/${item.id}`}>
                      <img src={item.image} alt="" />
                    </LinkContainer>
                  </div>

                  <div className="button">
                    <Button
                      className="btn p-0 mt-4"
                      onClick={() => {
                        addItem(item);
                        notify();
                      }}
                    >
                      ADD TO CART <i className="fa-solid fa-arrow-right"></i>
                    </Button>
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
                  <div className="whisList">
            <Button className="btn" onClick={() => addWishlistItem(item)}>
              <i className="fa-regular fa-heart"></i>
            </Button>
          </div>
                </div>
                <h4>{item.title}</h4>
                <p>{item.price}$</p>
              </Col>
            ))}
        </Row>
          }
         
        </div>
      </div>
    </div>
  );
};

export default Search;
