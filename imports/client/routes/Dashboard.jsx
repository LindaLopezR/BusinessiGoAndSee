import React, { Component } from 'react';
import { Grid, Row, Col, Tooltip, OverlayTrigger, Label, Panel, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const data = [
  {id: 1, deparment: 'Sporting Goods Sporting Goods', completeDate: '49', audit: 4, tag:3},
  {id: 2, deparment: 'Sporting Goods', completeDate: '9',audit: 37, tag:345},
  {id: 3, deparment: 'Sporting Goods', completeDate: '29', audit: 667, tag:353},
];

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

function ItemSection(props) {
  const panel = props.data.map((item) =>(
    <Col sm={6} md={3} key={item.id}>
      <Panel>
        <Panel.Heading>{item.deparment}</Panel.Heading>
        <Panel.Body>
          <p className="title-main">Auditorias</p>
          <p className="text-center"><span className="audit-onTime">{item.completeDate}%</span><br />A tiempo</p>
          
          <h4 className="text-center">
            <TooltipStadistics tooltip="Auditorias creadas" id="tooltip-1">
              <Label bsStyle="success"><i className="edit icon"></i> {item.audit}</Label>
            </TooltipStadistics>{' '}
            <TooltipStadistics tooltip="Auditorias tarde" id="tooltip-2">
              <Label bsStyle="warning"><i className="warning sign icon"></i> {item.audit}</Label>
            </TooltipStadistics>{' '}
            <TooltipStadistics tooltip="Auditorias no realizadas" id="tooltip-3">
              <Label bsStyle="danger"><i className="remove icon"></i> {item.audit}</Label>
            </TooltipStadistics>
          </h4>

          <hr className="line-item" />
          <p className="title-main">Tags</p>
          <h4 className="text-center">
            <TooltipStadistics tooltip="Tarjetas rojas creadas" id="tooltip-4">
              <Label bsStyle="danger"><i className="edit icon"></i> {item.tag}</Label>
            </TooltipStadistics>{' '}
            <TooltipStadistics tooltip="Tarjetas amarillas creadas" id="tooltip-5">
              <Label bsStyle="warning"><i className="edit icon"></i> {item.tag}</Label>
            </TooltipStadistics>
          </h4>
        </Panel.Body>
      </Panel>
    </Col>
  ))

  return (
    <Row>
      {panel}
    </Row>
  )
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'today'
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

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
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Estadisticas</ControlLabel>
                <FormControl componentClass="select" value={this.state.value} onChange={this.handleChange}>
                <option value="today">Hoy</option>
                <option value="yesterday">Ayer</option>
                <option value="week">Esta semana</option>
                <option value="lastweek">Semana anterior</option>
                <option value="month">Este mes</option>
              </FormControl>
            </FormGroup>
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

        <Row>
          <ItemSection data={data} />
        </Row>

      </Grid>
    )
  }
}

export default Dashboard;