import './Requirements.css';
import RequirementsBlock from './RequirementsBlock/RequirementsBlock';
import { useTranslation } from 'react-i18next';

const Requirements = () => {
    const { t } = useTranslation();
    return (
    <section className='requirements'>
        <div className="requirements__container">
            <h3 className='requirements__subtitle'>{t('requirementsSubtitle')}</h3>
            <h2 className='requirements__title'>{t('requirementsTitle')}</h2>
            <div className="requirements__content">
                <div className="requirements__row">
                    <RequirementsBlock title={t('requirementsOSTitle')} description={t('requirementsOSDesc')} />
                    <RequirementsBlock title={t('requirementsProcessorTitle')}description={t('requirementsProcessorDesc')} />
                </div>
                <div className="requirements__row">
                    <RequirementsBlock title={t('requirementsMemoryTitle')} description={t('requirementsMemoryDesc')} />
                    <RequirementsBlock title={t('requirementsStorageTitle')} description={t('requirementsStorageDesc')} />
                </div>
                <RequirementsBlock title={t('requirementsGraphicsTitle')} description={t('requirementsGraphicsDesc')} />
            </div>
        </div>
    </section>
  )
}

export default Requirements