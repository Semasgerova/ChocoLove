import { LinkContainer } from "react-router-bootstrap";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const user = {
  email: "sema01@gmail.com",
  pass: "2001s",
};

const Account = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailRef.current!.value || !passRef.current!.value) {
      alert("Please, fill input");
    } else {
      if (
        emailRef.current!.value === user.email &&
        passRef.current!.value === user.pass
      ) {
        alert("Login success");
        localStorage.setItem('MyUser',JSON.stringify(user))
        navigate("/shop");
      } else {
        alert("Email or password is wrong!!!");
      }
    }
  };

  return (
    <div className="account">
    <div className="main d-flex flex-column justify-content-center align-items-center h-100">
        <h1>Account</h1>
        <p className='py-3'><LinkContainer to='/'><span>Home</span></LinkContainer> // Account</p>
      </div>
    <div className="login">
    <img src="http://crems.like-themes.com/wp-content/themes/crems/assets/images/grunge-dark-temp.png" alt="" />
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
  )
}

export default Account