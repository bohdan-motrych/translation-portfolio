import styles from './Nav.module.scss';
import PlatformsLinks from './PlatformsLinks';
import { useState } from 'react';

export interface Anchors {
    id: number;
    text: string;
    scroll: string;
}

interface Nav {
    anchors: Anchors[];
}

export default function Nav({anchors}: Nav) {

    const [isOpen, setIsOpen] = useState(false);

    const scrollToElement = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
      setIsOpen(false);
    }
    
    return (
        <div className={styles.navContainer}>
            <button 
                className={`${styles.navButton} ${isOpen ? styles.open : ''}`} 
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav className={`${isOpen ? styles.open : ''}`}>
                {anchors.map((anchor) => (
                    <a key={anchor.id} onClick={(event) => {event.preventDefault(); scrollToElement(anchor.scroll);}}>{anchor.text}</a>
                ))}
                <div className={styles.linksContainer}><PlatformsLinks/></div>
            </nav>
        </div>
    )
}