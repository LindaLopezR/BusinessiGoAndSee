import React, { Component } from 'react';
import { Grid, Row, Col, Tooltip, OverlayTrigger, Label, Panel } from 'react-bootstrap';

const numbers = [1, 2, 3, 4, 5, 6, 7];

function TooltipStadistics({id, children, tooltip}) {
  return (
    <OverlayTrigger
      overlay={<Tooltip id={id}>{tooltip}</Tooltip>}
      placement="top"
      delayShow={300}
      delayHide={150}
    >
      {children}
    </OverlayTrigger>
  )
}

function ListItem(props) {
  return (
    <Col sm={6} md={3}>
      <Panel>
        <Panel.Heading>Sección {props.value}</Panel.Heading>
        <Panel.Body>
          <p className="title-main">Auditorias</p>
          <p className="text-center"><span className="audit-onTime">46%</span><br />A tiempo</p>
          
          <h4 className="text-center">
            <TooltipStadistics tooltip="Auditorias creadas" id="tooltip-1">
              <Label bsStyle="success"><i className="edit icon"></i> 1</Label>
            </TooltipStadistics>{' '}
            <TooltipStadistics tooltip="Auditorias tarde" id="tooltip-2">
              <Label bsStyle="warning"><i className="warning sign icon"></i> 2343</Label>
            </TooltipStadistics>{' '}
            <TooltipStadistics tooltip="Auditorias no realizadas" id="tooltip-3">
              <Label bsStyle="danger"><i className="remove icon"></i> 5675</Label>
            </TooltipStadistics>
          </h4>

          <hr className="line-item" />
          <p className="title-main">Tags</p>
          <h4 className="text-center">
            <TooltipStadistics tooltip="Tarjetas rojas creadas" id="tooltip-4">
              <Label bsStyle="danger"><i className="edit icon"></i> 3455</Label>
            </TooltipStadistics>{' '}
            <TooltipStadistics tooltip="Tarjetas amarillas creadas" id="tooltip-5">
              <Label bsStyle="warning"><i className="edit icon"></i> 756</Label>
            </TooltipStadistics>
          </h4>
        </Panel.Body>
      </Panel>
    </Col>
  )
}

function SectionItem(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <ListItem key={number.toString()} value={number} />
  );

  return (
    <div className="row">
      {listItems}
    </div>
  )
}

export default class Dashboard extends Component {

  renderStadistics(icon, title) {
    const style = 'icon-stadistics big ' + (icon) + ' icon';
    
    return (
      <Col sm={6} md={3}>
        <i className={style}></i>
        <p className="number-stadistics">5456</p>
        <p>{title}</p>
      </Col>
    )
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col md={8} mdOffset={2} className="general-statistics">
            <h4>Últimos 7 días</h4>
            <Row>
              <Col md={8}>
                <p className="title-main">Auditorias</p>
                <hr className="line-title" />
                <Row className="text-center">
                  {this.renderStadistics('edit', 'Creadas')}
                  {this.renderStadistics('check square outline', 'A tiempo')}
                  {this.renderStadistics('warning sign', 'Tarde')}
                  {this.renderStadistics('remove', 'No realizadas')}
                </Row>
              </Col>
              <Col md={4}>
                <p className="title-main">Tags</p>
                <hr className="line-title" />
                <Row>
                  <Col xs={6} className="text-center">
                    <i className="icon-stadistics big tags icon"></i>
                    <p className="number-stadistics">5456</p>
                    <p>Creadas</p>
                  </Col>
                  <Col xs={6} className="tag-stadistics">
                    <p><span className="number-stadistics">234</span> Rojas</p>
                    <p><span className="number-stadistics">234</span> Amarillas</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>

        <SectionItem numbers={numbers} />

      </Grid>
    )
  }
}