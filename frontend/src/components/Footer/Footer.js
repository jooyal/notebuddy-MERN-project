import React from 'react'
import './Footer.css'
import {Container, Row, Col} from 'react-bootstrap'

const Footer = () => {
  let thisYear = new Date().getFullYear()
  return (
    <div className='footer-style'>
      <Container>
        <Row>
          <Col className='text-center p-3'>
            Copyright &#169; <a href='https://github.com/jooyal'>Joseph Joyal</a>, &nbsp; {thisYear}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer