import { RouterProvider, Routes, Route } from 'react-router-dom';
import router from 'router';

import GlobalHeader from 'components/core/GlobalHeader';
import GlobalFooter from 'components/core/GlobalFooter';

import ContainerData from "data/containers.json";
import useModal from 'hooks/useModal/useModal';
import { createPortal } from 'react-dom';
import Modal from 'components/core/Modal';

import styles from './AppContainer.module.scss';
import Router from 'router';
import HomePage from 'pages/HomePage';
import ContainersPage from 'pages/ContainersPage/ContainersPage';
import ContainerPage from 'pages/ContainerPage/ContainerPage';
import LocationsPage from 'pages/LocationsPage/LocationsPage';
import LocationPage from 'pages/LocationPage/LocationPage';
import AboutPage from 'pages/AboutPage/AboutPage';
import ContactPage from 'pages/ContactPage/ContactPage';

export default function AppContainer() {
    const { visible } = useModal();
    return (
        <>
            <GlobalHeader />
            <main className={styles?.page}>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/containers' element={<ContainersPage />} />
                    <Route path='/containers/:container' element={<ContainerPage />} />
                    <Route path='/locations'>
                        <Route path='/locations/:state' element={<LocationsPage />} />
                        <Route path='/locations/:state/:city' element={<LocationPage />} />
                    </Route>
                    <Route path='/company'>
                        <Route path='/company/about' element={<AboutPage />} />
                        <Route path='/company/contact' element={<ContactPage />} />
                    </Route>
                </Routes>
            </main>
            {visible && createPortal(
                <Modal />,
                document.body
            )}
            <GlobalFooter />
        </>
    )
}