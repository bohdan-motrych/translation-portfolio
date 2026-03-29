import styles from './LanguageToggle.module.scss';
import DropdownIcon from '../assets/header/dropdown.svg?react';
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from 'react';

interface Language {
    code: string;
    label: string;
}

export default function LanguageToggle() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const languages: Language[] = [
        { code: 'en', label: 'English' },
        { code: 'uk', label: 'Українська' },
    ];

    const handleLanguageChange = (code: string) => {
        i18n.changeLanguage(code);
        setIsOpen(false);
    };

    const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.toggle} ref={ref}>
            <button
                className={styles.button}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                style={isOpen ? { borderRight: '1px solid var(--border)', borderLeft: '1px solid var(--border)' } : {}}
            >
                {currentLanguage.label} <DropdownIcon/>
            </button>
            {isOpen && (
                <ul className={styles.options} role="listbox">
                    {languages.map((lang) => (
                        <li
                            key={lang.code}
                            className={`${styles.option} ${lang.code === i18n.language ? styles.selected : ''}`}
                            onClick={() => handleLanguageChange(lang.code)}
                            role="option"
                            aria-selected={lang.code === i18n.language}
                        >
                            {lang.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}