import CustomerCareIcon from '../../../../assets/images/customer-care.svg';
import QuoteIcon from '../../../../assets/images/price-list.svg';

import styles from './QuickQuote.module.scss';

export default function QuickQuote() {
    return (
        <section className={styles?.quickQuoteSection}>
            <h2>It's easy to started on your storage solutions</h2>
            <div className={styles?.quoteOptions}>
                <div className={styles?.quoteOption}>
                    <img src={QuoteIcon} alt="Free Online Qoute" />
                    <h3>Get an quote online</h3>
                    <p>Ready to take the next step? Fill out our online form today to request a quote for the perfect shipping container to meet your commercial or residential storage needs!</p>
                </div>
                <div className={styles?.quoteOption}>
                    <img src={CustomerCareIcon} alt="Speak with your container expert." />
                    <h3>Call a Container Expert</h3>
                    <p>Prefer a friendly voice or need more information, your helpful container expert is ready to help you.</p>
                    <a href="tel:18888888888" className={styles?.phoneNumberButton} title="Call 1-888-888-8888 to speak with your container expert.">Call 888.888.8888</a>
                </div>
            </div>
        </section>
    )
}