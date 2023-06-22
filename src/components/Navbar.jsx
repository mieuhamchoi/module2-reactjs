import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MenuBtn from './MenuBtns/MenuBtn'
import './Navbar.scss'
import { Col, Row } from "antd";
export default function Navbar(props) {
  const [openMenu, setOpenMenu] = useState(false);
  const [result, setResult] = useState([]);
  const [searchInfo, setSearchInfo] = useState("");
  const { t } = useTranslation();
  const [menuColor, setMenuColor] = useState('black')
  const [menuPopColor, setMenuPopColor] = useState('white')
  const [menuPopColorText, setMenuPopColorText] = useState('black')
  const [searchIconColor, setSearchIconColor] = useState('grey')

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
    if (searchInfo != "") {
      setResult(searchBySessionHomeWorkName(searchInfo));
    }
  }, [searchInfo]);

  function getMode() {
    return localStorage.getItem('mode') ? localStorage.getItem('mode') : 'light'
  }

  useEffect(() => {
    document.querySelector('.logo_img').style.setProperty('--text-color', getMode() == 'light' ? 'black' : 'white')

    setMenuColor(getMode() == 'light' ? 'black' : 'white')
    setMenuPopColor(getMode() == 'light' ? 'white' : 'black')
    setMenuPopColorText(getMode() == 'light' ? 'black' : 'white')
    setSearchIconColor(getMode() == 'light' ? 'grey' : 'white')
  }, [])
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* Logo project */}
        <div className="logos">
          <Link style={{ fontWeight: "700" }} className="logo_img navbar-brand" to="">
            NTBPhuoc (Rikkei Academy)
          </Link>
          <div onMouseEnter={() => {
            setOpenMenu(true)
            setMenuColor(menuColor)
          }} onMouseLeave={() => {
            setOpenMenu(false)
            setMenuColor(menuColor)
          }} className="logo_menu_btn">
            <div  onClick={() => setOpenMenu(false)}>
              <MenuBtn open={openMenu} color={menuColor}/>
            </div>
            <span onClick={() => setOpenMenu(false)} style={{color: menuColor}} className="logo_menu_btn-text">{t('category')}</span>
            {/* Menu bar */}
            <div style={{backgroundColor: menuPopColor}} className={`menu_pops ${openMenu ? 'show' : ''}`}>
              <Row
                gutter={{
                  xs: 8,
                  sm: 16,
                  md: 24,
                  lg: 32,
                }}
              >
                {props.listTab.map((session) => 
                  <Col
                    style={{ marginBottom: "20px", minWidth: "100px" }}
                    span={4}
                  >
                      <div key={session.sessionNumber} className="nav-item dropdown">
                        <span
                          className="nav-link dropdown-toggle session-text"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          style={{color: menuPopColorText}}
                          // onClick={() => navigate(session.path)}
                        >
                          {t("session")} {session.sessionNumber}
                        </span>
                        <ul className="dropdown-menu">
                          {session.sessionHomeWork.map((homeWork, index) => (
                            <li key={session.sessionNumber + index}>
                              <Link onClick={() => {
                                setOpenMenu(!openMenu)
                              }} className="session-sub-text dropdown-item" to={homeWork.path}>
                                {homeWork.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                  </Col>
                )}
              </Row>
            </div>
          </div>
        </div>
        {/* Search Bar */}
        <div
          style={{ position: "relative", minWidth: "200px" }}
          className="d-flex"
          role="search"
        >
          <input
            className="form-control me-2"
            type="search"
            aria-label="Search"
            placeholder={t("searchHomeWork")}
            value={searchInfo}
            onChange={(e) => {
              setSearchInfo(e.target.value);
            }}
          />
          <i
            style={{
              position: "absolute",
              right: "-20px",
              top: "10px",
              fontSize: "20px",
              color: searchIconColor,
            }}
            className="fa-solid fa-magnifying-glass"
          ></i>
          {result.length > 0 ? (
            <div className="searchResults">
              {result.map((item, index) => (
                <Link
                  onClick={() => {
                    setSearchInfo("");
                    setResult([]);
                  }}
                  key={uuidv4()}
                  className="result-items"
                  to={item.path}
                  rel="noopener noreferrer"
                >
                  #{index + 1}/ {item.name} (Session {item.session})
                </Link>
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </nav>
  );
}
