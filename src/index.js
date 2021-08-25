//librerias de react
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
//vincular el css
import './index.css';
import Board from './components/game/board';
import logoGlud from './assets/GLUD_LOGO.svg';
//vincular boostrap
import {Image, Col, Row, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
const Layout = (props) =>{
  return (
    <main>
      <header>
        <Navbar expand="lg" className="decorate-header">
        <Container className="size-nav"> 
          <Navbar.Brand>Triqui App</Navbar.Brand> 
            <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link eventKey="link-1" href="https://github.com/JosueRS12/Triqui-project" target="_blank">Repositorio</Nav.Link>
              <NavDropdown title="Contacto" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="https://github.com/JosueRS12" target="_blank">Github</NavDropdown.Item>
                  <NavDropdown.Item href=" https://www.linkedin.com/in/josu%C3%A9-rodr%C3%ADguez-720095218" target="_blank">Linkedin</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
      </header>
      <section id="game">
        <Board/>
      </section>
      
      <footer>
        <Container>
          <Row>
            <Col className="size">
              <Image className="decorate-img"src={logoGlud} fluid/> 
            </Col>
            <Col className="size">
              <div className="font-footer">
                <h5 Style="color: white"> GNU LINUX UNIVERSIDAD DISTRITAL</h5>
                <p>
                  Hecho por Josue Rodriguez usando <br/>
                  ReactJS con Bootstrap4
                </p>
              </div>
            </Col>
            <Col className="size align-social">
              <a href="https://github.com/JosueRS12/" className="social github"></a>
              <a href="https://www.linkedin.com/in/josu%C3%A9-rodr%C3%ADguez-720095218" className="social linkedin"></a>
            </Col>
          </Row>
        </Container>
      </footer>
    </main>    
  );
}

export default Layout;

ReactDOM.render(
  <Layout/>,
  document.getElementById("root")
);
