import styles from './Footer.module.scss';
import { useTranslation } from 'react-i18next';
import PlatformsLinks from '../components/PlatformsLinks';

function Footer () {

    const { t } = useTranslation();

    return (
        <footer>
            <span className={styles.copyrights}>{t('footer.copyrights')}</span>
            <PlatformsLinks/>
        </footer>
    )
}

export default Footer