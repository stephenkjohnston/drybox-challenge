import styles from './GlobalFooter.module.scss';

export default function GlobalFooter() {
    const date = new Date();

    return (
        <footer className={styles?.footer}>
            <div className={styles?.footerLocations}>
                <h6>Locations</h6>
                <p>
                    <a href="/locations/washington">Washington</a>&nbsp;/&nbsp; 
                    <a href="/locations/oregon">Oregon</a>
                </p>
            </div>
            <div className={styles?.footerLinks}>
                <a href="/containers" title="View our containers">Shop Containers</a>&nbsp;/&nbsp;
                <a href="/company/about" title="About Wallace Shipping Containers">About</a>&nbsp;/&nbsp;
                <a href="/company/contact" title="Contact Wallace Shipping Containers">Contact</a>
            </div>
            <div>
                &copy; {date?.getFullYear()} Wallace Shipping Containers. All Rights Reserved.
            </div>
        </footer>
    )
}