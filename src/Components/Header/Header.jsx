import React, { useState } from "react";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import "./Header.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Управление состоянием меню

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Переключаем состояние
  };

  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src="images/logo.png" alt="logo" />
        <ul className={`header__list ${isMenuOpen ? "active" : ""}`}>
          <li className="header__item">{t("headerItem1")}</li>
          <li className="header__item">{t("headerItem2")}</li>
          <li className="header__item">{t("headerItem3")}</li>
          <li className="header__item">{t("headerItem4")}</li>
          <li className="header__item">{t("headerItem5")}</li>
        </ul>
        <LanguageSelect />
        <div
          className={`header__burger-icon ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;