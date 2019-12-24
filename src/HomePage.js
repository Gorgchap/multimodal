import Card from "react-bootstrap/Card";
import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

function HomePage() {
  return <>
    <NavBar />
    <div class="row" style={{marginRight: 0}}>
      <div class="col-xs-12 col-sm-4 col-md-3 col-lg-2" style={{paddingRight: 0}}>
        <SideBar />
      </div>
      <div className="col-xs-12 col-sm-8 col-md-9 col-lg-10 content">
        <Card>
          <Card.Body>
            <Card.Title>Репозиторий с мультимодальными данными</Card.Title>
            <Card.Text>
              В современном мире для решения глобальной проблемы коммуникативного взаимодействия людей посредством технических систем используются дополнительные средства передачи информации. В этой связи активно разрабываются мультимодальные человеко-компьютерные интерфейсы. <br/>
              В составе данной платформы можно выделить следующие подсистемы:
              <ul>
                <li>модуль загрузки и выгрузки данных (в том числе интерфейсы пользователей и администратора);</li>
                <li>модуль хранения исходных и размеченных мультимодальных данных;</li>
                <li>модуль с интерфейсами для работы с данными и инструментами для их последующей обработки;</li>
                <li>модуль подключений к платформе.</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  </>
}
export default HomePage;
