import styles from './Standards.module.scss';
import { useTranslation } from 'react-i18next';
import List from '../components/List';
import type { ListItem } from '../components/List';
import Reliability from '../assets/reliability.svg?react';
import Confidentiality from '../assets/confidentiality.svg?react';
import Punctuality from '../assets/punctuality.svg?react';
import B2B from '../assets/b2b.svg?react';

function Standards() {

    const {t} = useTranslation();

    const listStandards: ListItem[] = [
        {id: 1, icon: <Reliability className={styles.icon}/>, text: 'info.standards.reliability.title', subItems: [
            {id: 1.1, text: 'info.standards.reliability'}
        ]},
        {id: 2, icon: <Confidentiality className={styles.icon}/>, text: 'info.standards.confidentiality.title', subItems: [
            {id: 2.1, text: 'info.standards.confidentiality'}
        ]},
        {id: 3, icon: <Punctuality className={styles.icon}/>, text: 'info.standards.punctuality.title', subItems: [
            {id: 3.1, text: 'info.standards.punctuality'}
        ]},
        {id: 4, icon: <B2B className={styles.icon}/>, text: 'info.standards.b2b.title', subItems: [
            {id: 4.1, text: 'info.standards.b2b'}
        ]}
    ]

    return (
        <section className={styles.standards}>
            <h2>{t('info.standards.title')}</h2>
            <List items={listStandards}/>
        </section>
    )
}

export default Standards