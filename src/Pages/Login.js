import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Form } from 'react-bootstrap';
import "../Styles/LoginStyle.css";
import img1 from "../assets/brandlogo1.png";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!email) {
      formErrors.email = 'Email is required';
    }

    if (!password) {
      formErrors.password = 'Password is required';
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // Proceed with login logic
      console.log('Logging in...');
    }
  };

  return (
    <section className='login_section'>
      <header className='login_section_header'>
        <Link to="/">
          <img src={img1} className="img-fluid" style={{ maxWidth: "200px", maxHeight: "85px", padding: "10px" }} alt="Hero" />
        </Link>
      </header>

      <Container className='login_container'>
        <Row className='login_container_row '>
          <Col lg={{ span: 8, offset: 2 }}>
            <div className='text-center mb-0' style={{ background: "white", padding: "8px 40px", display: "inline-block", borderTop: "3px solid #2079c3" }}>
              <h4 style={{ fontFamily: "Open Sans" }}>Login</h4>
            </div>

            <div className='login_container_col'>
              <Form className='login_form' style={{ padding: "30px 50px", maxWidth: "420px" }} onSubmit={handleLogin}>
                <p style={{ color: "#464545", fontSize: "22px" }} className='mb-4'>Already have an account?</p>
                <div className='mb-4'>
                  <button style={{ background: "white", width: "100%", border: "1px solid grey", borderRadius: "5px", padding: "10px 0px" }} className='d-flex align-items-center justify-content-center'>
                    <img src="https://cdn.codechef.com/images/icons/google.svg" alt="Google icon" />
                    <div className='ms-2'>Continue with Google</div>
                  </button>
                </div>

                <div className='line d-flex justify-content-center align-items-center' style={{ fontWeight: 500 }}>
                  <span></span> &nbsp;&nbsp;OR&nbsp;&nbsp;
                  <span></span>
                </div>
                <Form.Group className="mb-4 mt-3" controlId="exampleForm.ControlInput1">
                  <Form.Label style={{ fontWeight: 500 }}>Email : <span style={{ color: "grey" }}>*</span></Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <div style={{ color: 'red' }}>{errors.email}!</div>}
                </Form.Group>
                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                  <div className='d-flex justify-content-between align-items-center'>
                  <Form.Label style={{ fontWeight: 500 }}>Password : <span style={{ color: "grey" }}>*</span></Form.Label>
                 {show&&<div style={{ cursor: "pointer", color: "#2079c3"}} onClick={() => setShow(!show)}>
                 <i class="bi bi-eye-fill"></i>Show 
                 </div>}
                 {show===false&&<div style={{ cursor: "pointer", color: "#2079c3"}} onClick={() => setShow(!show)}>
                 <i class="bi bi-eye-slash-fill"></i>Hide
                 </div>}
                  </div>
                  <Form.Control
                    type={show ? "password" : "text"}
                    placeholder=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && <div style={{ color: 'red' }}>{errors.password}!</div>}
                </Form.Group>

                <div className='mt-4'>
                  <button type="submit" className='btn btn-primary' style={{ padding: " 9px 30px", borderRadius: "2px" }}>Login</button>
                </div>

                <div className='mt-3'>
                  <p>Don't have an account ? <Link to="/register_user">Register</Link></p> 
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Login;
