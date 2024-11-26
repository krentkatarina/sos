import React from 'react'
import Button from '../../../UI/Button/Button'
import Quote from './Quote/Quote'
import './Quotes.css';
import { useTranslation } from 'react-i18next';

const Quotes = () => {
  const { t } = useTranslation();
  return (
    <section className='quotes'>
        <div className="quotes__container">
            <div className="quotes__container-left">
                <h3 className='quotes__subtitle'>{t('quoteSubtitle')}</h3>
                <h2 className='quotes__title'>{t('quoteTitle')}</h2>
                <p className='quotes__description'>{t('quoteDesc')}</p>
                <Button title={t('quoteButton')} />
            </div>
            <div className="quotes__container-right">
                <Quote title="Evan Lahti" subtitle={t('quoteCardP1')} image="images/avatar-1.jpg" description={t('quoteCardD1')} date={t('quoteCardT1')} />
                <Quote title="Jada Griffin" subtitle={t('quoteCardP2')} image="images/avatar-2.jpg" description={t('quoteCardD2')} date={t('quoteCardT2')} />
                <Quote title="Aaron Williams" subtitle={t('quoteCardP3')} image="images/avatar-3.jpg" description={t('quoteCardD3')} date={t('quoteCardT3')} />
            </div>
        </div>
    </section>
  )
}

export default Quotes