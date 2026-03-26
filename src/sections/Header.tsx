import styles from './Header.module.scss';
import Nav from '../components/Nav.tsx';
import LanguageToggle from '../components/LanguageToggle.tsx';
import LogoMain from '../assets/LogoMain.svg?react';
import DropdownIcon from '../assets/header/dropdown.svg?react';
import type { Anchors } from "../components/Nav.tsx";
import { useTranslation } from 'react-i18next';

function Header () {

    const {t} = useTranslation();

    const anchors: Anchors[] = [
        {id: 1, text: t('nav.about'), scroll: 'about'},
        {id: 2, text: t('nav.standards'), scroll: 'standards'},
        {id: 3, text: t('nav.samples'), scroll: 'samples'},
        {id: 4, text: t('nav.contacts'), scroll: 'contacts'},
    ]

    return (
        <header>
            <div className={styles.logonav}>
                <LogoMain className="logo"/>
                <Nav anchors={anchors}/>
            </div>
            <div className={styles.toggles}>
                <span>English</span><DropdownIcon/>
            </div>
        </header>
    )
}

export default Header