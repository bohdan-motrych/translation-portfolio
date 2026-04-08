import styles from './AboutMe.module.scss';
import { useTranslation } from 'react-i18next';
import List from '../components/List';
import type { ListItem } from '../components/List';
import CAE from '/credentials/Bohdan_Motrych_CAE_C2.pdf?url';
import LinkIcon from '../assets/LinkIcon.svg?react';

function AboutMe() {

    const {t} = useTranslation();

    const listAboutMe: ListItem[] = [
        {id: 1, text: 'aboutMe.languages', subItems: [
            {id: 1.1, text: 'aboutMe.ukrainian'},
            {id: 1.2, text: 'aboutMe.english', button: <a href={CAE} target="_blank" rel="noopener noreferrer"><LinkIcon className='link-icon'/></a>}, 
        ]},
        {id: 2, text: 'aboutMe.catTools', subItems: [
            {id: 2.1, text: 'aboutMe.trados'},
            {id: 2.2, text: 'aboutMe.smartcat'}
        ]},
        {id: 3, text: 'aboutMe.specialisation', subItems: [
            {id: 3.1, text: 'aboutMe.technical'},
            {id: 3.2, text: 'aboutMe.localisation'}
        ]},
        {id: 4, text: 'aboutMe.additional', subItems: [
            {id: 4.1, text: 'aboutMe.mtpe'},
            {id: 4.2, text: 'aboutMe.glossary'},
            {id: 4.3, text: 'aboutMe.dtp'}
        ]},
    ]

    return (
        <section className={styles.aboutMe} aria-labelledby='about'>
            <h2 id='about'>{t('aboutMe.title')}</h2>
            <List items={listAboutMe}/>
        </section>
    )
}

export default AboutMe