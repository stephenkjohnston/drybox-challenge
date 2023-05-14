import styles from './RentOrBuyInfo.module.scss';

export default function RentOrBuyInfo() {
    return (
        <section className={styles?.buyingGuide}>
            <h2>Rent or Buy. Which is right for you?</h2>
            <p>
                Shipping containers provide a cost-efficient and durable storage solution for businesses with short-term or long-term storage needs, as the industry continues to grow to meet evolving global cargo transportation demands.
            </p>
            <div className={styles?.rentOrBuy}>
                <article>
                    <h3>Considering Renting?</h3>
                    <p>
                        Renting a shipping container offers a number of advantages, including flexibility in terms of duration and size, lower upfront costs compared to purchasing, and the ability to easily relocate the container as needed. Additionally, renting allows businesses to try out different sizes and types of containers to find the best fit for their needs.
                    </p>
                </article>
                <article>
                    <h3>Considering Buying?</h3>
                    <p>
                        Buying a shipping container provides businesses with a long-term storage solution that they can customize to their specific needs. It also offers greater flexibility in terms of modifications and alterations that can be made to the container over time, as well as the potential for cost savings in the long run compared to renting.
                    </p>
                </article>
            </div>
            <p>Ready to take the next step in securing your storage needs? Contact your personal container expert today to request a quote.</p>
                <a href="tel:18888888888" className={styles?.phoneNumberButton}>Call 888-888-8888</a>
        </section>
    )
}