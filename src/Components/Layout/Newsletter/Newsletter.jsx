import './Newsletter.css';
import Button from '../../../UI/Button/Button'
import { useTranslation } from 'react-i18next';

const Newsletter = () => {
    const { t } = useTranslation();
  return (
    <section className='newsletter'>
        <div className="newsletter__container">
            <div className="newsletter__container-left">
                <img className='newsletter__image' src="images/newsletter.png" alt="newsletter-image" />
            </div>
            <div className="newsletter__container-right">
                <h3 className='newsletter__subtitle'>{t('newsletterSubtitle')}</h3>
                <h2 className="newsletter__title">{t('newsletterTitle')} </h2>
                <p className='newsletter__description'>{t('newsletterDesc')}</p>
                <form className="newsletter__form">
                    <label className='newsletter__label' htmlFor="">
                        <input className='newsletter__input' placeholder='aliciliniavopir@gmail.com' type="text" />
                    </label>
                    <Button  title={t('newsletterButton')} />
                </form>
            </div>
        </div>
    </section>
  )
}

export default Newsletter