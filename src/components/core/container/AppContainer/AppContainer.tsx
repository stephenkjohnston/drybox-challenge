import { RouterProvider } from 'react-router-dom';
import router from 'router';

import GlobalHeader from 'components/core/GlobalHeader';

import styles from './AppContainer.module.scss';

export default function AppContainer() {
    return (
        <>
            <GlobalHeader />
            <main className={styles?.page}>
                <RouterProvider router={router} />
            </main>
        </>
    )
}