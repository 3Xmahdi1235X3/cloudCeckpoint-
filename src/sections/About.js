import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from '../components/Card'
import CardCustom from '../components/Card'
import picSO from "../assets/Group12.svg"
import picSEO from "../assets/Group7.svg"
import picCM from "../assets/Group5.svg"
import TextImage from '../components/TextImage'
import picS1 from "../assets/Group1.png"
import picS2 from "../assets/Group2.png"

const About = () => {
  return (
    <div className='' id="about">
        <Container className='pt-5 pb-5'>
            <Row  className='text-center justify-content-center mb-5 p-5'>
                <Col md={6}>
                <h2>About US </h2>
                     <h6 className='text-muted'>We're an SEO and web development agency dedicated to enhancing your online presence.. Whether you're a startup or an established business, we're here to help you succeed online.</h6>
                </Col>
            </Row>
            <Row className='mt-3 justify-content-center'>
                <Col md={3}>
                    <CardCustom pic={picSO} title={"Speed Optimisation"}></CardCustom>
                </Col>
                <Col md={3}>
                    <CardCustom pic={picSEO} title={"SEO and Backlinks"}></CardCustom>
                </Col>
                <Col md={3}>
                    <CardCustom pic={picCM} title={"Content Marketing"}></CardCustom>
                </Col>
            </Row>
            <Row className='mt-5 '>
            <TextImage  className="mt-5 pt-5" img={picS1} textleft={true} text={"We Offer a Full Range of Digital Marketing Services!"}/>
            <TextImage  className="mt-5 pt-5" img={picS2} textleft={false} text={"Leading Digital Agency for Business Solution."} />

            </Row>
        </Container>
    </div>
  )
}

export default About