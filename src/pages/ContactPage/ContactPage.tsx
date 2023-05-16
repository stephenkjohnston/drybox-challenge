import styles from './ContactPage.module.scss';

export default function ContactPage() {
    return (
        <section>
            <div className={styles?.contactUsHero}>
                <h1>24/7 Wallace is here to help.</h1>
            </div>
            <div className={styles?.contactPage}>
                <h2 className={styles?.blurb}>We're here to help - contact us today for all your shipping container needs</h2>
                <div className={styles?.contactInfoBox}>
                    <div className={styles?.offices}>
                        <div className={styles?.section}>
                            <h3>Offices</h3>
                            <p>By Appointment Only</p>
                            <p>
                                <b>Headquaters:</b>
                                <p>1985 Wallace Rd. <br /> Chehalis, WA 98532</p>
                            </p>
                        </div>
                    </div>
                    <div className={styles?.contactInfo}>
                        <div className={styles?.section}>
                            <h3>Contact Information</h3>
                            <p>Monday &mdash; Friday <br /> 6AM &ndash; 6PM PDT</p>
                        </div>
                        <div className={styles?.section}>
                            <b><a href="tel:18888888888">(888) 888-8888</a></b> <br/>
                            <a href="mailto:info@wallaceshipping.com">info@wallaceshipping.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}