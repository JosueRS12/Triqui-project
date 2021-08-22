//librerias de react
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
//vincular el css
import './index.css';
import Board from './components/game/board';
//vincular boostrap
//import Navbar from 'react-bootstrap/Navbar';
//import Container from 'react-bootstrap/Container'
//import Nav from 'react-bootstrap/Nav';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
const Layout = (props) =>{
  return (
    <main>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Triqui App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Repositorio</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#home">redes sociales</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      <section id="game">
        <Board/>
      </section>
      
      <section id="footer">
        <p>hola</p>
      </section>
    </main>
    
  );
}

export default Layout;

ReactDOM.render(
  <Layout/>,
  document.getElementById("root")
);
