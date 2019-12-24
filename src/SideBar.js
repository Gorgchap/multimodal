import {Nav} from 'react-bootstrap';
import React from 'react';

function SideBar() {
  return <Nav className="flex-row flex-sm-column bg-dark" id="sidebar">
    <Nav.Link href="/experiment" className="dark-link">
      Данные экспериментов
    </Nav.Link>
    <Nav.Link href="/" className="dark-link">
      Шаблоны исследований
    </Nav.Link>
    <Nav.Link href="/dataset" className="dark-link">
      Датасеты
    </Nav.Link>
    <Nav.Link href="/" className="dark-link">
      Пакеты обработки
    </Nav.Link>
    <Nav.Link href="/" className="dark-link">
      Отчёты
    </Nav.Link>
    <Nav.Link href="/" className="dark-link">
      Публикации
    </Nav.Link>
  </Nav>
}
export default SideBar;
