import QuickQuote from "components/shared/QuickQuote";
import { Container } from "react-bootstrap";
import { v4 } from 'uuid';
import { LocationInfoBlockProps } from "./LocationInfoBlock.types";
import WashingtonCities from 'data/locations/washington_cities.json';
import OregonCities from 'data/locations/oregon_cities.json';
import { getTwentyRandomCities, hyphenize_string } from "utils";
import { Link } from "react-router-dom";

import styles from "./LocationInfoBlock.module.scss";

export default function LocationInfoBlock(props: LocationInfoBlockProps) {
    const { city, state } = props;

    function getCities(): string[] {
        let stateCities: string[] = [];
        if (state === 'washington') {
            stateCities = getTwentyRandomCities(WashingtonCities);
        }

        if (state === 'oregon') {
            stateCities = getTwentyRandomCities(OregonCities);
        }

        console.log({stateCities})
        return stateCities ?? [];
    };

    function renderStateOrCity(): string {
        if (city && state) {
            return city.replace(/-/g, ', ');
        }

        if (!city && state) {
            return state;
        }

        return '';
    }

    const cities = getCities();
    

    return (
        <>
        <h1 className={styles?.pageHeader}>Shipping Containers in <span className={styles?.capitalize}>{renderStateOrCity()}</span></h1>
            <QuickQuote />
            <Container>
                <p>We are proud to provide high-quality shipping containers to our fellow businesses and residents in <span className={styles?.capitalize}>{renderStateOrCity()}</span>.</p>
                <p>Wallace is your container-based solutions expert if you want to rent or buy a shipping container <span className={styles?.capitalize}>{renderStateOrCity()}</span>. We provide shipping container rentals, office trailer rentals, shipping container modifications and moving and storage containers to <span className={styles?.capitalize}>{renderStateOrCity()}</span>, whether residential, for construction, or commercial.</p>
            </Container>
            <Container className={styles?.cities}>
                {cities?.map(city => (
                    <div key={v4()} className={styles?.city}>
                        <Link to={`/locations/${state}/${hyphenize_string(city)}`}>{city}</Link>
                    </div>
                ))}
            </Container>
        </>
    )
}