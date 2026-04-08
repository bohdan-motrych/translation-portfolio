import styles from './Landing.module.scss';
import photo from '../assets/photo.png';
import { Trans } from 'react-i18next';

function Landing () {



    return (
        <section className={styles.landing} aria-label='Landing'>
            <div>
                <h1><Trans i18nKey={'landing.welcome'} components={{greeting: <span className={styles.greeting}/>, introduction: <span className={styles.introduction}/>, name: <span className={styles.name}/>, title: <span className={styles.title}/>}}/></h1>
            </div>
            <div className={styles.photoContainer}>
                <img src={photo} alt='Professional headshot of Bohdan Motrych, C2 English-Ukrainian Technical Translator' className={styles.photo}/>
            </div>
        </section>
    )
}

export default Landing