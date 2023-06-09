import React from 'react'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          NTBPhuoc (Rikkei Academy)
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {
              props.listTab.map((session) => 
                <li key={session.sessionNumber} className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => {
    
                    }}
                  >
                    Session {session.sessionNumber}
                  </a>
                  <ul className="dropdown-menu">
                    {
                      session.sessionHomeWork.map((homeWork, index) => 
                        <li key={session.sessionNumber + index}>
                          <a onClick={() => props.selectTab(homeWork)} className="dropdown-item" href="#">
                            {homeWork}
                          </a>
                        </li>
                      )
                    }
                  </ul>
                </li>
              )
            }
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}
