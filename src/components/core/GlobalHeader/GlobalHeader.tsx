import { useState, useCallback, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import cx from 'classnames';

import WSCLogo from '../../../assets/images/logo.png';
import styles from './GlobalHeader.module.scss';
import useModal from 'hooks/useModal/useModal';

export default function GlobalHeader() {
    
    // Set initial state of the hamburger menu
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    let location = useLocation();
    
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

    useEffect(() => {
        setIsHamburgerOpen(false);
    }, [location]);

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
                        <Link to="/containers/">Shop Containers</Link>
                    </li>
                    <li className={styles?.menu}>
                        <a>Locations</a>
                        <ul className={styles?.submenu}>
                            <li><Link to="/locations/washington">Washington</Link></li>
                            <li><Link to="/locations/oregon">Oregon</Link></li>
                        </ul>
                    </li>
                    <li className={styles?.menu}>
                        <a>Company</a>
                        <ul className={styles?.submenu}>
                            <li><Link to="/company/about">About</Link></li>
                            <li><Link to="/company/contact">Contact</Link></li>
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