import styles from './Samples.module.scss';
import { useTranslation } from 'react-i18next';
import SampleCard from '../components/SampleCard';

import Physics from "../samples/physics.webp";
import PhysicsThumb from "../samples/physics.avif";
import Statistics from "../samples/statistics.webp";
import StatisticsThumb from "../samples/statistics.avif";

function Samples () {

    const {t} = useTranslation();

    return (
        <section className={styles.samples} aria-labelledby='samples'>
            <h2 id='samples'>Samples</h2>
            <div>
                <SampleCard title={t('samples.physics.title')} desc={t('samples.physics.desc')} pair={t('samples.engUkr')} thumb={PhysicsThumb} img={Physics}/>
                <SampleCard title={t('samples.statistics.title')} desc={t('samples.statistics.desc')} pair={t('samples.engUkr')} thumb={StatisticsThumb} img={Statistics}/>
                <SampleCard title={t('samples.statistics.title')} desc={t('samples.statistics.desc')} pair={t('samples.engUkr')} thumb='' img=''/>
                <SampleCard title={t('samples.statistics.title')} desc={t('samples.statistics.desc')} pair={t('samples.ukrEng')} thumb='' img=''/>
                <SampleCard title={t('samples.statistics.title')} desc={t('samples.statistics.desc')} pair={t('samples.ukrEng')} thumb='' img=''/>
            </div>
        </section>
    )
}

export default Samples