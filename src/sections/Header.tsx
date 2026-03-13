import styles from './Header.module.scss'

function Header () {



    return (
        <header>
            <div className={styles.logonav}>
                <svg id="logo" className={styles.logo} data-name="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102.32 68">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <path className="cls-1" d="M30.5,44.9L51.57,0h9.43v68h-10V19.48l.49,2.85-17.52,36.67h-6.95L9.51,23.22l.49-3.74v48.52H0V0h9.43l21.07,44.9Z"/>
                        <path className="cls-1" d="M52,68V0h10v68h-10ZM57,9V0h40v9h-40ZM57,68v-9h23.84c3.59,0,6.37-.99,8.36-2.98,1.98-1.99,2.97-4.81,2.97-8.47s-.99-6.54-2.97-8.54c-1.98-2-4.77-3.01-8.36-3.01h-23.84v-9h23.19c4.69,0,8.68.81,11.97,2.43,3.29,1.62,5.81,3.95,7.54,7,1.74,3.05,2.61,6.76,2.61,11.12s-.87,8.03-2.61,11.07c-1.74,3.05-4.25,5.37-7.54,6.97s-7.28,2.4-11.97,2.4h-23.19Z"/>
                    </g>
                </svg>
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