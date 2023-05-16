import { useParams } from 'react-router-dom';

export default function LocationsPage() {
    const { state } = useParams();

    return (
        <>
            <h2>Locations Page: {state}</h2>
        </>
    )
}