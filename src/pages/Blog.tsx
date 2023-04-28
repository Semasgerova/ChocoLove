import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Blog = () => {
  const [productItem] = useContext(ProductContext)
  return (
    <div className="blog">
       <div className="main d-flex flex-column justify-content-center align-items-center h-100">
        <h1>Blog</h1>
        <p className='py-3'><span>Home</span> // Blog</p>
      </div>
      <div className="bottom container">
      <div className="image"><img src="http://crems.like-themes.com/wp-content/themes/crems/assets/images/grunge-dark-temp.png" alt="" /></div>
      {productItem.slice(4,15).map((item:any)=>(
                <div className="box">
                  <div className="img"><img src={item.image} alt="" /></div>
                <h4>{item.title}</h4>
                <p>{item.description}$</p>
                </div>

              
             ))}
      </div>
    </div>
  )
}

export default Blog