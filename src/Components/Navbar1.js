import React from 'react'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navbar1(props) {
  return (
    <div>
       <Navbar className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
       {/* <Navbar bg="dark" variant="dark"> */}
        <Container>
          <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

Navbar1.propTypes = {
  name: PropTypes.string
}
