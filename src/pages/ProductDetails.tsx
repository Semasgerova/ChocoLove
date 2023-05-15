import { useContext } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router"
import { LinkContainer } from "react-router-bootstrap";
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";
import { ProductContext } from "../context/ProductContext";

const ProductDetails = () => {
  const {url} = useParams();
  const [productItem] = useContext(ProductContext)

  const productdetails = productItem.find((p:any)=>p.id == url)

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


  return (
    <div className="productDetails">
       <div className="main d-flex flex-column justify-content-center align-items-center h-100">
        <h1>{productdetails.title}</h1>
        <p className='py-3'><LinkContainer to='/'><span>Home</span></LinkContainer> // <LinkContainer to='/shop'><span>Products</span></LinkContainer> // {productdetails.title}</p>
      </div>
      <div className="bottom">
      <div className="top"><img src="http://crems.like-themes.com/wp-content/themes/crems/assets/images/grunge-dark-temp.png" alt="" /></div>
      <div className="row align-items-center g-5 py-5 m-0">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={productdetails.image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={300} loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h6 className="display-5 fw-bold lh-1 mb-3">${productdetails.price}</h6>
                        <p className="lead">{productdetails.description.substring(0,150)}...</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                          
                           
                  <div className="button"><Button className="btn p-0 mt-4"  onClick={()=>{addItem(productdetails);notify()}}>ADD TO CART <i className="fa-solid fa-arrow-right"></i></Button></div>
                  
                        </div>
                    </div>
      </div>
      <div className="desc pb-5 d-flex flex-column justify-content-center align-items-center">
        <h4 className="text-center pb-4">Description</h4>
        <p  className="m-0 w-75 text-center">{productdetails.description}</p>
      </div>
      </div>
    </div>
  )
}

export default ProductDetails