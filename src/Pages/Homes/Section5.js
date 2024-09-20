import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../../Styles/AdStyle.css"
import img1 from "../../assets/ad_donation_img.png"
function Section5() {
  return (
    <section className='ad_section'>
    
      <Container>
      <Row className='ad_section_row'>
      <Col lg={8} className='ad_back d-flex justify-content-between  '>
         <div className='mt-3'>
           <p className='mb-0'>Change Someone's Life</p>
           <p className='mb-0'style={{marginTop:"-10px"}}>Fundraising</p>
           <p className='mb-0' style={{marginTop:"-20px"}}>Event</p>
           <div className="d-flex justify-content-center mt-1">
           <i className="bi bi-facebook mx-1" style={{color:"blue",fontSize:"1.6rem"}}></i>
           <i className="bi bi-whatsapp mx-1" style={{color:"green",fontSize:"1.6rem"}}></i>
           <i className="bi bi-instagram mx-1"style={{color:"red",fontSize:"1.6rem"}}></i>
           <i className="bi bi-twitter mx-1" style={{color:"blue",fontSize:"1.6rem"}}></i>
           </div>
         </div>
        <div >
        <img src={img1} className="img-fluid  "  alt="" />
        </div>       
      </Col>      
      </Row>     
      </Container>
    
    </section>
  )
}

export default Section5