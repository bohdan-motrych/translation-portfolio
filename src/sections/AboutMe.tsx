import styles from './AboutMe.module.scss';
import { useTranslation } from 'react-i18next';
import List from '../components/List';
import type { ListItem } from '../components/List';

function AboutMe() {

    const {t} = useTranslation();

    const listAboutMe: ListItem[] = [
        {id: 1, text: 'info.aboutMe.languages', subItems: [
            {id: 1.1, text: 'info.aboutMe.ukrainian'},
            {id: 1.2, text: 'info.aboutMe.english'}, 
        ]},
        {id: 2, text: 'info.aboutMe.catTools', subItems: [
            {id: 2.1, text: 'info.aboutMe.trados'},
            {id: 2.2, text: 'info.aboutMe.smartcat'}
        ]},
        {id: 3, text: 'info.aboutMe.specialisation', subItems: [
            {id: 3.1, text: 'info.aboutMe.technical'},
            {id: 3.2, text: 'info.aboutMe.localisation'}
        ]},
        {id: 4, text: 'info.aboutMe.additional', subItems: [
            {id: 4.1, text: 'info.aboutMe.mtpe'},
            {id: 4.2, text: 'info.aboutMe.glossary'},
            {id: 4.3, text: 'info.aboutMe.dtp'}
        ]},
    ]

    return (
        <section className={styles.aboutMe} aria-labelledby='about'>
            <h2 id='about'>{t('info.aboutMe.title')}</h2>
            <List items={listAboutMe}/>
        </section>
    )
}

export default AboutMe