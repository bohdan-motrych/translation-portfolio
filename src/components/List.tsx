import styles from './List.module.scss';
import type { ReactNode } from 'react';
import type { ParseKeys } from 'i18next';
import { Trans } from 'react-i18next';

export interface ListItem {
    id: number;
    text: ParseKeys;
    icon?: ReactNode;
    button?: ReactNode;
    subItems?: ListItem[];
}

interface ListProps {
    items: ListItem[];
}

export default function List({items}: ListProps){

    return (
        <div className={styles.list}>
            <ul>
                {items.map(item => (
                    <li key={item.id} className="list-item">
                        {item.icon}
                        <Trans i18nKey={item.text} components={{b: <b />, span: <span />}}/>
                        {item.subItems && item.subItems.length > 0 && (
                            <ul>
                                {item.subItems.map(subItem => (
                                    <li key={subItem.id} className="list-subitem"><Trans i18nKey={subItem.text} components={{b: <b />, span: <span />}}/>{subItem.button}</li>
                                ))}
                            </ul>
                        )}</li>
                ))}
            </ul>
        </div>
    )
}