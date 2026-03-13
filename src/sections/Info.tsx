import styles from './Info.module.scss'
import { useTranslation } from 'react-i18next'

function Info () {

    const {t} = useTranslation();

    return (
        <>
            <section className={styles.aboutMe}>
                <h2>{t('info.aboutMe.title')}</h2>
            </section>
            <section className={styles.aboutWork}>
                
            </section>
        </>
    )
}

export default Info