import styles from './Landing.module.scss';
import photo from '../assets/photo.png';
import { Trans } from 'react-i18next';

function Landing () {



    return (
        <section className={styles.landing} aria-label='Landing'>
            <div>
                <p className={styles.welcome}><Trans i18nKey={'landing.welcome'} components={{greeting: <span className={styles.greeting}/>, introduction: <span className={styles.introduction}/>, name: <span className={styles.name}/>, title: <span className={styles.title}/>}}/></p>
            </div>
            <div className={styles.photoContainer}>
                <img src={photo} alt='photo' className={styles.photo}/>
            </div>
        </section>
    )
}

export default Landing