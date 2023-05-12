import { useState, useCallback } from 'react';
import cx from 'classnames';

import styles from './GlobalHeader.module.scss';

export default function GlobalHeader() {
    const [isHamburgerActive, setIsHumbergerActive] = useState(false);

    const hamburgerStyles = cx(
        styles?.hamburger,
        {
            [styles?.isActive]: isHamburgerActive
        }
    );

    const navigationStyles = cx(
        styles?.navigation,
        {
            [styles?.isMobile]: isHamburgerActive
        }
    )
    
    const onClickHamburgerMenu = useCallback(() => {
        setIsHumbergerActive(!isHamburgerActive)
    }, [isHamburgerActive, setIsHumbergerActive]);

    return (
        <nav className={styles?.globalHeader}>
            <button className={hamburgerStyles} onClick={onClickHamburgerMenu}>
                <span></span>
            </button>
            <ul className={styles?.brand}>
                <li>
                    <a className={styles?.logo} href="/" title="Wallace Shipping Containers"></a>
                </li>
            </ul>
            <ul className={navigationStyles}>
                <li className={cx(styles?.navItem, styles?.hasMenu, {[styles?.isMobile]: isHamburgerActive})}>
                    <a href="#">Shop Containers <span>&#x25BE;</span></a>
                    <ul>
                        <li><a href="/shop/containers/commercial" title="Shop Commercial Shipping Containers">Commercial</a></li>
                        <li><a href="/shop/containers/residential" title="Shop Residential Shipping Containers">Residential</a></li>
                    </ul>
                </li>
                <li className={cx(styles?.navItem, styles?.hasMenu, {[styles?.isMobile]: isHamburgerActive})}>
                    <a href="#">Locations <span>&#x25BE;</span></a>
                    <ul>
                        <li><a href="/locations/washington" title="Rent or Rent Shipping Containers in Washington">Washington</a></li>
                        <li><a href="/locations/oregon" title="Rent or Rent Shipping Containers in Oregon">Oregon</a></li>
                        <li><a href="/locations/idaho" title="Rent or Rent Shipping Containers in Idaho">Idaho</a></li>
                    </ul>
                </li>
                <li className={cx(styles?.navItem, styles?.hasMenu, {[styles?.isMobile]: isHamburgerActive})}>
                    <a href="#">Company <span>&#x25BE;</span></a>
                    <ul>
                        <li><a href="/company/about" title="About Wallace Shipping Containers">About</a></li>
                        <li><a href="/company/contact" title="Contact Wallace Shipping Containers">Contact</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}