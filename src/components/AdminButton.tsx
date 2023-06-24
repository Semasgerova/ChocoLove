import { NavLink, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { LinkContainer } from "react-router-bootstrap";
import { useContext } from "react";
import { LangContext } from "../context/LangContext";
import { Button } from "react-bootstrap";


const AdminButton = () => {
  const [lang] = useContext(LangContext);
  const admin = localStorage.getItem("Admin");
  const navigate = useNavigate();
  const LogOut = () => {
    localStorage.removeItem("Admin");
    navigate("/admin");
    window.location.reload();
  };
  const authUser = () => {
    if (admin === null) {
      return (
        <LinkContainer to="/admin">
          <Dropdown.Item>
             <Button className="btn"> Admin</Button>
            </Dropdown.Item>
        </LinkContainer>
            
         
      );
    } else {
      return (
        
          <>
            <LinkContainer to="/admin">
            <Dropdown.Item onClick={LogOut}>
              <Button  className="btn">{lang==="az"?"Çıxış":"Log Out"}</Button>
                
              </Dropdown.Item>
            </LinkContainer>
            
             <LinkContainer to="/dashboard">
             <Dropdown.Item>
              <Button className="btn"> {lang==="az"?"Idarə paneli":"Dashboard"}</Button>
            
              </Dropdown.Item>
           </LinkContainer>
          </>
          
      );
    }
  };

  return <>{authUser()}</>;
};

export default AdminButton;
