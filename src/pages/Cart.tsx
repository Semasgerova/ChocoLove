import { LinkContainer } from 'react-router-bootstrap'
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useCart } from "react-use-cart";



const Cart = () => {
  const { items, updateItemQuantity, isEmpty, removeItem, cartTotal } = useCart();
  return (
    <div className='cart'>
       <div className="main d-flex flex-column justify-content-center align-items-center h-100">
        <h1>Cart</h1>
        <p className='py-3'><LinkContainer to='/shop'><span>Product</span></LinkContainer> // Cart</p>
      </div>
      <div className="carts">
      <img src="http://crems.like-themes.com/wp-content/themes/crems/assets/images/grunge-dark-temp.png" alt="" />
      {isEmpty ? (
         <div className="txt d-flex justify-content-center">
         <h1>Your cart is currently empty.</h1>
       </div>
        ) : (
            <div className="table d-flex flex-column justify-content-center align-items-center p-5 m-0">
              <Table bordered className="tab w-75">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Photo</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, count) => (
                    <tr key={item.id} >
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
                          className="btn"
                          onClick={() => removeItem(item.id)}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <h4>Total Price: {cartTotal}$</h4>
            </div>
        )}
      </div>
    </div>
  )
}

export default Cart