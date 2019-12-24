import {Accordion, Card, Table} from "react-bootstrap";
import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

function Experiment() {
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
                <span>Аннотация</span>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="badge badge-primary float-right">Изменить</a>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Уже создана система, позволяющая не просто стимулировать определенные регионы мозга человека, как у подопытной крысы, но и также система прямой передачи информации из компьютера в нейроны вашего мозга. Вызывает также страх и повальная грядущая чипизация населения, позволяющая отслеживать положение людей в пространстве и осуществлять мониторинг их биологического состояния. И совсем уже запредельным представляются невербальные способы общения, уводящие человека в пространство передаваемых из центра команд, исполняемых одновременно, как, например, мгновенный поворот всех рыб в одной стае.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <span>Цель</span>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="badge badge-primary float-right">Изменить</a>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  Будущие коммуникации неизбежно станут антропоцентричными, в силу хотя бы известного философии техники понятия органопроекции (нем. Organprojektionsthese), то есть их целью будет выстраивание вокруг человека определённого индивидуального пространства. Такая цель вынудит человека оттачивать удобные для коммуникаций с вещами интерфейсы и протоколы передачи данных, настроенные на выявление человеческой индивидуальности. Сам факт возможности общения вещей (будущее состояние именуется разумной средой (англ.)русск.) напоминает собой оживление материи (см. гилозоизм), от которого останется только шаг до полного слияния человека с природой путём переноса сознания на искусственные носители.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <span>Задачи</span>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <button className="badge badge-primary float-right">Изменить</button>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <Table bordered hover className="text-center">
                    <thead>
                      <tr>
                        <th>Описание</th>
                        <th>Класс задачи</th>
                        <th>Добавлена</th>
                        <th>Приоритет</th>
                        <th>Статус</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Осуществить визуальную разметку</td>
                        <td>Обработка</td>
                        <td>4 часа назад</td>
                        <td>Средний</td>
                        <td className="text-success">Подтверждено</td>
                      </tr>
                      <tr>
                        <td>Разметить аудиоданные эксперимента</td>
                        <td>Обработка</td>
                        <td>6 часов назад</td>
                        <td>Высокий</td>
                        <td className="text-warning">В работе</td>
                      </tr>
                      <tr>
                        <td>Сравнить данные в треках 4, 6 и 7</td>
                        <td>Анализ</td>
                        <td>5 часов назад</td>
                        <td>Средний</td>
                        <td className="text-success">Подтверждено</td>
                      </tr>
                      <tr>
                        <td>Провести корреляционный анализ</td>
                        <td>Анализ</td>
                        <td>2 часа назад</td>
                        <td>Средний</td>
                        <td className="text-danger">Отменено</td>
                      </tr>
                      <tr>
                        <td>Разработать стратегию ML</td>
                        <td>Машинное обучение</td>
                        <td>2 дня назад</td>
                        <td>Низкий</td>
                        <td className="text-danger">Отменено</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <span>Методы</span>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="badge badge-primary float-right">Изменить</a>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  Здесь приводится описание теоретически обоснованных и реализуемых на практике методов исследования.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                <span>Данные</span>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="badge badge-primary float-right">Изменить</a>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  Первичные данные (возможно, с первоначальной обработкой).
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="5">
                <span>Задачи</span>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="badge badge-primary float-right">Изменить</a>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
                  Фундаментальные выводы с возможностью практического использования.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Card>
      </div>
    </div>
  </>
}
export default Experiment;
