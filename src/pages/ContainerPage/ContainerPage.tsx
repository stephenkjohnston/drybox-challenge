import { useLocation, Link } from 'react-router-dom';
import { v4 } from 'uuid';
import useContainer from 'hooks/useContainer/useContainer';
import { GlassMagnifier } from 'react-image-magnifiers';
import cx from 'classnames';

import styles from './ContainerPage.module.scss';
import useModal from 'hooks/useModal/useModal';
import { formatDimensions } from 'utils';
import useScrollToTop from 'hooks/useScrollToTop';

export default function ContainerPage() {
    const { pathname } = useLocation();
    const { show } = useModal();
    const containerID = pathname.split('/')[2];
    
    useScrollToTop();
    
    const { data } = useContainer(containerID);

    return (
        <section className={styles?.containerPage}>
            <ul className={styles?.breadcrumb}>
                <li><Link to="/">Home</Link></li>&nbsp;/&nbsp;
                <li><Link to="/containers">Containers</Link></li>&nbsp;/&nbsp;
                <li>{data?.title}</li>
            </ul>
            
            <h2 className={styles?.containerTitle}>{data?.title}</h2>
            <div className={styles?.containerOverview}>
                <figure>
                    <GlassMagnifier
                        className={styles?.productImage}
                        imageSrc={`${data?.image}`}
                        imageAlt={data?.title}
                        magnifierBorderSize={4}
                    />
                </figure>
                <div className={styles?.containerOverviewDetails}>
                    <h3>About this Container</h3>
                    <div className={styles?.containerDescription}>
                        {data?.description}
                    </div>
                    <div className={styles?.containerSpecs}>
                        <div className={styles?.colorSwatches}>
                            <h4>Colors: </h4>
                            <div className={styles?.colors}>
                                {data?.colors?.map(color => (
                                    <div key={`color-${color}`} className={cx(styles?.swatch, styles?.[color])}></div>
                                ))}
                            </div>

                            <h4>Dimensions</h4>
                            {data?.dimensions?.map(dimension => (
                                <div key={v4()} className={styles?.dimension}>{formatDimensions(dimension?.width)} x {formatDimensions(dimension.height)} x {formatDimensions(dimension.length)}</div>
                            ))}
                        </div>
                    </div>
                    <div className={styles?.quickQuotes}>
                        <button className={styles?.quickQuote} onClick={() => show()}>Get a Quote</button>
                        <a className={styles?.quickPhoneNumber} href="tel:18888888888">Call 888-888-8888</a>
                    </div>
                </div>
            </div>
        </section>
    )
}