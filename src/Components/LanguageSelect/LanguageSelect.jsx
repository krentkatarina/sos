import React, { useState } from 'react';
import './LanguageSelect.css';
import i18n from 'i18next';

const LanguageSelect = () => {
    const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('ENG');

  const languages = [
    { code: 'en', label: 'ENG' },
    { code: 'de', label: 'DEU' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language.label);
    i18n.changeLanguage(language.code); // Меняем язык через i18next
    setIsOpen(false);
  };

  return (
    <div className="language-selector">
      <button className="selected-language" onClick={toggleMenu}>
        {selectedLanguage} <span className="arrow">▼</span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {languages.map((language) => (
            <li
              key={language.code}
              className={`dropdown-item ${language.label === selectedLanguage ? 'active' : ''}`}
              onClick={() => handleLanguageSelect(language)}
            >
              {language.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageSelect