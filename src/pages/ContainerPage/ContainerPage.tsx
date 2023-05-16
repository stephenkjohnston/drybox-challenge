import { useParams } from 'react-router-dom';

export default function ContainerPage() {
    const { containerType } = useParams();
    return (
        <section>
            Container {containerType}
        </section>
    )
}