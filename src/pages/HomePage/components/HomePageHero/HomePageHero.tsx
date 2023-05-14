import styles from './HomePageHero.module.scss';
import HeroImage from '../../../../assets/images/40ft-shipping-containers.png';
export default function HomePageHero() {
    return (
        <section className={styles?.hero}>
            <article>
                <h1>Small or Big. One or Many. We're your Shipping Container experts.</h1>
                <p>Get the storage space you need today - rent or buy one of our high-quality shipping containers for your commercial or residential needs.</p>

                <a href="/containers" title="View Containers">View Containers</a>
            </article>
            <img src={HeroImage} alt="Shipping containers"/>
        </section>
    )
}