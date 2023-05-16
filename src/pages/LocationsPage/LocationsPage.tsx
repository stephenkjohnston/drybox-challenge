import { useParams } from 'react-router-dom';
import LocationInfoBlock from 'components/shared/LocationInfoBlock/LocationInfoBlock';

import styles from './LocationsPage.module.scss';

export default function LocationsPage() {
    const { state } = useParams();

    return (
        <section className={styles?.locationsPage}>
            <LocationInfoBlock state={state} />
        </section>
    )
}