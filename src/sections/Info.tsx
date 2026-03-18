import styles from './Info.module.scss'
import { useTranslation } from 'react-i18next'
import List from '../components/List';
import type { ListItem } from '../components/List';

function Info () {

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
            {id: 3.1, text: 'info.aboutMe.technical'}
        ]},
        {id: 4, text: 'info.aboutMe.additional', subItems: [
            {id: 4.1, text: 'info.aboutMe.localisation'},
            {id: 4.2, text: 'info.aboutMe.mtpe'},
            {id: 4.3, text: 'info.aboutMe.glossary'},
            {id: 4.4, text: 'info.aboutMe.dtp'}
        ]},
    ]

    const listAboutWork: ListItem[] = [
        {id: 1, text: 'info.aboutWork.reliability.title', subItems: [
            {id: 1.1, text: 'info.aboutWork.reliability'}
        ]},
        {id: 2, text: 'info.aboutWork.confidentiality.title', subItems: [
            {id: 2.1, text: 'info.aboutWork.confidentiality'}
        ]},
        {id: 3, text: 'info.aboutWork.deadlines.title', subItems: [
            {id: 3.1, text: 'info.aboutWork.deadlines'}
        ]},
        {id: 4, text: 'info.aboutWork.b2b.title', subItems: [
            {id: 4.1, text: 'info.aboutWork.b2b'}
        ]}
    ]

    return (
        <>
            <section className={styles.aboutMe}>
                <h2>{t('info.aboutMe.title')}</h2>
                <List items={listAboutMe}/>
            </section>
            <section className={styles.aboutWork}>
                <h2>{t('info.aboutWork.title')}</h2>
                <List items={listAboutWork}/>
            </section>
        </>
    )
}

export default Info