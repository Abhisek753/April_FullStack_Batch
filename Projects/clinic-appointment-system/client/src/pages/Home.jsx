import React from 'react'
import {Link} from "react-router-dom"
import {Button, Col, Container, Row} from "reactstrap"
const Home = () => {
  return (
    <div className='home-page'>
       <section className='home-hero'>
        <Container>
          <Row className="align-items-center">
               <Col lg="6" className='mb-4 mb-lg-0'>
               <p className='home-heading'>CLINIC APPOINTMENT</p>
               <h1 className='home-title'>Book a doctor visit in minutes</h1>
               <p className='home-lead'>find specialists, pick a date, choose an open slot and mannage your appointments -all in one place</p>
                <div className='home-action'>
                  <Button tag={Link} to="/doctors" color='primary'>Find a doctor</Button>
                  <Button tag={Link} to="/register" color="outline-primary">Create account</Button>
                </div>
              
               </Col>
               <Col lg="6" className='text-center'>
                  <img style={{backgroundColor:"white"}} className='home-hero-img' src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwv99Z07VeW-Yrl-wkuB-x9KqdBsJYH2uXowM25G5t2A&s"}/>
               </Col>
          </Row>
        </Container>
       </section>
       <section className='home-steps'>
       <Container>
         <h2 className='home-steps-title'>How it works</h2>
        <Row>
          <Col md="4" className='mb-3'>
          <div className='home-step-card'>
            <span className='home-step-num'>1</span>
            <h3>Search</h3>
            <p>Browse doctors by specialization and consultation fee</p>
          </div>
          
          </Col>
          <Col md="4" className='mb-3'>
             <div className='home-step-card'>
           <span className='home-step-num'>2</span>
            <h3>Book</h3>
            <p>Pick a date and an available time slot that fits you.</p>
          </div>
          </Col>
           <Col md="4" className='mb-3'>
             <div className='home-step-card'>
           <span className='home-step-num'>3</span>
            <h3>Visit</h3>
            <p>View or cancel booking anytime under My Appointments</p>
          </div>
          </Col>
        </Row>

       </Container>
       </section>
    </div>
  )
}

export default Home