import styles from './Samples.module.scss';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import SampleCard from '../components/SampleCard';

import Physics from "../samples/physics.webp";
import PhysicsThumb from "../samples/physics.avif";
import Statistics from "../samples/statistics.webp";
import StatisticsThumb from "../samples/statistics.avif";

function Samples () {

    const {t} = useTranslation();

    return (
        <section className={styles.samples} aria-labelledby='samples'>
            <h2 id='samples'>{t('samples.heading')}</h2>
            <div>
                <SampleCard title={t('samples.physics')} desc={t('samples.physics')} pair={t('samples.engUkr')} thumb={PhysicsThumb} img={Physics}/>
                <SampleCard title={t('samples.statistics')} desc={t('samples.statistics')} pair={t('samples.engUkr')} thumb={StatisticsThumb} img={Statistics}/>
                <SampleCard title={t('samples.flying')} desc={t('samples.flying')} pair={t('samples.engUkr')} thumb='null' img='null'/>
                <SampleCard title={t('samples.statistics')} desc={t('samples.statistics')} pair={t('samples.ukrEng')} thumb='null' img='null'/>
                <SampleCard title={t('samples.portfolio.title')} desc={<Trans i18nKey={'samples.portfolio.desc'} components={{a: <a href='https://github.com/bohdan-motrych/translation-portfolio' target='_blank' rel='noopener noreferrer'/>, b: <b />}}/>} pair={t('samples.ukrEng')} thumb='null' img='null'/>
            </div>
        </section>
    )
}

export default Samples