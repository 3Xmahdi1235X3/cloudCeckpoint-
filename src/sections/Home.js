import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PicHome from "../assets/Group171.svg"
const Home = () => {
  return (
    <div className='section header pt-5 pb-5' id="home">
       <Container>
       <Row className='justify-content-center text-center '>
            <Col md={6} className='p-5'>
                <h1>Search engine optimisation &
Marketing.</h1>
            </Col>
            <Col md={12} >
                    <h6  className='text-muted pb-3'>
                    Exploring the Synergy of SEO and Marketing for Digital Dominance

                    </h6>
            </Col>
            <Col md={12} className='mt-5'>
                <Row className="justify-content-center">
                    <Col md={2} >
                        <button className='btn green '>Get started </button>
                    </Col>
                    <Col md={2} >
                        <button className='btn orange '>Learn more </button>
                    </Col>
                </Row>
            </Col>
            <Col className='mt-5'>
                <img src={PicHome} alt="pic" className='img-fluid'/>
            </Col>
        </Row>
       </Container>
    </div>
  )
}

export default Home