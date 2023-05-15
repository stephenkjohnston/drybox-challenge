import { createBrowserRouter } from "react-router-dom";
import HomePage from "pages/HomePage";
import ContainersPage from "pages/ContainersPage";
import LocationsPage from "pages/LocationsPage";
import AboutPage from "pages/AboutPage";
import ContactPage from "pages/ContactPage";

export default createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/containers',
        element: <ContainersPage />,
        children: [
            {
                path: '/containers/:containerType'
            }
        ]
    },
    {
        path: '/locations',
        element: <LocationsPage />,
        children: [
            {
                path: '/locations/:stateName'
            }
        ]
    },
    {
        path: '/company',
        children: [
            {
                path: '/company/about',
                element: <AboutPage />
            },
            {
                path: '/company/contact',
                element: <ContactPage />
            }
        ]
    }
])