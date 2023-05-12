import styles from './HomePage.module.scss';

export default function HomePage() {
    return (
        <>
            <div className={styles?.videoBox}>
                <iframe
                width="1920"
                height="600px"
                    src="https://player.vimeo.com/video/791959565?h=147a3f377d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;background=true&amp;dnt=true"
                    allow="autoplay; fullscreen; picture-in-picture"
                    style={{ position:"absolute", top:0, left:0 }}>
                </iframe>
            </div>
        </>
    )
}