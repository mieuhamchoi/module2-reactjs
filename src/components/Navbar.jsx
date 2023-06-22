import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation  } from 'react-i18next';

export default function Navbar(props) {
  const navigate = useNavigate();
  const [result, setResult] = useState([]);
  const [searchInfo, setSearchInfo] = useState('');
  const { t } = useTranslation();
  function searchBySessionHomeWorkName(infoSearch) {
    const results = [];
  
    for (const tab of props.listTab) {
      for (const sessionHomeWork of tab.sessionHomeWork) {
        const name = sessionHomeWork.name.toLowerCase();
        if (name.includes(infoSearch.toLowerCase())) {
          sessionHomeWork.session = tab.sessionNumber;
          results.push(sessionHomeWork);
        }
      }
    }
  
    return results;
  }
  
  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }

  useEffect(() => {
    if (searchInfo != '') {
      setResult(searchBySessionHomeWorkName(searchInfo));
    }
  }, [searchInfo])

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link style={{fontWeight: '700'}} className="navbar-brand" to="">
          NTBPhuoc (Rikkei Academy)
        </Link>
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
            {props.listTab.map((session) => (
              <li key={session.sessionNumber} className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={() => navigate(session.path)}
                >
                  {t('session')} {session.sessionNumber}
                </span>
                <ul className="dropdown-menu">
                  {session.sessionHomeWork.map((homeWork, index) => (
                    <li key={session.sessionNumber + index}>
                      <Link
                        className="dropdown-item"
                        to={homeWork.path}
                      >
                        {homeWork.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div style={{position: "relative", minWidth: "200px"}} className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              aria-label="Search"
              placeholder={t('searchHomeWork')}
              value={searchInfo}
              onChange={(e) => {
                setSearchInfo(e.target.value)
              }}
            />
            <i style={{position: "absolute", right: "-20px", top: "10px", fontSize: "20px", color: "grey"}} className="fa-solid fa-magnifying-glass"></i>
            {
              result.length > 0 ?             
                <div className="searchResults">
                  {
                    result.map((item, index) => 
                      <Link onClick={() => {
                        setSearchInfo("");
                        setResult([]);
                      }} key={uuidv4()} className="result-items" to={item.path} rel="noopener noreferrer">
                        #{index + 1}/ {item.name} (Session {item.session})
                      </Link>
                    )
                  }
                </div> :
              <></>
            }
          </div>
      </div>
    </nav>
  );
}
