import { RouterProvider } from 'react-router-dom';
import router from 'router';

import GlobalHeader from 'components/core/GlobalHeader';
import GlobalFooter from 'components/core/GlobalFooter';

import ContainerData from "data/containers.json";

import useModal from 'hooks/useModal/useModal';
import { createPortal } from 'react-dom';
import Modal from 'components/core/Modal';

import styles from './AppContainer.module.scss';

export default function AppContainer() {
    const { visible } = useModal();
    return (
        <>
            <GlobalHeader />
            <main className={styles?.page}>
                <RouterProvider router={router} />
            </main>
            {visible && createPortal(
                <Modal />,
                document.body
            )}
            <GlobalFooter />
        </>
    )
}