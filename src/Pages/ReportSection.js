
import React, { useState, useEffect } from 'react';
import img1 from "../assets/brandlogo1.png";
import { Link } from 'react-router-dom';
import { Col, Container, Row, Form } from 'react-bootstrap';
import "../Styles/Reportsection.css";

function ReportSection() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Add animation classes after a short delay
    const timer = setTimeout(() => {
      document.querySelector('.welcome-text').classList.add('appear');
      document.querySelector('.report-form-container').classList.add('appear');
    }, 100);

    return () => clearTimeout(timer);
  }, []);

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
    <section className='report_section'>
      <header className='login_section_header'>
        <Link to="/">
          <img src={img1} className="img-fluid" style={{ maxWidth: "200px", maxHeight: "85px", padding: "10px" }} alt="Hero" />
        </Link>
      </header>
      
      <Container className='report_section_container'>
        <Row>
          <Col className='d-flex justify-content-center align-items-center mb-5' style={{ padding: "20px" }}>
            <div className='welcome-text'>
              <h1 style={{ color: "white", textTransform: "none" }} className='mb-2'>Welcome to Lok Kalyan</h1>
              <h4 style={{ color: "white", textTransform: "none" }} className='mb-4'>Transforming Lives, One Step at a Time</h4>
              <p style={{ color: "white" }} className='mb-4'>
                At LokKalyan, we are dedicated to reaching out to the helpless, homeless,
                orphans, disabled, and mentally ill individuals in our community. Our mission is to fulfill their desires and integrate
                them into society, ensuring they become valuable and contributing members of our country.
                Join us in making a meaningful difference and bringing hope to those in need. 
                Together, we can build a better tomorrow.
              </p>
              <div className='d-flex justify-content-start'>
                <Link to='/' className='read_more' style={{ textDecoration: "none" }}>Read more</Link>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className='report_form report-form-container'>
              <Form className='login_form' style={{ padding: "30px 23px", maxWidth: "350px" }} onSubmit={handleLogin}>
                <div>
                  <p style={{ color: "white", fontSize: "22px" }} className='mb-4'>Already have an account?</p>
                  <div className='mb-4'>
                    <button style={{ background: "white", width: "100%", border: "1px solid grey", borderRadius: "5px", padding: "10px 0px" }} className='d-flex align-items-center justify-content-center'>
                      <img src="https://cdn.codechef.com/images/icons/google.svg" alt="Google icon" />
                      <div className='ms-2'>Continue with Google</div>
                    </button>
                  </div>
                  <div className='line d-flex justify-content-center align-items-center' style={{ fontWeight: 500, color: "white" }}>
                    <span></span> &nbsp;&nbsp;OR&nbsp;&nbsp;
                    <span></span>
                  </div>
                  <Form.Group className="mb-4 mt-3" controlId="exampleForm.ControlInput1">
                    <Form.Label style={{ fontWeight: 500, color: "white" }}>Email : <span style={{ color: "grey" }}>*</span></Form.Label>
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
                      <Form.Label style={{ fontWeight: 500, color: "white" }}>Password : <span style={{ color: "grey" }}>*</span></Form.Label>
                      {show && <div style={{ cursor: "pointer", color: "rgb(105 166 255)" }} onClick={() => setShow(!show)}>
                        <i className="bi bi-eye-fill"></i> Show
                      </div>}
                      {!show && <div style={{ cursor: "pointer", color: "rgb(105 166 255)" }} onClick={() => setShow(!show)}>
                        <i className="bi bi-eye-slash-fill"></i> Hide
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
                    <p style={{ color: "white" }}>Don't have an account ? <Link to="/register_user">Register</Link></p>
                  </div>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ReportSection;
