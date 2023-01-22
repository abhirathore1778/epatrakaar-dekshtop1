import React from 'react'
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Row, col } from 'react-bootstrap';

export const Menu = () => {
  return (
    <div>
      <Container>
        <Row>
          <col>
    <div className=" text-center bg-danger p-3" >
    <Nav >
            <Nav.Link href="#features">Entertainment</Nav.Link>
            <Nav.Link href="#pricing">Sports</Nav.Link>
            <Nav.Link href="#pricing">Travel</Nav.Link>
            <Nav.Link href="#pricing">History</Nav.Link>
            <Nav.Link href="#pricing">News</Nav.Link>
            <Nav.Link href="#pricing">Astrology</Nav.Link>
            <Nav.Link href="#pricing">Trending</Nav.Link>
            <Nav.Link href="#pricing">Weather</Nav.Link>
            <Nav.Link href="#pricing">Lifestyle</Nav.Link>
          </Nav>
          </div>
          </col>
          </Row>
          </Container>
          </div>

  )
}
