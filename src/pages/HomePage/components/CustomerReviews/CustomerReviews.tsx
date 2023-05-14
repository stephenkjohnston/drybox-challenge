import { v4 } from 'uuid';

import styles from './CustomerReviews.module.scss';
import reviewsData from '../../../../data/reviews.json';

export default function CustomerReviews() {
    
    function renderReviews() {
        return reviewsData?.map(review => {
            return (
                <div className={styles?.review} key={v4()}>
                    <img src={review?.profile_photo} />
                    <article>
                        <b>{review?.name}</b>
                        <p>"{review?.review}"</p>
                    </article>

                </div>
            );
        })
    }

    return (
        <section className={styles?.customerReviews}>
            <h2>What our customers say about us</h2>
            <div className={styles?.reviews}>
                {renderReviews()}
            </div>
            
        </section>
    )
}