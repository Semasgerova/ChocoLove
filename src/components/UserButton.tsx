import { NavLink } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

const UserButton = () => {
  
    const user = localStorage.getItem('MyUser') ;
    const LogOut=()=>{
        localStorage.clear();
    }
    const authUser=()=>{
        if(user===null){
            return(
               
                <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <i className="fa-regular fa-user"></i>
                </Dropdown.Toggle>
          
                <Dropdown.Menu>
                <NavLink to='/login'>
                    Login
                </NavLink>
                </Dropdown.Menu>
              </Dropdown>
            )
        }else{
            return(
                // <NavLink to='/shop'>
                //     {user.email}
                // </NavLink>
                <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <i className="fa-regular fa-user"></i>
                </Dropdown.Toggle>
          
                <Dropdown.Menu>
                  <Dropdown.Item onClick={LogOut}>Log Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )
        }
    }

  return (
    <>
      {authUser()}
    </>
  )
}

export default UserButton