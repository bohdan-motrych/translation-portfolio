import styles from './Header.module.scss';
import Logo from '../assets/logo.svg?react';

function Header () {



    return (
        <header>
            <div className={styles.logonav}>
                <Logo className={styles.logo}/>
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