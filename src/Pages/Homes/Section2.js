import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import img1 from "../../assets/help2.png"
function Section2() {
  return (
    <section className='about_section'>
         <div className='text-center about_text mb-5'>
         <p style={{fontWeight:"800",fontSize:"2.5rem"}}>About
          <span style={{color:"#fc9f32"}}> &nbsp;Us</span></p>
         </div>

         <Container>
         <Row>
         <Col lg={5} className='mb-5'>
         <div  className='about_img'>
        <img src={img1} className="img-fluid  "  alt="" />
        </div>
         </Col>
         <Col>
          <div >
          <p style={{fontSize:"1.1rem",color:"grey"}} className='about_text'>
          
        Welcome to [Lok Kalyan], a platform dedicated to helping the most vulnerable members of our society—orphans, the homeless, and those who have been pushed away from their homes, including individuals struggling with mental health issues.
        Our mission is to create a compassionate and connected community where everyone has the opportunity to find the support and care they need. Through our innovative app, we identify individuals in need and connect them with the nearest NGOs that can provide essential services and resources tailored to their unique requirements.
       We believe that every person deserves a chance to live with dignity and hope. By partnering with local NGOs and leveraging technology, we aim to bridge the gap between those in need and the organizations ready to help. Together, we can make a difference, one life at a time.
       Join us in our mission to create a brighter future for those who need it most.
        </p>

           <div className='mt-5'>
           <Link to="/about" className='learn_more ' style={{textDecoration:"none"}}>
           Learn More
           </Link>
           </div>
          
          </div>
         
         </Col>
         </Row>
         </Container>
    
     </section>
  )
}

export default Section2