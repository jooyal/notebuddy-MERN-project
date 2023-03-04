import React from 'react'
import './LandingPage.css'
import { Button, Container, Row } from 'react-bootstrap'

const LandingPage = () => {
  return (
    <div className='main'>
      <Container>
        <Row>
          <div className="landing-heading">
            <h1>Welcome to<br/> Note Buddy</h1>
            <p>A safe place to store all your notes.</p>
          </div>

          <div className="button-container">
            <a href="/login">
              <Button className='btn-success' size='lg'>Login</Button>
            </a>
            <a href="/register">
              <Button className='btn-info' size='lg'>Sign Up</Button>
            </a>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default LandingPage