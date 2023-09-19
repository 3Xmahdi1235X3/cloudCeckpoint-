import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import pic from "../assets/Group1.png"
const TextImage = ({
    textleft,
    text,
    img
}) => {
    
  if(textleft)
  {
    return (
        <Row className="align-items-center justify-content-center mt-5 pt-5">
            <Col md="4">
                    <h3>
                        {text}
                    </h3>
                    <Col md="9">    
                        <p className='py-4 m-0 text-muted'>
                        Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.

                        </p>
                        <p className='font-weight-medium text-muted'>
                        Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.

                        </p>
                    
                    </Col>
            </Col>
            <Col md="1"></Col>

            <Col md="4"  className='d-flex justify-content-end'>
                
                <Image src={pic} className=''/>
            
            </Col>
        </Row>
    );
  }else{
    return (
        <Row className="align-items-center mt-5 pt-5 justify-content-center">
              <Col md="4">
                
                <Image src={pic} className=''/>
            
            </Col>
            
            <Col md="2"></Col>

            <Col md="4">
                    <h3>
                        {text}
                    </h3>
                    <Col md="9">    
                        <p className='py-4 m-0 text-muted'>
                        Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.

                        </p>
                        <p className='font-weight-medium text-muted'>
                        Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.

                        </p>
                    
                    </Col>
            </Col>
          
        </Row>
    );
  }
}

export default TextImage