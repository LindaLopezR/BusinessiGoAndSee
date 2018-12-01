import React from 'react';

export const MainLayout = ({content}) => (
  <div className='main-layout'>
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand">iGoAndSee</a>
        </div>

        <div className="collapse navbar-collapse navbar-right " id="navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="/">Action</a></li>
                <li><a href="/anotherAction">Another action</a></li>
              </ul>
            </li>
          </ul>
        </div>

      </div>
    </nav>

    <div className="container contentMain">
      {content}
    </div>

    <footer>
      <nav className="navbar navbar-inverse navbar-fixed-bottom">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand navbar-center">
              iGoAndSee
            </a>
          </div>
        </div>
      </nav>
    </footer>
    
  </div>
)