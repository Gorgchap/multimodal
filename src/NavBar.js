import { Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import React from 'react';

function NavBar() {
  return <Navbar bg="dark" variant="dark" sticky="top">
    <Navbar.Brand href="/profile">
      <Image width={40} height={40} className="mr-3" src={'../../avatar.jpg'} alt={''} roundedCircle />
      <span>Сергей Сапегин</span>
    </Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="/">Основное</Nav.Link>
      <Nav.Link href="#">Сообщения</Nav.Link>
      <NavDropdown title="Действия" alignRight>
        <NavDropdown.Item href="/profile">Профиль</NavDropdown.Item>
        <NavDropdown.Item href="/change_password">Смена пароля</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/">О платформе</NavDropdown.Item>
        <NavDropdown.Item href="/logout">Выход</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar>
}
export default NavBar;
