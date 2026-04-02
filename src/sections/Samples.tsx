import styles from './Samples.module.scss';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import SampleCard from '../components/SampleCard';

import Physics from '../samples/physics.webp';
import PhysicsThumb from '../samples/physics.avif';
import Statistics from '../samples/statistics.webp';
import StatisticsThumb from '../samples/statistics.avif';
import Aviation from '../samples/aviation.webp';
import AviationThumb from '../samples/aviation.avif';
import Strategy from '../samples/strategy.webp';
import StrategyThumb from '../samples/strategy.avif';
import Portfolio from '../samples/portfolio.webp';
import PortfolioThumb from '../samples/portfolio.avif';

function Samples () {

    const {t} = useTranslation();

    return (
        <section className={styles.samples} aria-labelledby='samples'>
            <h2 id='samples'>{t('samples.heading')}</h2>
            <div>
                <SampleCard title={t('samples.physics')} desc={t('samples.physics')} pair={t('samples.engUkr')} thumb={PhysicsThumb} img={Physics}/>
                <SampleCard title={t('samples.statistics')} desc={t('samples.statistics')} pair={t('samples.engUkr')} thumb={StatisticsThumb} img={Statistics}/>
                <SampleCard title={t('samples.aviation')} desc={t('samples.aviation')} pair={t('samples.engUkr')} thumb={AviationThumb} img={Aviation}/>
                <SampleCard title={t('samples.strategy')} desc={t('samples.strategy')} pair={t('samples.ukrEng')} thumb={StrategyThumb} img={Strategy}/>
                <SampleCard title={t('samples.portfolio.title')} desc={<Trans i18nKey={'samples.portfolio.desc'} components={{a: <a href='https://github.com/bohdan-motrych/translation-portfolio' aria-label='GitHun Repo' target='_blank' rel='noopener noreferrer'/>, b: <b />}}/>} pair={t('samples.ukrEng')} thumb={PortfolioThumb} img={Portfolio}/>
            </div>
        </section>
    )
}

export default Samples