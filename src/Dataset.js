import {Accordion, Card} from "react-bootstrap";
import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

function Dataset() {
  return <>
    <NavBar />
    <div class="row" style={{marginRight: 0}}>
      <div class="col-xs-12 col-sm-4 col-md-3 col-lg-2" style={{paddingRight: 0}}>
        <SideBar />
      </div>
      <div className="col-xs-12 col-sm-8 col-md-9 col-lg-10 content">
        <Card className="p-3">
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <span>Данные эксперимента</span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Датасет, предназначенный для систематизирования экспериментальных данных.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <span>Первичные данные</span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  Датасет, предназначенный для анализа и обработки первичных данных.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <span>Датасет 3</span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  Информация о функциональности датасета 3.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <span>Датасет 4</span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  Информация о функциональности датасета 4.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                <span>Датасет 5</span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  Информация о функциональности датасета 5.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5">
                <span>Датасет 6</span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
                  Информация о функциональности датасета 6.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Card>
      </div>
    </div>
  </>
}
export default Dataset;
