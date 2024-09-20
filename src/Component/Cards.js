import React from 'react'
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/CardsStyle.css"
function Cards({image,title, paragraph}) {
  return (
    <Col  lg={3} md={4} sm={12} xs={12} className="mb-5 card_section" >
    <Card className="overflow-hidden" >
      <div className="overflow-hidden card_image_dim d-flex justify-content-center align-items-center">
        <Card.Img variant="top" src={image} />
        
      </div>
      <Card.Body className='text-center card_body_style' >
        <Card.Title className='mb-3' style={{color:"white",fontSize:"0.98rem"}}>{title}</Card.Title>
        <Card.Text className='mb-4' style={{color:"white"}}>{paragraph}</Card.Text>

      </Card.Body>
    </Card>
  </Col>
  )
}

export default Cards