import { useState, useCallback } from 'react';
import cx from 'classnames';

import WSCLogo from '../../../assets/images/logo.png';
import styles from './GlobalHeader.module.scss';

export default function GlobalHeader() {
    
    // Set initial state of the hamburger menu
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    // Callback to set the hamburger state
    const onHamburgerClicked = useCallback(() => {
        setIsHamburgerOpen(!isHamburgerOpen);
    }, [isHamburgerOpen, setIsHamburgerOpen]);

    // Hamburger menu class names
    const hamburgerClassNames = cx(
        styles?.hamburger,
        {
            [styles?.expanded]: isHamburgerOpen
        }
    )

    return (
        <header className={styles?.header}>
            <div className={styles?.brand}>
                <a href="/" className={styles?.navbarItem}>
                    <img src={WSCLogo} width="170" />
                </a>
                <button role="button" className={hamburgerClassNames} aria-label="Main Menu" aria-expanded={isHamburgerOpen} onClick={onHamburgerClicked} >
                    <span aria-hidden="true"></span>
                </button>
            </div>
        </header>
    )
}