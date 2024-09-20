import React from 'react'
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/CardteamStyle.css"
function Cardsteam({image,title, paragraph,name}) {
  return (
    <Col className="mb-5 team_section_col">
    <Card className="overflow-hidden team_section_card">
      <div className="overflow-hidden card_teamimage_dim ">
        <Card.Img variant="top" src={image} />
        
      </div>
      <Card.Body className='text-center ' >
        <Card.Title className='mb-0'>{name}</Card.Title>
        <p className='mb-1' style={{color:"grey"}}>{title}</p>
        <Card.Text className='mb-4' >{paragraph}</Card.Text>
        <div className="d-flex justify-content-center mt-1 mb-3">
         <i className="bi bi-facebook mx-1" ></i>
         <i className="bi bi-instagram mx-1" ></i>
         <i className="bi bi-twitter-x mx-1" ></i>
         </div>
      </Card.Body>
    </Card>
  </Col>
  )
}

export default Cardsteam