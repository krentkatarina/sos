import './SliderBlock.css';
import Slider from '../Slider/Slider';
import { useTranslation } from 'react-i18next';

const SliderBlock = () => {
  const { t } = useTranslation();
  return (
    <section className='battle'>
        <div className='battle__container'>
            <div className="battle__container-left">
                <h3 className='battle__subtitle'>{t('battleSubtitle')}</h3>
                <h2 className='battle__title'>{t('battleTitle')}</h2>
                <p className='battle__description'>{t('battleDescription1')} </p>
                <p className='battle__description'>{t('battleDescription2')}.</p>
            </div>
            <Slider />
        </div>
    </section>
  )
}

export default SliderBlock