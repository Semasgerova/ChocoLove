import { LinkContainer } from "react-router-bootstrap";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { LangContext } from "../context/LangContext";

import 'sweetalert2/src/sweetalert2.scss'


const user =[
  {
    name:"Sema",
    email: "sema@gmail.com",
    pass: "sema",
  },
  {
    name:"User",
    email: "user@gmail.com",
    pass: "user",
  }
]

const Account = () => {
  const [lang] = useContext(LangContext);
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const Swal = require('sweetalert2')

  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailRef.current?.value || !passRef.current?.value) {
      Swal.fire(
        'Please, fill input',
        '...',
        'question'
      )
      
    } else {
      const findUser:any = user.find((u:any)=>u?.email===emailRef.current?.value)
      if (
        !findUser || passRef.current?.value !== findUser.pass
      ) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Email or password is wrong!!!',
        })
      } else {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Login success',
          showConfirmButton: false,
          timer: 1500
        })
        localStorage.setItem("MyUser", JSON.stringify(findUser));
        setTimeout(function(){ 
          navigate("/shop");
          window.location.reload();
         }, 1500);
        
       
       
      }
    }
  };

  return (
    <div className="account">
      <div className="main d-flex flex-column justify-content-center align-items-center h-100">
        <h1>{lang==="az"?"Hesab":"Account"}</h1>
       {lang==="az"?
        <p className="py-3">
        <LinkContainer to="/">
          <span>Ana Səhifə</span>
        </LinkContainer>
        // Hesab
      </p>:
        <p className="py-3">
        <LinkContainer to="/">
          <span>Home</span>
        </LinkContainer>
        // Account
      </p>}
      </div>
      <div className="login">
        <img
          src="https://raw.githubusercontent.com/Semasgerova/images/main/grunge-dark-temp.png"
          alt=""
        />
        <div className="d-flex align-items-center justify-content-center flex-column py-5">
          <div className="col-3 login-box p-5">
            <h2>{lang==="az"?"Daxil ol":"Login"}</h2>
            <Form onSubmit={formSubmit}>
              <Form.Group className="mb-3 formGroup">
                <Form.Control
                  ref={emailRef}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3 formGroup">
                <Form.Control
                  ref={passRef}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Button type="submit" className="btn">
                {lang==="az"?"Daxil ol":"Sign In"}
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
