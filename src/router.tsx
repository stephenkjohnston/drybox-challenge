import { createBrowserRouter } from "react-router-dom";
import HomePage from "pages/HomePage";
import ContainersPage from "pages/ContainersPage";
import LocationsPage from "pages/LocationsPage";
import AboutPage from "pages/AboutPage";
import ContactPage from "pages/ContactPage";
import ContainerPage from "pages/ContainerPage/ContainerPage";

export default createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/containers',
        element: <ContainersPage />
    },
    {
        path: '/containers/:containerType',
        element: <ContainerPage />
    },
    {
        path: '/locations/:state',
        element: <LocationsPage />,
    },
    {
        path: '/locations/:state/:city',
        element: <LocationsPage />,
    },
    {
        path: '/company/about',
        element: <AboutPage />
    },
    {
        path: '/company/contact',
        element: <ContactPage />
    }
])