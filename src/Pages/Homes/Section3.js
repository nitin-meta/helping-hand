import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import items from "../ServiceInfo.js"
import Cards from '../../Component/Cards.js'
import "../../Styles/ServicesectionStyle.css"
import { Link } from 'react-router-dom'
function Section3() {
  return (
    <div  className='service_section'>
    
      <Container className='serivce_section_container'>
      <h1 className='text-center mb-5' style={{color:"white"}}>Our Services</h1>
      <Row>
      
      {items.map((cardData, index) => (
        <Cards 
        key={index}             
        image={cardData.image}   
        title={cardData.title}
        paragraph={cardData.paragraph}
        />
        ))}

{/*      <Col className='d-flex justify-content-center align-items-center'>
      <div className="d-flex align-items-center justify-content-center mb-3" >
      <Link to="/"  className='learn_more'
      style={{maxWidth:"190px",maxHeight:"70px",textDecoration:"none"}}>
     KNOW MORE</Link>
  </div>
      </Col>*/}
          
      </Row>     
      </Container>   
    
    </div>
  )
}

export default Section3