import { useParams } from 'react-router-dom';

export default function LocationPage() {
    const {state, city} = useParams();
    return (
        <section>
            <h2>{state}</h2>
            <h3>{city}</h3>
        </section>
    )
}