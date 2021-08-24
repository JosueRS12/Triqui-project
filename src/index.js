//librerias de react
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
//vincular el css
import './index.css';
import Board from './components/game/board';
import logoGlud from './assets/GLUD_LOGO.svg';
//vincular boostrap
import {Col, Row, Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
const Layout = (props) =>{
  //function redes(name){
    //let redSocial = {link: '', class: ''};
//// eslint-disable-next-line
    //switch (name) {
      //case 'github':
        //redSocial.link = 'https://github.com/JosueRS12/';    
        //redSocial.class = 'github';
        //break;
      //case 'linkedin':
        //redSocial.link = 'https://www.linkedin.com/in/josu%C3%A9-rodr%C3%ADguez-720095218';    
        //redSocial.class = 'linkedin';
        //break;
    //} 
    //return redSocial;
  //} 
  return (
    <main>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Triqui App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://github.com/JosueRS12/Triqui-project" target="_blank">Repositorio</Nav.Link>
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
      
      <footer>
        <Container>
          <Row>
            <Col className="align">
              <div className="container-img">
                <img src={logoGlud} alt="logo glud"/>
              </div>
            </Col>
            <Col className="align social">
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
