import styles from './Standards.module.scss';
import { useTranslation } from 'react-i18next';
import List from '../components/List';
import type { ListItem } from '../components/List';
import Reliability from '../assets/standards/reliability.svg?react';
import Punctuality from '../assets/standards/punctuality.svg?react';
import Confidentiality from '../assets/standards/confidentiality.svg?react';
import B2B from '../assets/standards/b2b.svg?react';

function Standards() {

    const {t} = useTranslation();

    const listStandards: ListItem[] = [
        {id: 1, icon: <Reliability className={styles.icon}/>, text: 'info.standards.reliability.title', subItems: [
            {id: 1.1, text: 'info.standards.reliability.desc'}
        ]},
        {id: 2, icon: <Punctuality className={styles.icon}/>, text: 'info.standards.punctuality.title', subItems: [
            {id: 2.1, text: 'info.standards.punctuality.desc'}
        ]},
        {id: 3, icon: <Confidentiality className={styles.icon}/>, text: 'info.standards.confidentiality.title', subItems: [
            {id: 3.1, text: 'info.standards.confidentiality.desc'}
        ]},
        {id: 4, icon: <B2B className={styles.icon}/>, text: 'info.standards.b2b.title', subItems: [
            {id: 4.1, text: 'info.standards.b2b.desc'}
        ]}
    ]

    return (
        <section className={styles.standards} aria-labelledby='standards'>
            <h2 id='standards'>{t('info.standards.title')}</h2>
            <List items={listStandards}/>
        </section>
    )
}

export default Standards