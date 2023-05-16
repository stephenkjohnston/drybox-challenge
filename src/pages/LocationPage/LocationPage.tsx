import { useParams } from 'react-router-dom';
import styles from './LocationPage.module.scss';
import LocationInfoBlock from 'components/shared/LocationInfoBlock/LocationInfoBlock';

export default function LocationPage() {
    const {state, city} = useParams();
    return (
        <section className={styles?.locationPage}>
            <LocationInfoBlock state={state} city={city} />
        </section>
    )
}