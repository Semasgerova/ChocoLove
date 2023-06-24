import { LinkContainer } from "react-router-bootstrap";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import 'sweetalert2/src/sweetalert2.scss'

interface Person {
  email: string;
  pass: string;
}

export const admin:Person = {
  email: "admin@gmail.com",
  pass: "admin",
};

const Admin = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const Swal = require('sweetalert2')

  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailRef.current!.value || !passRef.current!.value) {
      Swal.fire(
        'Please, fill input',
        '...',
        'question'
      )
    } else {
      if (
        emailRef.current!.value === admin.email &&
        passRef.current!.value === admin.pass
      ) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Login success',
          showConfirmButton: false,
          timer: 1500
        }) 
        setTimeout(function(){ 
          navigate("/dashboard");
          window.location.reload();
         }, 1500);
         localStorage.setItem("Admin", JSON.stringify(admin));
       
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Email or password is wrong!!!',
        })
      }
    }
  };

  return (
    <div className="account">
      <div className="main d-flex flex-column justify-content-center align-items-center h-100">
        <h1>Admin Panel</h1>
        <p className="py-3">
          <LinkContainer to="/">
            <span>Home</span>
          </LinkContainer>
          // AdminPanel
        </p>
      </div>
      <div className="login">
        <img
          src="http://crems.like-themes.com/wp-content/themes/crems/assets/images/grunge-dark-temp.png"
          alt=""
        />
        <div className="d-flex align-items-center justify-content-center flex-column py-5">
          <div className="col-3 login-box p-5">
            <h2>Login</h2>
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
                Sign In
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;