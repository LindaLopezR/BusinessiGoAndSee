import React from 'react';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

export const MainLayout = ({content}) => (
  <div>
    <Navbar inverse collapseOnSelect fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">iGoAndSee</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavDropdown eventKey={1} title="Menu" id="navbar-collapse">
            <MenuItem eventKey={1.1} href="/"><i className="dashboard icon"></i> Dashboard</MenuItem>
            <MenuItem eventKey={1.2} href="/audits"><i className="browser icon"></i> Auditorias</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <div className="content-main container-fluid">
      {content}
    </div>

    <Navbar inverse fixedBottom>
      <Navbar.Header>
        <Navbar.Brand className="navbar-center">
          <a>iGoAndSee</a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  </div>
)