import { useParams } from 'react-router-dom';

export default function LocationsPage() {
    const { stateName } = useParams();

    return (
        <>
            <h2>Locations Page: {stateName}</h2>
        </>
    )
}