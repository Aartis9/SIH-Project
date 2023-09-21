import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbare.css'

const Navbare = () => {
  return (
    <div>
              <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>

          <Nav className="me-auto Flor111">
            <div className='flor112'>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/Postjob">Postjob</Nav.Link>
            <Nav.Link href="/Compinfo">Company-Information</Nav.Link>
            <Nav.Link href="/Alljob">Alljobs</Nav.Link>
            </div>
            <Nav.Link href="/"><h5>Hello Amiii </h5></Nav.Link>
          </Nav>
        </Container>

      </Navbar>





    </div>
  )
}

export default Navbare





