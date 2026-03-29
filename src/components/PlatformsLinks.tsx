import styles from './PlatformsLinks.module.scss';
import ProZ from '../assets/footer/proz.svg?react'
import SmartCat from '../assets/footer/smartcat.svg?react';
import GitHub from '../assets/footer/github.svg?react'
import LinkedIn from '../assets/footer/linkedin.svg?react';

export default function PlatformsLinks() {

    return (
        <div className={styles.links}>
            <a href='https://www.proz.com/next/profile/4597742/overview' target='_blank' rel='noopener noreferrer' className={styles.proz}><ProZ className={styles.icon}/></a>
            <a href='https://smartcat.com/marketplace/user/bohdan-motrych-80cf86e6' target='_blank' rel='noopener noreferrer' className={styles.smartcat}><SmartCat className={styles.icon}/></a>
            <a href='https://github.com/bohdan-motrych' target='_blank' rel='noopener noreferrer' className={styles.github}><GitHub className={styles.icon}/></a>
            <a href='https://www.linkedin.com/in/bohdan-motrych/' target='_blank' rel='noopener noreferrer' className={styles.linkedin}><LinkedIn className={styles.icon}/></a>
         </div>
    )
}