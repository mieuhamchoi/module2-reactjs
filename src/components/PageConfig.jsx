import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

export default function PageConfig() {
  const { t } = useTranslation();
  const [showConfigMenu, setShowConfigMenu] = useState(false);

  const [languages, setLanguages] = useState([
    {
      id: 0,
      name: "Việt Nam (Vi)",
      iconUrl:
        "https://api.mieuhamchoi.fun/uploads/picture/subject/1686729520612-858194286.png",
      code: "vi",
    },
    {
      id: 1,
      name: "English (EN)",
      iconUrl:
        "https://api.mieuhamchoi.fun/uploads/picture/subject/1686729520611-991329899.png",
      code: "en",
    },
  ]);

  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }

  function getIcon(code) {
    for (let i in languages) {
      if (languages[i].code == code) {
        return languages[i];
      }
    }
    return null;
  } 

  function getMode() {
    return localStorage.getItem('mode') ? localStorage.getItem('mode') : 'light'
  }
  return (
    <div className={`pageConfig ${showConfigMenu ? "show" : ""}`}>
      <div className="pageConfig_titles">
        <span>{t("myConfig")}</span>
      </div>
      <div className="pageConfig_switchLanguage">
        <div className="dropdown dropdown-items">
          <a
            className="item-btn btn btn-secondary dropdown-toggle selectLanguage_text"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {t("selectLanguage")}
          </a>

          <ul className="dropdown-menu">
            {languages.map((language) => (
              <li
                onClick={() => {
                  i18n.changeLanguage(language.code);
                  localStorage.setItem("language", language.code);
                }}
                style={{ cursor: "pointer" }}
                key={uuidv4()}
              >
                <span className="dropdown-item">{language.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <img className="nowLanguageImg" src={getIcon(i18n.language)?.iconUrl} />
      </div>
      <div className="pageConfig_switchMode">
          <div className="switchMode_titles">
              <span className="titles-text">Mode: <div className={`nowMode ${getMode()}`}></div></span>
          </div>
          <div className="switchMode_options">
              <span onClick={() => {
                localStorage.setItem('mode', 'light')
                window.location.reload()
              }} className="options_item light">Light</span>
              <span onClick={() => {
                localStorage.setItem('mode', 'dark')
                window.location.reload()
              }} className="options_item dark">Dark</span>
          </div>
      </div>
      <div
        onMouseEnter={() => {
          setShowConfigMenu(true);
        }}
        onClick={() => {
          setShowConfigMenu(false);
        }}
        className="pageConfig_control"
      >
        {showConfigMenu ? (
          <i className="fa-solid fa-angles-right"></i>
        ) : (
          <i className="fa-solid fa-angles-left"></i>
        )}
      </div>
    </div>
  );
}
