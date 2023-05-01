import { useContext } from "react";
import { useParams } from "react-router"
import { ProductContext } from "../context/ProductContext";

const ProductDetails = () => {
  const {url} = useParams();
  const [productItem] = useContext(ProductContext)

  const productdetails = productItem.find((p:any)=>p.id == url)
  return (
    <div><img src={productdetails.image} alt="" /></div>
  )
}

export default ProductDetails