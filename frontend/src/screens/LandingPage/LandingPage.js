import React, { useEffect } from 'react'
import './LandingPage.css'
import { Button, Container, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const LandingPage = () => {

  const navigate = useNavigate()
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if(userInfo){
      navigate('/mynotes')
    }
  }, [navigate]);

  return (
    <div className='main'>
      <Container>
        <Row>
          <div className="landing-heading">
            <h1>Welcome to<br/> Note Buddy</h1>
            <p>A safe place to store all your notes.</p>
          </div>

          <div className="button-container">
            <Link to="/login">
              <Button className='btn-success' size='lg'>Login</Button>
            </Link>
            <Link to="/register">
              <Button className='btn-info' size='lg'>Sign Up</Button>
            </Link>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default LandingPage