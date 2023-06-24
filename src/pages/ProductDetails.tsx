import { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router";
import { LinkContainer } from "react-router-bootstrap";
import { useCart } from "react-use-cart";
import { LangContext } from "../context/LangContext";
import { ProductContext } from "../context/ProductContext";

const ProductDetails = () => {
  const { url } = useParams();
  const [productItem] = useContext(ProductContext);

  const productdetails = productItem.products?.find((p: any) => p.id == url);
  const productdetailsAz = productItem.productsAz?.find((p: any) => p.id == url);

  const { addItem } = useCart();
  const [lang] = useContext(LangContext);

  return (
    <div className="productDetails">
      <div className="main d-flex flex-column justify-content-center align-items-center h-100">
        {lang==="az"?
         <>
         <h1 className="text-center">{productdetailsAz.title}</h1>
         <p className="py-3 text-center">
           <LinkContainer to="/">
             <span>Ana Səhifə</span>
           </LinkContainer>
           //
           <LinkContainer to="/shop">
             <span>Məhsullar</span>
           </LinkContainer>
           // {productdetailsAz.title}
         </p>
         </>
        :
        <>
        <h1 className="text-center">{productdetails.title}</h1>
        <p className="py-3 text-center">
          <LinkContainer to="/">
            <span>Home</span>
          </LinkContainer>
          //
          <LinkContainer to="/shop">
            <span>Products</span>
          </LinkContainer>
          // {productdetails.title}
        </p>
        </>
        }
        
      </div>
      <div className="bottom">
        <div className="top">
          <img
            src="http://crems.like-themes.com/wp-content/themes/crems/assets/images/grunge-dark-temp.png"
            alt=""
          />
        </div>
        {lang==="az"?
        <>
         <div className="row g-5 py-5 m-0">
          <div className="col-sm-12 col-lg-6">
            <div className="image d-flex justify-content-center align-items-center">
              <img
                src={productdetailsAz.image}
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width={300}
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <h6 className="display-5 fw-bold lh-1 mb-3 text-center">
              ${productdetailsAz.price}
            </h6>
            <p className="lead text-center">
              {productdetailsAz.description.substring(0, 150)}...
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-center">
              <div className="button">
                <Button
                  className="btn p-0 mt-4"
                  onClick={() => {
                    addItem(productdetailsAz);
                  }}
                >
                  SƏBƏTƏ ƏLAVƏ ET <i className="fa-solid fa-arrow-right"></i>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="desc pb-5 d-flex flex-column justify-content-center align-items-center">
          <h4 className="text-center pb-4">Təsvir</h4>
          <p className="m-0 w-75 text-center">{productdetailsAz.description}</p>
        </div>
        </>
        :
        <>
         <div className="row g-5 py-5 m-0">
          <div className="col-sm-12 col-lg-6">
            <div className="image d-flex justify-content-center align-items-center">
              <img
                src={productdetails.image}
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width={300}
                loading="lazy"
              />
            </div>
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <h6 className="display-5 fw-bold lh-1 mb-3 text-center">
              ${productdetails.price}
            </h6>
            <p className="lead text-center">
              {productdetails.description.substring(0, 150)}...
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-center">
              <div className="button">
                <Button
                  className="btn p-0 mt-4"
                  onClick={() => {
                    addItem(productdetails);
                  }}
                >
                  ADD TO CART <i className="fa-solid fa-arrow-right"></i>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="desc pb-5 d-flex flex-column justify-content-center align-items-center">
          <h4 className="text-center pb-4">Description</h4>
          <p className="m-0 w-75 text-center">{productdetails.description}</p>
        </div>
        </>
        }
       
      </div>
    </div>
  );
};

export default ProductDetails;
