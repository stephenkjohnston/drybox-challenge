import { useState, useCallback } from 'react';
import cx from 'classnames';

import WSCLogo from '../../../assets/images/logo.png';
import styles from './GlobalHeader.module.scss';
import useModal from 'hooks/useModal/useModal';

export default function GlobalHeader() {
    
    // Set initial state of the hamburger menu
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    // Get the global modal hook
    const { show } = useModal();

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

    const menuClassNames = cx(
        styles?.navigation,
        {
            [styles?.visible]: isHamburgerOpen
        }
    );

    return (
        <header className={styles?.header}>
            <div className={styles?.hamburgerMenu}>
                <button role="button" className={hamburgerClassNames} aria-label="Main Menu" aria-expanded={isHamburgerOpen} onClick={onHamburgerClicked} >
                    <span aria-hidden="true"></span>
                </button>
            </div>
            <div className={styles?.brand}>
                <a href="/" className={styles?.navbarItem}>
                    <img src={WSCLogo} width="170" />
                </a>
            </div>
            <nav className={menuClassNames}>
                <ul>
                    <li className={styles?.menu}>
                        <a href="/containers" title="Shop Containers">Shop Containers</a>
                    </li>
                    <li className={styles?.menu}>
                        <a href="#">Locations</a>
                        <ul className={styles?.submenu}>
                            <li><a href="#">Washington</a></li>
                            <li><a href="#">Oregon</a></li>
                        </ul>
                    </li>
                    <li className={styles?.menu}>
                        <a href="#">Company</a>
                        <ul className={styles?.submenu}>
                            <li><a href="/company/about">About Us</a></li>
                            <li><a href="/company/contact">Contact</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div className={styles?.headerQuickContact}>
                <button className={styles?.headerQuickQuoteButton} onClick={() => show()}>Get a Quote</button>
                <a href="tel:18888888888" className={styles?.headerQuickPhoneCallButton}>888-888-8888</a>
            </div>
        </header>
    )
}