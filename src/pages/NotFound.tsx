import { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { LangContext } from "../context/LangContext";

const NotFound = () => {
  const [lang] = useContext(LangContext);

  return (
    <div className="error">
      <div className="main d-flex flex-column justify-content-center align-items-center h-100">
        <h1 className="text-center">{lang==="az"?"404 Tapılmadı":"404 Not Found"}</h1>
        {lang==="az"?
        <p className="py-3">
        <span>Ana Səhifə</span> // 404
      </p>
        :
        <p className="py-3">
        <span>Home</span> // 404
      </p>
        }
      </div>
      <div className="bottom">
        <div className="image">
          <img
            src="http://crems.like-themes.com/wp-content/themes/crems/assets/images/grunge-dark-temp.png"
            alt=""
          />
        </div>
        <div className="box d-flex flex-column align-items-center justify-content-center text-center">
          <img
            src="http://crems.like-themes.com/wp-content/uploads/2019/06/404_crems.png"
            alt=""
          />
          <h1>{lang==="az"?"Vay! Səhifə tapılmadı":"Oops! Page Not Found"}</h1>
          {lang==="az"?
          <p>
          Axtardığınız səhifə köçürüldü, silindi, <br /> adı dəyişdirildi və ya
          heç vaxt olmadı.
        </p>
          :
          <p>
          The page you are looking for was moved, removed, <br /> renamed or
          might never existed.
        </p>
          }
          <div className="button py-5 d-flex justify-content-center align-items-center">
            <LinkContainer to="/">
              <Button className="btn p-0 d-flex justify-content-center align-items-center">
                HOME PAGE
              </Button>
            </LinkContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
