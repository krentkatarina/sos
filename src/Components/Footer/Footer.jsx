import './Footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
  return (
    <footer className='footer'>
        <div className="footer__container">
            <div className="footer__row">
                <div className="footer__row-logo">
                    <img src="images/logo.png" alt="logo" />
                </div>
                <ul className='footer__row-list'>
                    <li className='footer__row-item'>{t('footerL1')}</li>
                    <li className='footer__row-item'>{t('footerL2')}</li>
                    <li className='footer__row-item'>{t('footerL3')}</li>
                    <li className='footer__row-item'>{t('footerL4')}</li>
                    <li className='footer__row-item'>{t('footerL5')}</li>
                </ul>
                <div className="footer__row-socials">
                    <img className='footer__row-social' src="images/facebook.png" alt="facebook" />
                    <img className='footer__row-social' src="images/twitter.png" alt="twitter" />
                    <img className='footer__row-social' src="images/twitch.png" alt="twitch" />
                </div>
            </div>
            <div className="footer__info">
                <p className='footer__info-description'>{t('footerInfo')}</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer