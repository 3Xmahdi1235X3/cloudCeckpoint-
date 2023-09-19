import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardCustom from '../components/Card'
import ClientCard from '../components/ClientCard'
import picS from "../assets/face2.jpg"
import picC from "../assets/face20.jpg"
import picT from "../assets/face1.jpg"
const Testimonials = () => {
  return (
    <div className='section pt-5' id="testiomnials">
        <Container>
            <Row>
                <Col md="12" className=' text-center pb-5'>
                    <h2>What our customers have to say</h2>
                    <h6 className="section-subtitle text-muted m-0">Lorem ipsum dolor sit amet, tincidunt vestibulum.</h6>
                </Col>
            </Row>
            <Row className='mt-5  justify-content-center'>
                <Col md={3}>
                    <ClientCard name={"Sophia Armstrong"} pic={picS} job={"CEO company"}/>
                </Col>
                <Col md={3}>
                <ClientCard name={"Tony Martinez"} pic={picT} job={"Financal Director"}/>

                </Col>
                <Col md={3}>
                <ClientCard name={"Codey Lamber"} pic={picC} job={"Team Lead"}/>

                </Col>
            </Row>
        </Container>

    </div>
  )
}

export default Testimonials