import React from "react";
import { Row, Col } from 'react-bootstrap';
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";

function HomePage() {
  return <>
    <NavBar />
    <Row>
      <Col xs={12} sm={4} md={3} lg={2}>
        <SideBar />
      </Col>
    </Row>
  </>
}
export default HomePage;
