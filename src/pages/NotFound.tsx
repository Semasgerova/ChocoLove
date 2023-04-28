import { Button } from "react-bootstrap"


const NotFound = () => {
  return (
    <div className="error">
       <div className="main d-flex flex-column justify-content-center align-items-center h-100">
        <h1>404 Not Found</h1>
        <p className='py-3'><span>Home</span> // 404</p>
      </div>
      <div className="bottom container">
        <div className="image"><img src="http://crems.like-themes.com/wp-content/themes/crems/assets/images/grunge-dark-temp.png" alt="" /></div>
        <div className="box d-flex flex-column align-items-center justify-content-center text-center">
            <img src="http://crems.like-themes.com/wp-content/uploads/2019/06/404_crems.png" alt="" />
            <h1>Oops! Page Not Found</h1>
            <p>The page you are looking for was moved, removed, <br /> renamed or might never existed.</p>
            <div className="button py-5 d-flex justify-content-center align-items-center">
        <Button className="btn p-0 mt-4">HOME PAGE</Button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound