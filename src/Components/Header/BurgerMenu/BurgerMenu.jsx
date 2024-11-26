import React, { useState } from 'react'
import './BurgerMenu.css';
import { useTranslation } from 'react-i18next';

const BurgerMenu = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false); // Состояние для управления меню

    const toggleMenu = () => {
      setIsOpen(!isOpen); // Переключение состояния
    };
  
    return (
      <div className="burger-menu">
        <div 
          className={`burger-icon ${isOpen ? "open" : ""}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
  
        <div className={`menu ${isOpen ? "show" : ""}`}>
        <nav>
                <ul className='header__list'>
                    <li className='header__item'>{t('headerItem1')}</li>
                    <li className='header__item'>{t('headerItem2')}</li>
                    <li className='header__item'>{t('headerItem3')}</li>
                    <li className='header__item'>{t('headerItem4')}</li>
                    <li className='header__item'>{t('headerItem5')}</li>
                </ul>
            </nav>
        </div>
      </div>
    );
}

export default BurgerMenu