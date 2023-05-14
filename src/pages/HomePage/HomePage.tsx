import styles from './HomePage.module.scss';
import CustomerReviews from './components/CustomerReviews';
import HomePageHero from './components/HomePageHero';
import RentOrBuyInfo from './components/RentOrBuyInfo/RentOrBuyInfo';

export default function HomePage() {
    return (
        <>
            <HomePageHero />
            <CustomerReviews />
            <RentOrBuyInfo />
        </>
    )
}