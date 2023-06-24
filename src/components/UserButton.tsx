import { NavLink, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { LinkContainer } from "react-router-bootstrap";
import { useContext } from "react";
import { LangContext } from "../context/LangContext";

interface Person {
  name: string;
  email: string;
  pass: string;
}

const UserButton:React.FC = () => {
  const [lang] = useContext(LangContext);
  const user:Person = JSON.parse(localStorage.getItem("MyUser")!);
  const navigate = useNavigate();
  const LogOut = () => {
    localStorage.removeItem("MyUser");
    localStorage.removeItem("react-use-cart");
    localStorage.removeItem("react-use-wishlist");
    navigate("/login");
    window.location.reload();
  };
  const authUser = () => {
    if (user === null) {
      return (
        <Dropdown className="dropdown">
          <Dropdown.Toggle id="dropdown-basic" className="dropdown-basic px-0">
            <i className="fa-regular fa-user"></i>
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropdown-menu">

            <NavLink to="/login" className="txt">
              {lang==="az"?"Daxil ol":"Login"}
            </NavLink>
          </Dropdown.Menu>
        </Dropdown>
      );
    } else {
      return (
        <Dropdown className="dropdown">
          <Dropdown.Toggle id="dropdown-basic" className="dropdown-basic px-0">
            <i className="fa-regular fa-user"></i>{user.name}
          </Dropdown.Toggle>
         
          <Dropdown.Menu className="dropdown-menu">
            
            <LinkContainer to="/login">
              <Dropdown.Item onClick={LogOut} className="txt">
                {lang==="az"?"Çıxış":"Log Out"}
              </Dropdown.Item>
            </LinkContainer>
          </Dropdown.Menu>
        </Dropdown>
      );
    }
  };

  return <>{authUser()}</>;
};

export default UserButton;
