import styles from './Header.module.scss';
import LogoMain from '../assets/LogoMain.svg?react';

function Header () {



    return (
        <header>
            <div className={styles.logonav}>
                <LogoMain className="logo"/>
                <nav>
                    placeholder
                </nav>
            </div>
            <div className='styles.toggles'>
                placeholder
            </div>
        </header>
    )
}

export default Header