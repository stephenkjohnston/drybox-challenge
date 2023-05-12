import { useParams } from 'react-router-dom';

export default function ShopPage() {

    const { containerType } = useParams();

    return (
        <>
            <h2>Shop Containers by: {containerType}</h2>
        </>
    )
}