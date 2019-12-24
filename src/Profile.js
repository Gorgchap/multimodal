import { Card, Form, Image } from "react-bootstrap";
import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

function Profile() {
  return <>
    <NavBar />
    <div className="row" style={{marginRight: 0}}>
      <div className="col-xs-12 col-sm-4 col-md-3 col-lg-2" style={{paddingRight: 0}}>
        <SideBar/>
      </div>
      <div className="col-xs-6 offset-3 col-sm-8 offset-sm-0 col-md-7 offset-md-1 col-lg-6 offset-lg-2 content">
        <Card>
          <Card.Body>
            <Image src="../../avatar.jpg" width={200} roundedCircle style={{marginLeft: 'calc(50% - 100px)', marginBottom: '10px'}} />
            <Card.Text>
              <div className="row">
                <div className="col-6">
                  <Form.Label style={{marginBottom: 0}}>Фамилия</Form.Label>
                  <Form.Control value="Сапегин" className="mb-3" />
                  <Form.Label style={{marginBottom: 0}}>Имя</Form.Label>
                  <Form.Control value="Сергей" className="mb-3" />
                  <Form.Label style={{marginBottom: 0}}>Отчество</Form.Label>
                  <Form.Control value="Владимирович" className="mb-3" />
                  <Form.Label style={{marginBottom: 0}}>Учёная степень</Form.Label>
                  <Form.Control as="select" className="mb-3">
                    <option>Кандидат технических наук</option>
                    <option>Кандидат физико-математических наук</option>
                    <option>Кандидат экономических наук</option>
                  </Form.Control>
                </div>
                <div className="col-6">
                  <Form.Label style={{marginBottom: 0}}>E-mail</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" value="svsapegin2@mail.ru" className="mb-3" />
                  <Form.Label style={{marginBottom: 0}}>Интересы, хобби</Form.Label>
                  <Form.Control as="textarea" rows="7" className="mb-3" style={{resize: 'none'}} placeholder="Всякая всячина" />
                </div>
              </div>
              <div className="text-center"><button className="btn btn-primary">Редактировать</button></div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  </>
}
export default Profile;
