import { LinkContainer } from 'react-router-bootstrap'
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useWishlist } from 'react-use-wishlist';

const Whislist = () => {
    const {
        isWishlistEmpty,
        totalWishlistItems,
        items,
        removeWishlistItem,
      } = useWishlist();
    
  return (
    <div className="whislist">
        <div className="main d-flex flex-column justify-content-center align-items-center h-100">
        <h1>WhisList</h1>
        <p className='py-3'><LinkContainer to='/shop'><span>Product</span></LinkContainer> // WhisList</p>
      </div>
      <div className="bottom">
      <div className="img"><img src="http://crems.like-themes.com/wp-content/themes/crems/assets/images/grunge-dark-temp.png" alt="" /></div>
            {isWishlistEmpty?(
                <div className="txt d-flex justify-content-center">
                    <h1>Your wishlist is empty</h1>
                </div>
            ):
            (
                <div className="table d-flex flex-column justify-content-center align-items-center p-5 m-0">
              <Table bordered className="tab w-75">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Photo</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item:any, count:number) => (
                    <tr key={item.id} >
                      <td>{count + 1}</td>
                      <td>
                        <img src={item.image} width={70} />
                      </td>
                      <td>{item.title}</td>
                      <td>{item.price}$</td>
                      <td>
                        <Button
                          variant="danger"
                          className="btn"
                          onClick={() => removeWishlistItem(item.id)}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </Button>
                      </td>
                    </tr>
)
)}
                </tbody>
              </Table>
              <h1>Wishlist ({totalWishlistItems})</h1>
            </div>
            )
            
            }
        
      </div>
    </div>
  )
}

export default Whislist