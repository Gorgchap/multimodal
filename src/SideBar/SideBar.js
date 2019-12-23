import {Nav} from 'react-bootstrap';
import './sidebar.css'
import React from 'react';

function SideBar() {
  return <Nav className="flex-row flex-sm-column bg-dark" id="sidebar">
    <Nav.Link href="/" className="dark-link">
      Active
    </Nav.Link>
    <Nav.Link href="/" className="dark-link">
      Link
    </Nav.Link>
    <Nav.Link href="/" className="dark-link">
      Link
    </Nav.Link>
  </Nav>
}
export default SideBar;
