import './MainBanner.css';
import Header from '../../Header/Header';
import { useTranslation } from 'react-i18next';

const MainBanner = () => {
  const { t } = useTranslation();

  return (
    <div className='main-banner'>
        <div className="main-banner__container">
            <Header />
            <div className="main-banner__content">
              <h1 className='main-banner__title'>{t('title')}</h1>
              <p className='main-banner__description'>{t('description')}</p>
              <button className='main-banner__button'>{t('mainButton')} <span className='main-banner__span'>{t('price')}</span></button>
            </div>
        </div>
    </div>
  )
}

export default MainBanner