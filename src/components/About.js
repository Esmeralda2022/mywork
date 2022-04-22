import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

export const About = () => {
  return (
    <Container fluid className='aboutcont'>
        <Row lg='4' md='6' className='mb-4 mt-4'>
             <Col><img  src='./images/esi.jpeg' className='img-fluid rounded-circle w-50 mb-5' alt="esi" />
             </Col>
        </Row>
        <Row className="text-center text-md-right " >
             <Col >
                 <p className='abouttext mt-5'>
                    My name is Esmeralda Furriku and i love making things for the web.
                    I have a certificate of traineeship by CoderTrust, a word-wide and well known 
                    web development training institute for it's professionalism. I have knowledges 
                    in HTML, CSS, SASS, BOOTSTRAP, JAVASCRIPT, NODE.JS, REACT.JS .
                  </p>
            </Col>
        </Row>
    </Container>
  )
}

