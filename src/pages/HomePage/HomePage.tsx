import styles from './HomePage.module.scss';
import CustomerReviews from './components/CustomerReviews';
import HomePageHero from './components/HomePageHero';
import QuickQuote from './components/QuickQuote';
import RentOrBuyInfo from './components/RentOrBuyInfo';

export default function HomePage() {
    return (
        <>
            <HomePageHero />
            <CustomerReviews />
            <RentOrBuyInfo />
            <QuickQuote />
        </>
    )
}