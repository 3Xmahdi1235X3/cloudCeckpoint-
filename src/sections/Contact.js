import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Map from '../components/Map'

const Contact = () => {
  return (
    <Container className='p-5' id="contact">
        <section className="contact-us" id="contact-section">
        <div className="contact-us-bgimage grid-margin">
          <div className="pb-4">
            <h4 className="px-3 px-md-0 m-0 ">Do you have any projects?</h4>
            <h4 className="pt-1">Contact us</h4>
          </div>
          <div data-aos="fade-up" className="">
            <button className="btn btn-rounded btn-outline-danger">Contact us</button>
          </div>          
        </div>
        <Map ></Map>


      </section> 
    </Container>
 )
}

export default Contact