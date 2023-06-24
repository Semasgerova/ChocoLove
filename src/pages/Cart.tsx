import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";
import { LangContext } from "../context/LangContext";
import Modal from "react-bootstrap/Modal";

const Cart = () => {
  const { items, updateItemQuantity, isEmpty, removeItem, cartTotal } =
    useCart();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleShow = () => {
    if (localStorage.getItem("MyUser") !== null) {
      setShow(true);
    } else {
      navigate("/login");
    }
  };

  const handleClose = () => {
    localStorage.removeItem("react-use-cart");
    window.location.reload();
    setShow(false);
  };

  const [lang] = useContext(LangContext);
  return (
    <div className="cart">
      <div className="main d-flex flex-column justify-content-center align-items-center h-100">
        <h1>{lang === "az" ? "Səbət" : "Cart"}</h1>
        {lang === "az" ? (
          <p className="py-3">
            <LinkContainer to="/shop">
              <span>Məhsul</span>
            </LinkContainer>
            // Səbət
          </p>
        ) : (
          <p className="py-3">
            <LinkContainer to="/shop">
              <span>Product</span>
            </LinkContainer>
            // Cart
          </p>
        )}
      </div>
      <div className="carts">
        <div className="top-img">
          <img
            src="http://crems.like-themes.com/wp-content/themes/crems/assets/images/grunge-dark-temp.png"
            alt=""
          />
        </div>
        {isEmpty ? (
          <div className="txt d-flex justify-content-center">
            <h1 className="text-center">
              {lang === "az"
                ? "Səbətiniz hazırda boşdur."
                : "Your cart is currently empty."}
            </h1>
          </div>
        ) : (
          <div className="table  d-flex flex-column justify-content-center align-items-center p-5 m-0">
            <Table bordered className="tab">
              <thead>
                {lang === "az" ? (
                  <tr>
                    <th>#</th>
                    <th>Şəkil</th>
                    <th>Başlıq</th>
                    <th>Qiymət</th>
                    <th>Kəmiyyət</th>
                    <th>Sil</th>
                  </tr>
                ) : (
                  <tr>
                    <th>#</th>
                    <th>Photo</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                  </tr>
                )}
              </thead>
              <tbody className="scroll-inner">
                {items.map((item, count) => (
                  <tr key={item.id}>
                    <td>{count + 1}</td>
                    <td>
                      <img src={item.image} width={70} />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price * item.quantity!}$</td>
                    <td>
                      <Button
                        variant="warning"
                        className="btn"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity! - 1)
                        }
                      >
                        -
                      </Button>
                      <span className="mx-2">{item.quantity}</span>
                      <Button
                        variant="warning"
                        className="btn"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity! + 1)
                        }
                      >
                        +
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        className="btn removeBtn"
                        onClick={() => removeItem(item.id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <h4>
              {lang === "az" ? "Ümumi qiymət:" : "Total Price:"} {cartTotal.toFixed()}$
            </h4>
            <Button onClick={handleShow} className="button mt-3">
              {lang === "az" ? "Satın Al" : "Buy"}
            </Button>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
              
            >
            <Modal.Body style={{'color':'black'}} className='text-center'>Shopping successfully completed!</Modal.Body>
              <Modal.Footer>
                <Button variant="dark" onClick={handleClose}>
                  <i className="fa-solid fa-check"></i>
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
