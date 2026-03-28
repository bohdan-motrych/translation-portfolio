import styles from './Footer.module.scss';
import { useTranslation } from 'react-i18next';
import ProZ from '../assets/footer/proz.svg?react'
import SmartCat from '../assets/footer/smartcat.svg?react';
import GitHub from '../assets/footer/github.svg?react'
import LinkedIn from '../assets/footer/linkedin.svg?react';

function Footer () {

    const { t } = useTranslation();

    return (
        <footer>
            <span>{t('footer.copyright')}</span>
            <div className={styles.links}>
                <a href='https://' target='_blank' rel='noopener noreferrer' className={styles.proz}><ProZ className={styles.icon}/></a>
                <a href='https://smartcat.com/marketplace/user/bohdan-motrych-80cf86e6' target='_blank' rel='noopener noreferrer' className={styles.smartcat}><SmartCat className={styles.icon}/></a>
                <a href='https://github.com/bohdan-motrych' target='_blank' rel='noopener noreferrer' className={styles.github}><GitHub className={styles.icon}/></a>
                <a href='https://' target='_blank' rel='noopener noreferrer' className={styles.linkedin}><LinkedIn className={styles.icon}/></a>
            </div>
        </footer>
    )
}

export default Footer