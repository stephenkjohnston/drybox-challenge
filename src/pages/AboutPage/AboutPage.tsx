import styles from './AboutPage.module.scss';

export default function AboutPage() {
    return (
        <section>
            <div className={styles?.aboutUsHero}>
                <h2>Big containers with a small town touch.</h2>
            </div>
            <div className={styles?.aboutContent}>
                <h3>About Us</h3>
                <p>As a family-owned business founded in a small town, we take pride in offering a personalized touch to all our customers. Our company has expanded over the years, but we still strive to maintain that small-town feel that our customers have come to know and appreciate. We believe in treating every customer with respect, honesty, and integrity, and our team of experts is always ready to go above and beyond to meet their unique needs.</p>
                <p>Our headquarters is located in Lewis County, Washington, where we have been providing high-quality shipping containers for commercial and residential use since our founding. We believe in being an active member of the community, and we are dedicated to supporting local businesses and organizations that make our community strong. Our commitment to excellence extends to our employees, who receive ongoing training and support to ensure that they provide the best possible service to our customers.</p>
                <p>At our company, we believe that excellence is not just a goal, but a way of life. We are committed to providing our customers with the best possible experience, from the moment they contact us to the moment they receive their container. We believe in being transparent and upfront about all aspects of our business, including pricing, availability, and shipping logistics. Our team of experts is always available to answer any questions, provide guidance, and help customers find the right storage solution for their needs.</p>
                <p>Whether you're looking to rent or buy a shipping container, you can trust that our team will provide a personalized and attentive experience that is unmatched in the industry. We take pride in our small-town roots, and we are dedicated to maintaining that personal touch even as we expand. Contact us today to learn more about our commitment to excellence and how we can help you find the perfect shipping container for your commercial or residential needs.</p>
            </div>
        </section>
    )
}