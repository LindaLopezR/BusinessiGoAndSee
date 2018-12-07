import React, { Component } from 'react';
import { Panel, Image } from 'react-bootstrap';

class NoContent extends Component {
  render() {
    return (
      <Panel bsStyle="info">
        <Panel.Body className="text-center">
          <Image src="/img/analisis.png" responsive bsClass="text-center" />
          <h3 className="no-content-title">No hay contenido por mostrar</h3>
        </Panel.Body>
      </Panel>
    )
  }
}

export default NoContent;