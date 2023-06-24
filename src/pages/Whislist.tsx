import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useWishlist } from "react-use-wishlist";
import { useCart } from "react-use-cart";
import { useContext, useEffect } from "react";
import { LangContext } from "../context/LangContext";

const Whislist = () => {
  const { isWishlistEmpty, totalWishlistItems, items, removeWishlistItem } = useWishlist();
  const { addItem } = useCart();

  const [lang]=useContext(LangContext);

  return (
    <div className="whislist">
      <div className="main d-flex flex-column justify-content-center align-items-center h-100">
        <h1>{lang==="az"?"İstək siyahısı":"WhisList"}</h1>
        {lang==="az"?
        <p className="py-3">
        <LinkContainer to="/shop">
          <span>Məhsul</span>
        </LinkContainer>
        // İstək siyahısı
      </p>
        :
        <p className="py-3">
        <LinkContainer to="/shop">
          <span>Product</span>
        </LinkContainer>
        // WhisList
      </p>
        }
      </div>
      <div className="bottom">
        <div className="top-img">
          <img
            src="http://crems.like-themes.com/wp-content/themes/crems/assets/images/grunge-dark-temp.png"
            alt=""
          />
        </div>
        {isWishlistEmpty ? (
          <div className="txt d-flex justify-content-center">
            <h1 className="text-center">{lang==="az"?"İstək siyahınız boşdur":"Your wishlist is empty"}</h1>
          </div>
        ) : (
          <div className="table d-flex flex-column justify-content-center align-items-center p-5 m-0">
            <Table bordered className="tab">
              <thead>
                {lang==="az"?
                 <tr>
                 <th>#</th>
                 <th>Şəkil</th>
                 <th>Başlıq</th>
                 <th>Qiymət</th>
                 <th>Sil</th>
                 <th>Səbətə əlavə et</th>
               </tr>
                :
                 <tr>
                 <th>#</th>
                 <th>Photo</th>
                 <th>Title</th>
                 <th>Price</th>
                 <th>Delete</th>
                 <th>Add to cart</th>
               </tr>
                }
               
              </thead>
              <tbody>
                {items.map((item: any, count: number) => (
                  <tr key={item.id}>
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
                    <td>
                    <Button
                        className="btn"
                        onClick={() => {
                          addItem(item);
                        }}
                      >
                       <i className="fa-solid fa-cart-shopping"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <h1>{lang==="az"?"İstək siyahısı":"Wishlist"} ({totalWishlistItems})</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Whislist;
