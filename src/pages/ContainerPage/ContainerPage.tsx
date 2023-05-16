import { useLocation, Link } from 'react-router-dom';
import containerData from 'data/containers.json';
import { Container } from 'types/containers';

import styles from './ContainerPage.module.scss';
import { useMemo } from 'react';
import useContainer from 'hooks/useContainer/useContainer';

export default function ContainerPage() {
    const { pathname } = useLocation();
    const containerID = pathname.split('/')[2];
    
    const { data } = useContainer(containerID);

    return (
        <section className={styles?.containerPage}>
            <ul className={styles?.breadcrumb}>
                <li><Link to="/">Home</Link></li>&nbsp;/&nbsp;
                <li><Link to="/containers">Containers</Link></li>&nbsp;/&nbsp;
                <li>{data?.title}</li>
            </ul>
            <div className={styles?.containerOverview}>
                <figure>
                    <img src={data?.image} alt={data?.title} />
                </figure>
                <div>
                    <h2 className={styles?.containerTitle}>{data?.title}</h2>
                    <div className={styles?.containerDescription}>
                        {data?.description}
                    </div>
                </div>
            </div>
        </section>
    )
}