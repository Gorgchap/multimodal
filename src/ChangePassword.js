import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import {Card, Form} from "react-bootstrap";

function ChangePassword() {
  return <>
    <NavBar />
    <div class="row" style={{marginRight: 0}}>
      <div class="col-xs-12 col-sm-4 col-md-3 col-lg-2" style={{paddingRight: 0}}>
        <SideBar />
      </div>
      <div className="col-xs-6 offset-3 col-sm-6 offset-sm-1 col-md-5 offset-md-2 col-lg-4 offset-lg-3 content">
        <Card className="p-0">
          <Card.Body className="p-3">
            <Form.Label style={{marginBottom: 0}}>Текущий пароль</Form.Label>
            <Form.Control type="password" className="mb-3" />
            <Form.Label style={{marginBottom: 0}}>Новый пароль</Form.Label>
            <Form.Control type="password" className="mb-3" />
            <Form.Label style={{marginBottom: 0}}>Подтверждение нового пароля</Form.Label>
            <Form.Control type="password" className="mb-3" />
            <div className="text-center"><button className="btn btn-primary">Изменить</button></div>
          </Card.Body>
        </Card>
      </div>
    </div>
  </>
}
export default ChangePassword;
