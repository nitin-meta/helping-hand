import React from 'react'
import { Col, Container, Row ,Carousel} from 'react-bootstrap'


import { Link } from 'react-router-dom'
function Section1() {
  return (
    <Carousel >
    <Carousel.Item>
    <section className='hero_section1'>
      <Container>
      <Row>
      <Col lg={{span:6,offset:1}} className='d-flex justify-content-center align-items-start'>
      <div>
      <h1 className='mb-0'>Give a helping </h1>
      <h1 className='mb-0' >hand to those </h1>
      <h1  >who need it!</h1>
      <p className='mb-0' style={{color:"white"}}>Feugiat primis ligula risus auctor laoreet augue egestas mauris
      viverra tortor </p>
      <p style={{color:"white"}}>in iaculis pretium at magna mauris ipsum primis
      rhoncus feugiat</p>
      <div className='d-flex justify-content-start mt-5'>
      <Link to="/report" className='order_now' style={{textDecoration:"none"}}>Report The Person</Link></div>
      </div>
      </Col>
      </Row>
      </Container>
    </section>
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>


    <Carousel.Item>
    <section className='hero_section2'>
      <Container>
      <Row>
      <Col lg={{span:6,offset:1}} className='d-flex justify-content-center align-items-start'>
      <div>
      <h1 className='mb-0'>Give a helping </h1>
      <h1 className='mb-0' >hand to those </h1>
      <h1  >who need it!</h1>
      <p className='mb-0' style={{color:"white"}}>Feugiat primis ligula risus auctor laoreet augue egestas mauris
      viverra tortor </p>
      <p style={{color:"white"}}>in iaculis pretium at magna mauris ipsum primis
      rhoncus feugiat</p>
      <div className='d-flex justify-content-start mt-5'>
      <Link to="/report" className='order_now'style={{textDecoration:"none"}}>Report The Person</Link></div>
      </div>
      </Col>
      </Row>
      </Container>
    </section>
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>


    <Carousel.Item>
    <section className='hero_section3'>
      <Container>
      <Row>
      <Col lg={{span:6,offset:1}} className='d-flex justify-content-center align-items-start'>
      <div>
      <h1 className='mb-0'>Give a helping </h1>
      <h1 className='mb-0' >hand to those </h1>
      <h1  >who need it!</h1>
      <p className='mb-0' style={{color:"white"}}>Feugiat primis ligula risus auctor laoreet augue egestas mauris
      viverra tortor </p>
      <p style={{color:"white"}}>in iaculis pretium at magna mauris ipsum primis
      rhoncus feugiat</p>
      <div className='d-flex justify-content-start mt-5'>
      <Link to="/report" className='order_now' style={{textDecoration:"none"}}>Report The Person</Link></div>
      </div>
      </Col>
      </Row>
      </Container>
    </section>
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>


  </Carousel>
  )
}

export default Section1