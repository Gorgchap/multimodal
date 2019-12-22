import { Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import React from 'react';

function NavBar() {
  return <Navbar bg="dark" variant="dark" sticky="top">
    <Navbar.Brand href="#">
      <Image width={40} height={40} className="mr-3" src={'../../avatar.jpg'} alt={''} roundedCircle />
      <strong>Сергей Сапегин</strong>
    </Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="/">Основное</Nav.Link>
      <Nav.Link href="#">Сообщения</Nav.Link>
      <NavDropdown title="Действия" alignRight>
        <NavDropdown.Item href="#">Профиль</NavDropdown.Item>
        <NavDropdown.Item href="/change_password">Смена пароля</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/about">О платформе</NavDropdown.Item>
        <NavDropdown.Item href="#">Выход</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar>
}
export default NavBar;
