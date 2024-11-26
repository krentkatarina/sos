import './Faq.css';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const { t } = useTranslation();
  const faqItems = t('faq', { returnObjects: true });
    
  
    return (
      <section className="faq">
        <div className="faq__container">
            <div className="faq__content">
                <h3 className='faq__subtitle'>{t('featuresSubtitle')}</h3>
                <h2 className="faq__title">{t('featuresTitle')}</h2>
                <div className="faq__items">
                {faqItems.map((item, index) => (
              <details className="faq__item" key={index}>
                <summary className="faq__question">
                  <span className="faq__title-span">{item.question}</span>
                </summary>
                <p className="faq__answer">{item.answer}</p>
              </details>
            ))}
                </div>
            </div>
        </div>
      </section>
    );
  };
  
  export default FAQ;